class statService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/stats', {
          texte1: data.texte1,
          texte2: data.texte2,
          texte3: data.texte3,
          texte4: data.texte4
        });
    }

    getAll() {
        return this.$http.get('/api/stats');
    }

    getOne(id) {
        return this.$http.get('/api/stats/' + id);
    }

    update(id, data) {
        return this.$http.put('/api/stats/' + id, {
          texte1: data.texte1,
          texte2: data.texte2,
          texte3: data.texte3,
          texte4: data.texte4
        });
    }

    delete(id) {
        return this.$http.delete('/api/stats/' + id);
    }

}
