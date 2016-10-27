import mongoose from 'mongoose';

const visiteSchema = new mongoose.Schema({
    title1: String,
    title2: String,
    title3: String,
    texte1: String,
    texte2: String,
    texte3: String
});

let model = mongoose.model('Visite', visiteSchema);

export default class Visite {

    findAll(req, res) {
        model.find({}, (err, visites) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(visites);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, visite) => {
            if (err || !visite) {
                res.sendStatus(403);
            } else {
                res.json(visite);
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
            (err, visite) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(visite);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, visite) => {
            if (err || !visite) {
                res.status(500).send(err.message);
            } else {
                res.json(visite);
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
