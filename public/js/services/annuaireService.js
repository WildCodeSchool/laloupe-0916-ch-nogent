class annuaireService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/annuaires', {
          nom: data.nom,
          prenom: data.prenom,
          fonction: data.fonction,
          email: data.email,
          telephone: data.telephone,
          lien: data.lien
        });
    }

    getAll() {
        return this.$http.get('/api/annuaires');
    }

    getOne(id) {
        return this.$http.get('/api/annuaires/' + id);
    }

    update(id, data) {
        return this.$http.put('/api/annuaires/' + id, {
          nom: data.nom,
          prenom: data.prenom,
          fonction: data.fonction,
          email: data.email,
          telephone: data.telephone,
          lien: data.lien
        });
    }

    delete(id) {
        return this.$http.delete('/api/annuaires/' + id);
    }

}
