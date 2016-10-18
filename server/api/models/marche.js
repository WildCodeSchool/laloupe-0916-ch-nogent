import mongoose from 'mongoose';

const marcheSchema = new mongoose.Schema({
    texte: String,
    titre: String,
    lien: String
});

let model = mongoose.model('Marche', marcheSchema);

export default class Marche {

    findAll(req, res) {
        model.find({}, (err, marches) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(marches);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, marche) => {
            if (err || !marche) {
                res.sendStatus(403);
            } else {
                res.json(marche);
            }
        });
    }

    create(req, res) {
        model.create({
                texte: req.body.texte,
                titre: req.body.titre,
                lien: req.body.lien
            },
            (err, marche) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(marche);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, marche) => {
            if (err || !marche) {
                res.status(500).send(err.message);
            } else {
                res.json(marche);
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
