import mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
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
    },
    company: {
        type: String,
    },
    phone: {
        type: Number,
    },
    created_data: {
        type: Date,
        default: Date.now,
    },
});
