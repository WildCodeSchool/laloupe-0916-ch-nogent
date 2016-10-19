import mongoose from 'mongoose';

const aproposSchema = new mongoose.Schema({
    titre: String,
    texte: String
});

let model = mongoose.model('Apropos', aproposSchema);

export default class Apropos {

    findAll(req, res) {
        model.find({}, (err, aproposs) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(aproposs);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, apropos) => {
            if (err || !apropos) {
                res.sendStatus(403);
            } else {
                res.json(apropos);
            }
        });
    }

    create(req, res) {
        model.create({
                titre: req.body.titre,
                texte: req.body.texte
            },
            (err, apropos) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(apropos);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, apropos) => {
            if (err || !apropos) {
                res.status(500).send(err.message);
            } else {
                res.json(apropos);
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
