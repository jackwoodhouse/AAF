import mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
    username: {
        type: String,
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
