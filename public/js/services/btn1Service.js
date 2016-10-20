class btn1Service {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/btn1s', data )
    }

    getAll() {
        return this.$http.get('/api/btn1s');
    }

    getOne(id) {
        return this.$http.get('/api/btn1s/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/btn1s/' + id, {
          texte1: data.texte1,
          texte2: data.texte2,
          texte3: data.texte3
        })
    }

    delete(id) {
        return this.$http.delete('/api/btn1s/' + id)
    }

}
