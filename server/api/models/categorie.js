import mongoose from 'mongoose';

const categorieSchema = new mongoose.Schema({
    titre: String,
    photo: String,
    texte: String,
    idparent: String,
    lien: String
});

let model = mongoose.model('Categorie', categorieSchema);

export default class Categorie {

    findAll(req, res) {
        model.find({}, (err, categories) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(categories);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, categorie) => {
            if (err || !categorie) {
                res.sendStatus(403);
            } else {
                res.json(categorie);
            }
        });
    }

    create(req, res) {
        model.create({
                titre: req.body.titre,
                photo: req.body.photo,
                texte: req.body.texte,
                idparent: req.body.idparent,
                lien: req.body.lien
            },
            (err, categorie) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(categorie);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, categorie) => {
            if (err || !categorie) {
                res.status(500).send(err.message);
            } else {
                res.json(categorie);
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
