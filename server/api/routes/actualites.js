import express from 'express';
import Actualite from '../models/actualite.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var actualite = new Actualite();

    router.get('/', actualite.findAll);

    router.get('/:id', actualite.findById);

    router.post('/', actualite.create);

    router.put('/:id', actualite.update);

    router.delete('/:id', actualite.delete);

    app.use('/actualites', router);

};
