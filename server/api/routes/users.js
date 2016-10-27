import express from 'express';
import User from '../models/user.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {

    var user = new User();

    app.get('/loggedin', Auth.hasAuthorization, (req, res, next) => {
        res.sendStatus(200);
    });

    app.post('/login', user.connect);

    router.get('/', Auth.hasAuthorization, user.findAll);

    router.get('/:id', Auth.hasAuthorization, user.findById);

    router.post('/', user.create);

    router.put('/:id', Auth.hasAuthorization, user.update);

    router.delete('/:id', Auth.hasAuthorization, user.delete);

    app.use('/users', router);

}
