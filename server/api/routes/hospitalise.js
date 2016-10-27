import express from 'express';
import Hospitalise from '../models/hospitalise.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var hospitalise = new Hospitalise();

    router.get('/', hospitalise.findAll);

    router.get('/:id', hospitalise.findById);

    router.post('/', hospitalise.create);

    router.put('/:id', hospitalise.update);

    router.delete('/:id', hospitalise.delete);

    app.use('/hospitalises', router);

}
