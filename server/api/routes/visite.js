import express from 'express';
import Visite from '../models/visite.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var visite = new Visite();

    router.get('/', visite.findAll);

    router.get('/:id', visite.findById);

    router.post('/', visite.create);

    router.put('/:id', visite.update);

    router.delete('/:id', visite.delete);

    app.use('/visites', router);

}
