import express from 'express';
import Btn1 from '../models/btn1.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var btn1 = new Btn1();

    router.get('/', btn1.findAll);

    router.get('/:id', btn1.findById);

    router.post('/', btn1.create);

    router.put('/:id', btn1.update);

    router.delete('/:id', btn1.delete);

    app.use('/btn1s', router);

}
