
function categorieService ($http) {

        this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/categories', {
          titre: data.titre,
          photo: data.photo,
          texte: data.texte,
          lien: data.lien,
          idparent: data.idparent,
          position: data.position

        });
    };

    this.getAll = () => {
        return this.$http.get('/api/categories');
    };

    this.getOne = (id) => {
        return this.$http.get('/api/categories/' + id);
    };

    this.getChildrenOf = (idparent) => {
        return this.$http.get('/api/categories/by-parent/' + idparent);
    };

    this.update = (id, data) =>{
        return this.$http.put('/api/categories/' + id, {
          titre: data.titre,
          photo: data.photo,
          texte: data.texte,
          lien: data.lien,
          idparent: data.idparent,
          position: data.position
        });
    };

    this.delete = (id) => {
        return this.$http.delete('/api/categories/' + id);
    };

}
