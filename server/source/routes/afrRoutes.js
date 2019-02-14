import {
    addNewUser,
    getUser,
    getUserWithID,
    updateUser,
    deleteUser,
} from '../controllers/afrController';

const routes = (app) => {
    app.route('/user')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getUser)
        .post(addNewUser);

    app.route('/user/:userId')
        .get(getUserWithID)
        .put(updateUser)
        .delete(deleteUser);
};

export default routes;
