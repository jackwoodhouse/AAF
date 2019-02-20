import mongoose from 'mongoose';

export const FileSchema = new mongoose.Schema({

    name: {
        type: String,
        required: 'Enter a file name',
    },
    creator: {
        type: String,
        required: 'Enter a file name',
    },
    creation_date: {
        type: Date,
        default: Date.now,
    },
    mime_type: {
        type: String,
        required: 'Enter a file type',
    },
    data:
    [
        {
            title: {
                type: String,
                required: 'Enter a title',
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
            keywords_tags: {
                type: String,
            },
            file_size: {
                type: String,
            },
        },
    ],
});
