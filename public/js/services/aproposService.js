function aproposService ($http){

        this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/aproposs', data);
    };

    this.getAll = () => {
        return this.$http.get('/api/aproposs');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/aproposs/' + id);
    }
;
    this.update = (id, data) => {
        return this.$http.put('/api/aproposs/' + id, {
          titre: data.titre,
          texte: data.texte
        });
    };

    this.delete = (id) => {
        return this.$http.delete('/api/aproposs/' + id);
    };

}
