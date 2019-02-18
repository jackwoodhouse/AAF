import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
/* import session from 'express-session';
import passport from 'passport'; */

import cors from 'cors';

import routes from './source/routes/UserRoutes';
import fileRoutes from './source/routes/afrFileRoutes';

const app = express();

const Port = 3000;

const auth = require('./source/routes/auth');

app.use('/api/auth', auth);


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AAFdb', {
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());

routes(app);
fileRoutes(app);


app.get('/', (req, res) => res.send(`Hello world! on: ${Port}`));

app.listen(Port, () => console.log(`The server is running on: ${Port}`));
