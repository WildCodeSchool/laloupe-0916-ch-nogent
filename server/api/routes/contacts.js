import express from 'express';
import Contact from '../models/contact.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var contact = new Contact();

    router.get('/', contact.findAll);

    router.get('/:id', contact.findById);

    router.post('/', contact.create);

    router.put('/:id', contact.update);

    router.delete('/:id', contact.delete);

    app.use('/contacts', router);

};
