import mongoose from 'mongoose';

const actualiteSchema = new mongoose.Schema({
    titre: String,
    texte: String
});

let model = mongoose.model('Actualite', actualiteSchema);

export default class Actualite {

    findAll(req, res) {
        model.find({}, (err, actualites) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(actualites);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, actualite) => {
            if (err || !actualite) {
                res.sendStatus(403);
            } else {
                res.json(actualite);
            }
        });
    }

    create(req, res) {
        model.create({
                titre: req.body.titre,
                texte: req.body.texte
            },
            (err, actualite) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(actualite);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, actualite) => {
            if (err || !actualite) {
                res.status(500).send(err.message);
            } else {
                res.json(actualite);
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
