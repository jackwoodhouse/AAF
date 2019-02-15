import mongoose from 'mongoose';

import { UserSchema } from '../models/UserModel';

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};

export const getUser = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};


export const getUserWithID = (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};

export const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true },
        (err, user) => {
            if (err) {
                res.send(err);
            } else {
                res.json(user);
            }
        });
};

export const deleteUser = (req, res) => {
    User.remove({ _id: req.params.userId }, (err) => {
        if (err) {
            res.send(err);
        } res.json({ message: 'Done!' });
    });
};
