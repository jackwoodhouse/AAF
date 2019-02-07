import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './source/routes/afrRoutes';
import fileRoutes from './source/routes/afrFileRoutes';

const app = express();

const Port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AAFdb', {
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
fileRoutes(app);

app.get('/', (req, res) => res.send(`Hello world! on: ${Port}`));

app.listen(Port, () => console.log(`The server is running on: ${Port}`));