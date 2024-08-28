"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const user_1 = require("../databases/postgres/entities/user");
// Configure the Google OAuth strategy
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/v1/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if the profile contains emails
        if (!profile.emails || profile.emails.length === 0) {
            return done(new Error('No email associated with this Google account'), undefined);
        }
        // Extract the user's email
        const email = profile.emails[0].value;
        // Find the user by email
        let user = await user_1.Person.findOneBy({ email });
        // If the user doesn't exist, create a new one
        if (!user) {
            user = user_1.Person.create({
                firstName: profile.name?.givenName || '',
                lastName: profile.name?.familyName || '',
                email,
                password: '', // Password is not required for Google-authenticated users
            });
            await user.save();
        }
        return done(null, user);
    }
    catch (error) {
        return done(error, undefined);
    }
}));
// Serialize the user ID into the session
passport_1.default.serializeUser((user, done) => {
    done(null, user.id); // Explicitly cast the user to Person to access the ID
});
// Deserialize the user by ID from the session
passport_1.default.deserializeUser(async (id, done) => {
    try {
        const user = await user_1.Person.findOneBy({ id });
        done(null, user || undefined);
    }
    catch (error) {
        done(error, undefined);
    }
});
exports.default = passport_1.default;
