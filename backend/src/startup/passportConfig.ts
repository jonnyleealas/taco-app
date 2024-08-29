import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import { Person } from '../databases/postgres/entities/user';

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: "/api/v1/auth/google/callback"
  
},

async (accessToken, refreshToken, profile: Profile, done) => {
  try {
    if (!profile.emails || profile.emails.length === 0) {
      return done(new Error('No email associated with this Google account'), undefined);
    }

    const email = profile.emails[0].value;
    let user = await Person.findOneBy({ email });

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

passport.serializeUser((user, done) => {
  done(null, (user as Person).id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await Person.findOneBy({ id });
    done(null, user || undefined);
  } catch (error) {
    done(error, undefined);
  }
});

export default passport;
