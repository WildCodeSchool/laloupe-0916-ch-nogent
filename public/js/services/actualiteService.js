function actualiteService ($http) {

        return {
                create: function(data) {
                        return $http.post('/api/actualites', data);
                },

                getAll: function() {
                        return $http.get('/api/actualites');
                },

                getOne: function(id) {
                        return $http.get('/api/actualites/' + id);
                },

                update: function(id, data) {
                        return $http.put('/api/actualites/' + id, {
                          titre: data.titre,
                          texte: data.texte
                        });
                },

                delete: function(id) {
                        return $http.delete('/api/actualites/' + id);
                }
        }

}
