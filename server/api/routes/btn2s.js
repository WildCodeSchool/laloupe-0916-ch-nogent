import express from 'express';
import Btn2 from '../models/btn2.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var btn2 = new Btn2();

    router.get('/', btn2.findAll);

    router.get('/:id', btn2.findById);

    router.post('/', btn2.create);

    router.put('/:id', btn2.update);

    router.delete('/:id', btn2.delete);

    app.use('/btn2s', router);

}
