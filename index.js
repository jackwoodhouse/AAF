import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './source/routes/afrRoutes';

const app = express();

const PORT = 3000;

//mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AAFdb', {
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => res.send(`Node and Express server is running on port ${PORT}`));

app.listen(PORT, () => console.log(`your server is running on ${PORT}`));
