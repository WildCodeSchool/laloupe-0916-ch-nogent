function actualiteService ($http) {

        this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/actualites', data);
    };

    this.getAll = () => {
        return this.$http.get('/api/actualites');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/actualites/' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/actualites/' + id, {
          titre: data.titre,
          texte: data.texte
        });
    };

    this.delete = (id) => {
        return this.$http.delete('/api/actualites/' + id);
    };

}
