const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require("passport-local");



const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {

    User.findOne({ email }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);

        user.verifyPassword(password, (err, isMatch) => {
            if (err) return done(err);
            if (!isMatch) return done(null, false);

            return done(null, user)
        })
    })
})

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, ({ sub }, done) => {
    User.findById(sub, (err, user) => {
        if (err) return done(err, false);
        if (!user) return done(null, false);
        done(null, user)
    })
})


passport.use(jwtLogin);
passport.use(localLogin);