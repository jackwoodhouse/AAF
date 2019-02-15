const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

// load up the user model
const User = require('../models/UserModel');
const settings = require('../config/settings'); // get settings file

module.exports = (passport) => {
    const opts = {};
    opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = settings.secret;
    passport.use(new JWTstrategy(opts, (jwtpayload, done) => {
        User.findOne({ id: jwtpayload.id }, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};
