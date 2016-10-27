class hospitaliseService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/btn2s', data )
    }

    getAll() {
        return this.$http.get('/api/btn2s');
    }

    getOne(id) {
        return this.$http.get('/api/btn2s/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/btn2s/' + id, {
          title1: data.title1,
          title2: data.title2,
          title3: data.title3,
          texte1: data.texte1,
          texte2: data.texte2,
          texte3: data.texte3
        })
    }

    delete(id) {
        return this.$http.delete('/api/btn2s/' + id)
    }

}
