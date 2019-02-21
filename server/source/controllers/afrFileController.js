import mongoose from 'mongoose';

import { FileSchema } from '../models/afrFileModel';

const File = mongoose.model('Files', FileSchema);

export const addNewFile = (req, res) => { // adding a file inline with the model for the database
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
            keywords_tags: req.body.keywords_tags,
            file_size: req.body.file_size,
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

export const getVersionOfFile = (req, res) => { // returns all the file information for the file
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
                version_author: file.data[versionNumber].version_author,
                version_date: file.data[versionNumber].created_date,
                keywords_tags: file.data[versionNumber].keywords_tags,
                file_size: file.data[versionNumber].file_size,
            });
        }
    });
};

export const getFiles = (req, res) => { // returns all files
    File.find({}, (err, file) => {
        if (err) {
            res.send(err);
        } else {
            res.json(file);
        }
    });
};

export const getFileWithId = (req, res) => { // returns selected file 
    File.findById(req.params.fileId, (err, file) => {
        if (err) {
            res.send(err);
        } else {
            res.json(file);
        }
    });
};

export const updateFile = (req, res) => {
    File.findById(req.params.fileId, (err, file) => {
        if (err) {
            res.send(err);
        } else {
            const fileToUpdate = file;
            fileToUpdate.data[file.data.length] = {
                title: req.body.title,
                version_number: req.body.version_number,
                version_author: req.body.version_author,
                version_date: req.body.version_date,
                keywords_tags: req.body.keywords_tags,
                file_size: req.body.file_size,
            };
            File.findOneAndUpdate({ _id: req.params.fileId },
                new File(fileToUpdate), { new: true },
                (err2, updatedFile) => {
                    if (err2) {
                        res.send(err2);
                    } else {
                        res.json(updatedFile);
                    }
                });
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
