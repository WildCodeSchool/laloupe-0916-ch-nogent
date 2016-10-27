import mongoose from 'mongoose';

const ehpadSchema = new mongoose.Schema({
    title1: String,
    title2: String,
    title3: String,
    title4: String,
    texte1: String,
    texte2: String,
    texte3: String,
    texte4: String
});

let model = mongoose.model('Ehpad', ehpadSchema);

export default class Ehpad {

    findAll(req, res) {
        model.find({}, (err, ehpads) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(ehpads);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, ehpad) => {
            if (err || !ehpad) {
                res.sendStatus(403);
            } else {
                res.json(ehpad);
            }
        });
    }

    create(req, res) {
        model.create({
                title1: req.body.title1,
                title2: req.body.title2,
                title3: req.body.title3,
                title4: req.body.title4,
                texte1: req.body.texte1,
                texte2: req.body.texte2,
                texte3: req.body.texte3,
                texte4: req.body.texte4
            },
            (err, ehpad) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(ehpad);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, ehpad) => {
            if (err || !ehpad) {
                res.status(500).send(err.message);
            } else {
                res.json(ehpad);
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
        })
    }
}
