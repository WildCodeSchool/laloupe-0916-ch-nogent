import express from 'express';
import Ehpad from '../models/ehpad.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var ehpad = new Ehpad();

    router.get('/', ehpad.findAll);

    router.get('/:id', ehpad.findById);

    router.post('/', ehpad.create);

    router.put('/:id', ehpad.update);

    router.delete('/:id', ehpad.delete);

    app.use('/ehpads', router);

}
