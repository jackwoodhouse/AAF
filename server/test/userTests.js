import mongoose from 'mongoose';
import { describe, it, expect } from 'chai';

const { UserSchema } = require('../source/models/UserModel.js');

const User = mongoose.model('User', UserSchema);


describe('User', () => {
    it('should be invalid if username is empty', (done) => {
        const user = new User();
        user.validate((err) => {
            expect(err.errors.username).to.exist;
            done();
        });
    });
});

describe('User', () => {
    it('should be invalid if password is empty', (done) => {
        const user = new User();

        user.validate((err) => {
            expect(err.errors.password).to.exist;
            done();
        });
    });
});

describe('User', () => {
    it('should be invalid if firstName is empty', (done) => {
        const user = new User();

        user.validate((err) => {
            expect(err.errors.firstName).to.exist;
            done();
        });
    });
});

describe('User', () => {
    it('should be invalid if lastName is empty', (done) => {
        const user = new User();

        user.validate((err) => {
            expect(err.errors.lastName).to.exist;
            done();
        });
    });
});

describe('User', () => {
    it('should be invalid if email is empty', (done) => {
        const user = new User();

        user.validate((err) => {
            expect(err.errors.email).to.exist;
            done();
        });
    });
});


describe('User', () => {
    it('should be invalid if created_date is empty', (done) => {
        const user = new User();

        user.validate((err) => {
            expect(err.errors.created_date).to.not.exist;
            done();
        });
    });
});
