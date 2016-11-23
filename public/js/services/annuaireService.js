function annuaireService ($http) {

        this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/annuaires', {
          nom: data.nom,
          prenom: data.prenom,
          fonction: data.fonction,
          email: data.email,
          telephone: data.telephone,
          lien: data.lien
        });
    };

    this.getAll = () => {
        return this.$http.get('/api/annuaires');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/annuaires/' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/annuaires/' + id, {
          nom: data.nom,
          prenom: data.prenom,
          fonction: data.fonction,
          email: data.email,
          telephone: data.telephone,
          lien: data.lien
        });
    };

    this.delete = (id) => {
        return this.$http.delete('/api/annuaires/' + id);
    };

}
