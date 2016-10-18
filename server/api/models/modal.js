import mongoose from 'mongoose';

const modalSchema = new mongoose.Schema({
    texte: String,
    titre: String,
    idparent: String
});

let model = mongoose.model('Modal', modalSchema);

export default class Modal {

    findAll(req, res) {
        model.find({}, (err, modals) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(modals);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, modal) => {
            if (err || !modal) {
                res.sendStatus(403);
            } else {
                res.json(modal);
            }
        });
    }

    create(req, res) {
        model.create({
                texte: req.body.texte,
                titre: req.body.titre,
                idparent: req.body.idparent
            },
            (err, modal) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(modal);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, modal) => {
            if (err || !modal) {
                res.status(500).send(err.message);
            } else {
                res.json(modal);
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
