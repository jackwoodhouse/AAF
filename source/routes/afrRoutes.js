import {
    addNewContact,
    getContact,
    getContactWithID,
    updateContact,
    deleteContact,
} from '../controllers/afrController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContact)
        .post(addNewContact);

    app.route('/contact/:contactId')
        .get(getContactWithID)
        .put(updateContact)
        .delete(deleteContact);
};


export default routes;
