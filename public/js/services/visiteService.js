function visiteService ($http) {

        this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/btn4s', data );
    };

    this.getAll = () => {
        return this.$http.get('/api/btn4s');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/btn4s/' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/btn4s/' + id, {
          title1: data.title1,
          title2: data.title2,
          title3: data.title3,
          texte1: data.texte1,
          texte2: data.texte2,
          texte3: data.texte3
        });
    };

    this.delete = (id) => {
        return this.$http.delete('/api/btn4s/' + id);
    };

}
