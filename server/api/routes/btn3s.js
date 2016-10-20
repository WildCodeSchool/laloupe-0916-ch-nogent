import express from 'express';
import Btn3 from '../models/btn3.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var btn3 = new Btn3();

    router.get('/', btn3.findAll);

    router.get('/:id', btn3.findById);

    router.post('/', btn3.create);

    router.put('/:id', btn3.update);

    router.delete('/:id', btn3.delete);

    app.use('/btn3s', router);

}
