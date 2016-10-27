import mongoose from 'mongoose';

const btn2Schema = new mongoose.Schema({
    title1: String,
    title2: String,
    title3: String,
    texte1: String,
    texte2: String,
    texte3: String
});

let model = mongoose.model('Btn2', btn2Schema);

export default class Btn2 {

    findAll(req, res) {
        model.find({}, (err, btn2s) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(btn2s);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, btn2) => {
            if (err || !btn2) {
                res.sendStatus(403);
            } else {
                res.json(btn2);
            }
        });
    }

    create(req, res) {
        model.create({
                title1: req.body.title1,
                title2: req.body.title2,
                title3: req.body.title3,
                texte1: req.body.texte1,
                texte2: req.body.texte2,
                texte3: req.body.texte3
            },
            (err, btn2) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(btn2);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            title1: req.body.title1,
            title2: req.body.title2,
            title3: req.body.title3,
            texte1: req.body.texte1,
            text2: req.body.texte2,
            texte: req.body.texte3
        }, (err, btn2) => {
            if (err || !btn2) {
                res.status(500).send(err.message);
            } else {
                res.json(btn2);
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
