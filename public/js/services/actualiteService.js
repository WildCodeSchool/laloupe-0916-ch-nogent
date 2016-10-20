class actualiteService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/actualites', data);
    }

    getAll() {
        return this.$http.get('/api/actualites');
    }

    getOne(id) {
        return this.$http.get('/api/actualites/' + id);
    }

    update(id, data) {
        return this.$http.put('/api/actualites/' + id, {
          titre: data.titre,
          texte: data.texte
        });
    }

    delete(id) {
        return this.$http.delete('/api/actualites/' + id);
    }

}
