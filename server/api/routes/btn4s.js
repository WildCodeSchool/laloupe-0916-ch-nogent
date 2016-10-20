import express from 'express';
import Btn4 from '../models/btn4.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var btn4 = new Btn4();

    router.get('/', btn4.findAll);

    router.get('/:id', btn4.findById);

    router.post('/', btn4.create);

    router.put('/:id', btn4.update);

    router.delete('/:id', btn4.delete);

    app.use('/btn4s', router);

}
