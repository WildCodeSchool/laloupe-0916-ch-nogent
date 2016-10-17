import express from 'express';
import Modal from '../models/modal.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var modal = new Modal();

    router.get('/', modal.findAll);

    router.get('/:id', modal.findById);

    router.post('/', modal.create);

    router.put('/:id', modal.update);

    router.delete('/:id', modal.delete);

    app.use('/modals', router);

};
