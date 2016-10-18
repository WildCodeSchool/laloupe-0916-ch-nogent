
class contactService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/contacts', {
          nom: data.nom,
          telephone: data.telephone
        });
    }

    getAll() {
        return this.$http.get('/api/contacts');
    }

    getOne(id) {
        return this.$http.get('/api/contacts/' + id);
    }

    update(id, data) {
        return this.$http.put('/api/contacts/' + id, {
          nom: data.nom,
          telephone: data.telephone
        });
    }

    delete(id) {
        return this.$http.delete('/api/contacts/' + id);
    }

}
