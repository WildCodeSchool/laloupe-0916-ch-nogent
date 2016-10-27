import express from 'express';
import Rendezvous from '../models/rendezvous.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var rendezvous = new Rendezvous();

    router.get('/', rendezvous.findAll);

    router.get('/:id', rendezvous.findById);

    router.post('/', rendezvous.create);

    router.put('/:id', rendezvous.update);

    router.delete('/:id', rendezvous.delete);

    app.use('/rendezvouss', router);

}
