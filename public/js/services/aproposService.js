class aproposService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/aproposs', data);
    }

    getAll() {
        return this.$http.get('/api/aproposs');
    }

    getOne(id) {
        return this.$http.get('/api/aproposs/' + id);
    }

    update(id, data) {
        return this.$http.put('/api/aproposs/' + id, {
          titre: data.titre,
          texte: data.texte
        });
    }

    delete(id) {
        return this.$http.delete('/api/aproposs/' + id);
    }

}
