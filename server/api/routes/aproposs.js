import express from 'express';
import Apropos from '../models/apropos.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var apropos = new Apropos();

    router.get('/', apropos.findAll);

    router.get('/:id', apropos.findById);

    router.post('/', apropos.create);

    router.put('/:id', apropos.update);

    router.delete('/:id', apropos.delete);

    app.use('/aproposs', router);

};
