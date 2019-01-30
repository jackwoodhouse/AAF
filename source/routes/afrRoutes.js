import { runInNewContext } from "vm";

const routes = (app) => {
    
    app.route('/contact')
    .get((req, res, next) => {
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    },  (req, res, next) => {
        res.send('GET succesfull')
    })
    

    .post((req, res ) => 
    res.send('POST succesfull'));

    app.route('/contact/:contactId')
    .put((req, res ) => 
    res.send('PUT succesfull'))

    .delete((req, res ) => 
    res.send('DELETE succesfull'));

}

export default routes;