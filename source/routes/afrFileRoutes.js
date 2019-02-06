import {
    addNewFile,
    getFiles,
    deleteAllFiles,
    getFileById,
    updateFile,
    deleteFile,
} from '../controllers/afrFileController';

const fileRoutes = (app) => {
    app.route('/files')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getFiles)
        .post(addNewFile)
        .delete(deleteAllFiles);

    app.route('/contact/:contactId')
        .get(getFileById)
        .put(updateFile)
        .delete(deleteFile);
};

export default fileRoutes;
