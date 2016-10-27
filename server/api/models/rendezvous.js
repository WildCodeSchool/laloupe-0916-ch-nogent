import mongoose from 'mongoose';

const rendezvousSchema = new mongoose.Schema({
    title1: String,
    title2: String,
    title3: String,
    texte1: String,
    texte2: String,
    texte3: String
});

let model = mongoose.model('Rendezvous', rendezvousSchema);

export default class Rendezvous {

    findAll(req, res) {
        model.find({}, (err, rendezvouss) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(rendezvouss);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, rendezvous) => {
            if (err || !rendezvous) {
                res.sendStatus(403);
            } else {
                res.json(rendezvous);
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
            (err, rendezvous) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(rendezvous);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, rendezvous) => {
            if (err || !rendezvous) {
                res.status(500).send(err.message);
            } else {
                res.json(rendezvous);
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
