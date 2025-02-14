const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        if (user) {
            done(null, user)
        }
    })
})

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async(accessToken, refreshToken, profile, done) => {
        const exsistingUser = await User.findOne({ googleId: profile.id })
        if (exsistingUser) {
            return done(null, existingUser)
        }
        const newUser = await new User({ googleId: profile.id }).save()
        if (newUser)
            done(null, user)

    }));