import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import { Person } from '../databases/postgres/entities/user';

// Configure the Google OAuth strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: "/api/v1/auth/google/callback"
},
async (accessToken, refreshToken, profile: Profile, done) => {
  try {
    // Check if the profile contains emails
    if (!profile.emails || profile.emails.length === 0) {
      return done(new Error('No email associated with this Google account'), undefined);
    }

    // Extract the user's email
    const email = profile.emails[0].value;

    // Find the user by email
    let user = await Person.findOneBy({ email });

    // If the user doesn't exist, create a new one
    if (!user) {
      user = Person.create({
        firstName: profile.name?.givenName || '',
        lastName: profile.name?.familyName || '',
        email,
        password: '', // Password is not required for Google-authenticated users
      });
      await user.save();
    }
    return done(null, user);
  } catch (error) {
    return done(error, undefined);
  }
}));

// Serialize the user ID into the session
passport.serializeUser((user, done) => {
  done(null, (user as Person).id); // Explicitly cast the user to Person to access the ID
});

// Deserialize the user by ID from the session
passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await Person.findOneBy({ id });
    done(null, user || undefined);
  } catch (error) {
    done(error, undefined);
  }
});

export default passport;
