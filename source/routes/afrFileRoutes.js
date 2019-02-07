import {
    addNewFile,
    getFiles,
    deleteAllFiles,
    getFileWithId,
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

    app.route('/files/:fileId')
        .get(getFileWithId)
        .put(updateFile)
        .delete(deleteFile);
};

export default fileRoutes;
