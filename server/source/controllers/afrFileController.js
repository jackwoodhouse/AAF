import mongoose from 'mongoose';

import { FileSchema } from '../models/afrFileModel';

const File = mongoose.model('Files', FileSchema);

export const addNewFile = (req, res) => {
    const newFile = new File({
        name: req.body.name,
        data: [{
            title: req.body.title,
            author: req.body.author,
            tags: req.body.tags,
        }],
    });
    newFile.save((err, file) => {
        if (err) {
            res.send(err);
        } else {
            res.json(file);
        }
    });
};

export const getFiles = (req, res) => {
    File.find({}, (err, file) => {
        if (err) {
            res.send(err);
        } else {
            res.json(file);
        }
    });
};

export const getFileWithId = (req, res) => {
    File.findById(req.params.fileID, (err, file) => {
        if (err) {
            res.send(err);
        } else {
            res.json(file);
        }
    });
};

export const updateFile = (req, res) => {
    File.findOneAndUpdate({ _id: req.params.fileId }, req.body, { new: true },
        (err, file) => {
            if (err) {
                res.send(err);
            } else {
                res.json(file);
            }
        });
};

export const deleteFile = (req, res) => {
    File.deleteOne({ _id: req.params.fileId }, (err) => {
        if (err) {
            res.send(err);
        } res.json({ message: 'Done!' });
    });
};

export const deleteAllFiles = (req, res) => {
    File.deleteMany({}, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.end();
        }
    });
};
