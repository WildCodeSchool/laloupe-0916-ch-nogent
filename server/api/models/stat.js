import mongoose from 'mongoose';

const statSchema = new mongoose.Schema({
    texte: String
});

let model = mongoose.model('Stat', statSchema);

export default class Stat {

    findAll(req, res) {
        model.find({}, (err, stats) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(stats);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, stat) => {
            if (err || !stat) {
                res.sendStatus(403);
            } else {
                res.json(stat);
            }
        });
    }

    create(req, res) {
        model.create({
                texte: req.body.texte
            },
            (err, stat) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(stat);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            texte: req.body.texte
        }, (err, stat) => {
            if (err || !stat) {
                res.status(500).send(err.message);
            } else {
                res.json(stat);
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
