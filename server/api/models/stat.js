import mongoose from 'mongoose';

const statSchema = new mongoose.Schema({
    texte1: String,
    texte2: String,
    texte3: String,
    texte4: String
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
                texte1: req.body.texte1,
                texte2: req.body.texte2,
                texte3: req.body.texte3,
                texte4: req.body.texte4
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
          texte1: req.body.texte1,
          texte2: req.body.texte2,
          texte3: req.body.texte3,
          texte4: req.body.texte4
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
