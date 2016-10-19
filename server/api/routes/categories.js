import express from 'express';
import Categories from '../models/categorie.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var categorie = new Categories();

    router.get('/', categorie.findAll);

    router.get('/by-parent/:idparent', categorie.findParent);

    router.get('/:id', categorie.findById);

    router.post('/', categorie.create);

    router.put('/:id', categorie.update);

    router.delete('/:id', categorie.delete);

    app.use('/categories', router);

};
