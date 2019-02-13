import mongoose from 'mongoose';

export const FileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Enter a file name1',
    },
    creator: {
        type: String,
    },
    creation_date: {
        type: Date,
        default: Date.now,
    },
    /* mime_type: {
        type: String,
        required: 'Enter a file type',
    }, */
    data:
    [
        {
            type: Array,
            required: 'Enter metadata',
            title: {
                type: String,
                required: 'Enter a title2',
            },
            version_number: {
                type: Number,
                default: 1,
            },
            version_author: {
                type: String,
                required: 'Enter an author',
            },
            version_date: {
                type: Date,
                default: Date.now,
            },
            file_size: {
                type: String,
            },

        },
    ],
    locked: {
        type: Boolean,
        default: false,
    },
});
