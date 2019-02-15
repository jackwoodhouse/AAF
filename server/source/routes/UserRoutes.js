import {
    addNewUser,
    getUser,
    getUserWithID,
    updateUser,
    deleteUser,
} from '../controllers/UserController';

const passport = require('passport');
require('../config/passport')(passport);

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
    
    app.route('/login', async(res, req, next) => {
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
        });
};

export default routes;
