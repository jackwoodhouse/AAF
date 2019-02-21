import { // import methods from user controller
    addNewUser,
    getUser,
    getUserWithID,
    updateUser,
    deleteUser,
} from '../controllers/UserController';

const passport = require('passport'); // passport would be used for user authentication
require('../config/passport')(passport);

const routes = (app) => {
    app.route('/user')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getUser) // get all files
        .post(addNewUser); // add new user to db

    app.route('/user/:userId')
        .get(getUserWithID) // get specific user
        .put(updateUser)
        .delete(deleteUser); // delete specific user
};

export default routes;

/* app.route('/login', async(res, req, next) => {
    passport.authenicate('login', async(err, user, info) => {
        try{
            if(err || !user){
                const error = new Error('An Error Occured')
                return next(error);
            }
            req.login(user, {session: false}, async (error) => {
                if(error) return next(error)
                const body = {_id : user._id, email : user.user.email };
                const token = jwt.sign({user : body}, 'top_secret');
                return res.json({ token });
            }); } catch (error) {
                  return next(error);
                }
            })(req, res, next);
    }); */
