function marcheService ($http) {

        this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/marches', data);
    };

    this.getAll = () => {
        return this.$http.get('/api/marches');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/marches/' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/marches/' + id, {
          titre: data.titre,
          texte: data.texte
        });
    };

    this.delete = (id) => {
        return this.$http.delete('/api/marches/' + id);
    };

}
