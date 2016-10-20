import mongoose from 'mongoose';

const btn1Schema = new mongoose.Schema({
    texte1: String,
    texte2: String,
    texte3: String
});

let model = mongoose.model('Btn1', btn1Schema);

export default class Btn1 {

    findAll(req, res) {
        model.find({}, (err, btn1s) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(btn1s);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, btn1) => {
            if (err || !btn1) {
                res.sendStatus(403);
            } else {
                res.json(btn1);
            }
        });
    }

    create(req, res) {
        model.create({
                texte1: req.body.texte1,
                texte2: req.body.texte2,
                texte3: req.body.texte3
            },
            (err, btn1) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(btn1);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            texte1: req.body.texte1,
            text2: req.body.texte2,
            texte: req.body.texte3
        }, (err, btn1) => {
            if (err || !btn1) {
                res.status(500).send(err.message);
            } else {
                res.json(btn1);
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
