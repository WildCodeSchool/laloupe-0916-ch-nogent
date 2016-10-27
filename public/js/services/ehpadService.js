class ehpadService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/ehpads', data )
    }

    getAll() {
        return this.$http.get('/api/ehpads');
    }

    getOne(id) {
        return this.$http.get('/api/ehpads/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/ehpads/' + id, {
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
        return this.$http.delete('/api/ehpads/' + id)
    }

}
