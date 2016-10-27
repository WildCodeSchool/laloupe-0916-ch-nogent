class visiteService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/visites', data )
    }

    getAll() {
        return this.$http.get('/api/visites');
    }

    getOne(id) {
        return this.$http.get('/api/visites/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/visites/' + id, {
          title1: data.title1,
          title2: data.title2,
          title3: data.title3,
          texte1: data.texte1,
          texte2: data.texte2,
          texte3: data.texte3
        })
    }

    delete(id) {
        return this.$http.delete('/api/visites/' + id)
    }

}
