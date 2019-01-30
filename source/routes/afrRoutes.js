const routes = (app) => {
    
    app.route('/contact')
    .get((req, res ) => 
    res.send('GET succesfull'))

    .post((req, res ) => 
    res.send('POST succesfull'));

    app.route('/contact/:contactId')
    .put((req, res ) => 
    res.send('PUT succesfull'))

    .delete((req, res ) => 
    res.send('DELETE succesfull'));

}

export default routes;