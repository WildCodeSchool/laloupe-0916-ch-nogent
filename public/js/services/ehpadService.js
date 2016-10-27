class ehpadService {

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
          title1: data.title1,
          title2: data.title2,
          title3: data.title3,
          title4: data.title4,
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
