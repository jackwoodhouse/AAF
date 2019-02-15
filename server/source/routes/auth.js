const passport = require('passport');

require('../config/passport')(passport);
const express = require('express');

const jwt = require('jsonwebtoken');
const settings = require('../config/settings');

const router = express.Router();
const User = require('../models/UserModel');

router.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username,
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
        // check if password matches
            user.comparePassword(req.body.password, (isMatch) => {
                if (isMatch && !err) {
                // if user is found and password is right create a token
                    const token = jwt.sign(user.toJSON(), settings.secret);
                    // return the information including token as JSON
                    res.json({ success: true, token });
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});

module.exports = router;
