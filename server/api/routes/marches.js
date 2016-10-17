import express from 'express';
import Marche from '../models/marche.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var marche = new Marche();

    router.get('/', marche.findAll);

    router.get('/:id', marche.findById);

    router.post('/', marche.create);

    router.put('/:id', marche.update);

    router.delete('/:id', marche.delete);

    app.use('/marches', router);

};
