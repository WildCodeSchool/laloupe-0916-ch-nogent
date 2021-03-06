angular.module('app', ['ngRoute', 'ngSanitize', 'ui.tinymce'])
    .factory('sessionFactory', sessionFactory)
    .service('userService', userService)
    .service('annuaireService', annuaireService)
    .service('categorieService', categorieService)
    .service('contactService', contactService)
    .service('aproposService', aproposService)
    .service('actualiteService', actualiteService)
    .service('statService', statService)
    .service('rendezvousService', rendezvousService)
    .service('hospitaliseService', hospitaliseService)
    .service('ehpadService', ehpadService)
    .service('visiteService', visiteService)
    .controller('loginController', loginController)
    .controller('annuaireController', annuaireController)
    .controller('actualiteController', actualiteController)
    .controller('categorieController', categorieController)
    .controller('contactController', contactController)
    .controller('aproposController', aproposController)
    .controller('rendezvousController', rendezvousController)
    .controller('hospitaliseController', hospitaliseController)
    .controller('ehpadController', ehpadController)
    .controller('visiteController', visiteController)
    .controller('statController', statController)
    .controller('sidebarController', sidebarController)
    .controller('userController', userController)
    .config(routes)
    .run(loginStatus);
