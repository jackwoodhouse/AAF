import { addNewContact } from '../controllers/afrController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, (req, res) => {
            res.send('GET succesfull');
        })
        .post(addNewContact);
    app.route('/contact/:contactId')
        .put((req, res) => res.send('PUT succesfull'))
        .delete((req, res) => res.send('DELETE succesfull'));
};


export default routes;
