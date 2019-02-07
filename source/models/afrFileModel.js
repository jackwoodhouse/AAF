import mongoose from 'mongoose';

export const FileSchema = new mongoose.Schema({
    nameWithFileType: {
        type: String,
        required: 'Enter a file name',
    },
    original_author: {
        type: String,
    },
    creation_date: {
        type: Date,
        required: 'Enter a creation date',
    },
    mime_type: { // ???????????
        type: String,
        required: 'Enter a mime type',
    },
    data: // what is this for??
    [
        {
            type: Array,
            required: 'Enter metadata',
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
