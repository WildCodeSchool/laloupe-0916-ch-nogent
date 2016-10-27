class marcheService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/marches', data);
    }

    getAll() {
        return this.$http.get('/api/marches');
    }

    getOne(id) {
        return this.$http.get('/api/marches/' + id);
    }

    update(id, data) {
        return this.$http.put('/api/marches/' + id, {
          titre: data.titre,
          texte: data.texte
        });
    }

    delete(id) {
        return this.$http.delete('/api/marches/' + id);
    }

}
