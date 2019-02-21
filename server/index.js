import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD, OPTIONS, GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

routes(app);
fileRoutes(app);

app.get('/', (req, res) => res.send(`Hello world! on: ${Port}`));

app.listen(Port, () => console.log(`The server is running on: ${Port}`));
