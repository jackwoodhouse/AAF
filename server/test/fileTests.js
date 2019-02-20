import { expect } from 'chai';

import mongoose from 'mongoose';

import { describe, it } from 'mocha';

const mocha = require('mocha');


const { FileSchema } = require('../source/models/afrFileModel');

const File = mongoose.model('File', FileSchema);

describe('name attribute', () => {
    it('should be invalid if name attribute is empty', (done) => {
        const file = new File();
        expect(err.errors.name).to.exist;
        file.validate(() => {
            done();
        });
    });
});

describe('file', () => {
    it('should be invalid if creator attribute is empty', (done) => {
        const file = new File();

        file.validate((err) => {
            expect(err.errors.creator).to.exist;
            done();
        });
    });
});

describe('file', () => {
    it('should be invalid if mime_type is empty', (done) => {
        const file = new File();

        file.validate((err) => {
            expect(err.errors.mime_type).to.exist;
            done();
        });
    });
});
