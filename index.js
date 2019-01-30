import express from 'express';
import { request } from "https";
import routes from './source/routes/afrRoutes';

const app = express();

const PORT = 3000;

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and Express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on ${PORT}`)
);