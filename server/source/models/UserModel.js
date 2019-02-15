import mongoose from 'mongoose';

const bcrypt = require('bcrypt-nodejs');

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: 'enter a username',
    },
    password: {
        type: String,
        required: 'enter a password',
    },
    firstName: {
        type: String,
        required: 'enter first name',
    },
    lastName: {
        type: String,
        required: 'enter last name',
    },
    email: {
        type: String,
        required: 'enter valid email',
    },
    phone: {
        type: Number,
    },
    created_data: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', (next) => {
    const User = this;
    const hash = bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

UserSchema.methods.isValidPassword = (password) => {
    const User = this;
    const compare = bcrypt.compare(password, User.password);
    return compare;
};
