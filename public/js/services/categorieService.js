
class categorieService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/categories', {
          titre: data.titre,
          photo: data.photo,
          texte: data.texte,
          lien: data.lien,
          idparent: data.idparent
        });
    }

    getAll() {
        return this.$http.get('/api/categories');
    }

    getOne(id) {
        return this.$http.get('/api/categories/' + id);
    }

    getParent(idparent) {
        return this.$http.get('/api/categories/by-parent/' + idparent);
    }

    update(id, data) {
        return this.$http.put('/api/categories/' + id, {
          titre: data.titre,
          photo: data.photo,
          texte: data.texte,
          lien: data.lien,
          idparent: data.idparent
        });
    }

    delete(id) {
        return this.$http.delete('/api/categories/' + id);
    }

}
