class btn3Service {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/btn3s', data )
    }

    getAll() {
        return this.$http.get('/api/btn3s');
    }

    getOne(id) {
        return this.$http.get('/api/btn3s/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/btn3s/' + id, {
          texte1: data.texte1,
          texte2: data.texte2,
          texte3: data.texte3,
          texte4: data.texte4
        })
    }

    delete(id) {
        return this.$http.delete('/api/btn3s/' + id)
    }

}
