import express from 'express';
import Annuaire from '../models/annuaire.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var annuaire = new Annuaire();

    router.get('/', annuaire.findAll);

    router.get('/:id', annuaire.findById);

    router.post('/', annuaire.create);

    router.put('/:id', annuaire.update);

    router.delete('/:id', annuaire.delete);

    app.use('/annuaires', router);

};
