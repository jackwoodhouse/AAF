import mongoose from 'mongoose';

import { FileSchema } from '../models/afrFileModel';

const File = mongoose.model('Files', FileSchema);

export const addNewFile = (req, res) => {
    const newFile = new File({
        name: req.body.name,
        creator: req.body.creator,
        creation_date: req.body.creation_date,
        mime_type: req.body.mime_type,
        data: [{
            title: req.body.title,
            version_number: req.body.version_number,
            version_author: req.body.version_author,
            version_date: req.body.version_date,
            file_size: req.body.file_size,
        }],
        locked: req.body.locked,
    });
    newFile.save((err, file) => {
        if (err) {
            res.send(err);
        } else {
            res.json(file);
        }
    });
};

export const getVersionOfFile = (req, res) => {
    File.findById(req.params.fileId, (err, file) => {
        if (err) {
            res.send(err);
        } else {
            const versionNumber = req.params.version_number - 1;
            res.json({
                _id: file.id,
                name: file.name,
                title: file.data[versionNumber].title,
                version_number: file.data[versionNumber].version_number,
                version_author: file.data[versionNumber].author,
                version_date: file.data[versionNumber].created_date,
                file_size: req.body.file_size,
            });
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
                const fileToUpdate = file;
                fileToUpdate.data[6] = {
                    title: req.body.title,
                    version_number: req.body.version_number,
                    version_author: req.body.version_author,
                    version_date: req.body.version_date,
                    file_size: req.body.file_size,
                };
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
