"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const user_1 = require("../databases/postgres/entities/user");
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/v1/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        if (!profile.emails || profile.emails.length === 0) {
            return done(new Error('No email associated with this Google account'), undefined);
        }
        const email = profile.emails[0].value;
        let user = await user_1.Person.findOneBy({ email });
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
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
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
