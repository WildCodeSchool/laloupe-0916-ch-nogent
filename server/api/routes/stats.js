import express from 'express';
import Stat from '../models/stat.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var stat = new Stat();

    router.get('/', stat.findAll);

    router.get('/:id', stat.findById);

    router.post('/', stat.create);

    router.put('/:id', stat.update);

    router.delete('/:id', stat.delete);

    app.use('/stats', router);

};
