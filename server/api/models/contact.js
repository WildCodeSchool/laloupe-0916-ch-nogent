import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    nom: String,
    telephone: String
});

let model = mongoose.model('Contact', contactSchema);

export default class Contact {

    findAll(req, res) {
        model.find({}, (err, contacts) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(contacts);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, contact) => {
            if (err || !contact) {
                res.sendStatus(403);
            } else {
                res.json(contact);
            }
        });
    }

    create(req, res) {
        model.create({
                nom: req.body.nom,
                telephone: req.body.telephone
            },
            (err, contact) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(contact);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, contact) => {
            if (err || !contact) {
                res.status(500).send(err.message);
            } else {
                res.json(contact);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        });
    }
}
