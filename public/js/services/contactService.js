
function contactService ($http) {

        this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/contacts', {
          nom: data.nom,
          telephone: data.telephone,
          email: data.email
        });
    };

    this.getAll = () => {
        return this.$http.get('/api/contacts');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/contacts/' + id);
    };

    this.update = (id, data) => {
        return this.$http.put('/api/contacts/' + id, {
          nom: data.nom,
          telephone: data.telephone,
          email: data.email
        });
    };

    this.delete = (id) => {
        return this.$http.delete('/api/contacts/' + id);
    };

}
