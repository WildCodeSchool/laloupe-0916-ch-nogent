const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/admin/contact', {
            templateUrl: 'views/admin/addcontact.html',
            controller: 'admin/contactController',
            controllerAs: 'vm'
        })
        .when('/admin/actualite', {
            templateUrl: 'views/admin/adminactualite.html',
            controller: 'admin/actualiteController',
            controllerAs: 'vm'
        })
        .when('/admin/stat', {
            templateUrl: 'views/admin/stat.html',
            controller: 'admin/statController',
            controllerAs: 'vm'
        })
        .when('/admin/praticien', {
            templateUrl: 'views/admin/adddoctor.html',
            controller: 'admin/annuaireController',
            controllerAs: 'vm'
        })
        .when('/apropos', {
            templateUrl: 'views/apropos/apropos.html',
            controller: 'aproposController',
            controllerAs: 'vm'
        })
        .when('/admin/apropos', {
            templateUrl: 'views/admin/adminapropos.html',
            controller: 'admin/aproposController',
            controllerAs: 'vm'
        })
        .when('/annuaire', {
            templateUrl: 'views/annuaire/annuaire.html',
            controller: 'annuaireController',
            controllerAs: 'vm'
        })
        .when('/admin/categorie', {
            templateUrl: 'views/admin/addcategorie.html',
            controller: 'admin/categorieController',
            controllerAs: 'vm'
        })
        .when('/service/:id', {
            templateUrl: 'views/categorie/categorie.html',
            controller: 'categorieController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'views/contact/contact.html',
            controller: 'contactController',
            controllerAs: 'vm'
        })
        .when('/actualite', {
            templateUrl: 'views/actualite/actualite.html',
            controller: 'actualiteController',
            controllerAs: 'vm'
        })
        .when('/editor', {
            templateUrl: 'views/admin/editor.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/ehpad', {
            templateUrl: 'views/ehpad/ehpad.html',
        })
        .when('/legals', {
            templateUrl: 'views/mentions/legals.html',
            controller: 'aproposController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .when('/btn1', {
            templateUrl: 'views/addMainBtn/btn1.html',
            controller: 'admin/btn1Controller',
            controllerAs: 'vm'
        })
        .when('/btn2', {
            templateUrl: 'views/addMainBtn/btn2.html',
            controller: 'admin/btn2Controller',
            controllerAs: 'vm'
        })
        .when('/btn3', {
            templateUrl: 'views/addMainBtn/btn3.html',
            controller: 'admin/btn3Controller',
            controllerAs: 'vm'
        })
        .when('/btn4', {
            templateUrl: 'views/addMainBtn/btn4.html',
            controller: 'admin/btn4Controller',
            controllerAs: 'vm'
        })














        .when('/administration', {
            templateUrl: 'views/adminmain.html',
            controller: '',
            controllerAs: 'vm'
        })
        .when('/admin/annuaire', {
            templateUrl: 'admin/annuaire.html',
            controller: 'admin/annuaireController',
            controllerAs: 'vm'
        })
        .when('/admin/adduser', {
            templateUrl: 'admin/addadmin.html',
            controller: '',
            controllerAs: 'vm'
        })
        .when('/admin', {
            templateUrl: 'admin/loginadmin.html',
            controller: '',
            controllerAs: 'vm'
        })
        .when('/admin/stat', {
            templateUrl: 'admin/slideradmin.html',
            controller: 'admin/statController',
            controllerAs: 'vm'
        })
        .when('/admin/apropos1', {
            templateUrl: 'admin/aproposadmin.html',
            controller: 'admin/aproposController',
            controllerAs: 'vm'
        })
        .when('/admin/article', {
            templateUrl: 'admin/articleadmin.html',
            controller: 'admin/actualiteController',
            controllerAs: 'vm'
        })
        .when('/admin/categorie1', {
            templateUrl: 'admin/categorieadmin.html',
            controller: 'admin/categorieController',
            controllerAs: 'vm'
        })
        .when('/admin/contact1', {
            templateUrl: 'admin/contactadmin.html',
            controller: 'admin/contactController',
            controllerAs: 'vm'
        })
        .when('/admin/listuser', {
            templateUrl: 'admin/listadmin.html',
            controller: '',
            controllerAs: 'vm'
        })












        .otherwise({
            redirectTo: '/'
        });

    $httpProvider.interceptors.push(($q, $location, $rootScope, $window, sessionFactory) => {
        return {
            request(config) {

                config.headers = config.headers || {};
                if ($window.localStorage.token) {
                    sessionFactory.token = $window.localStorage.token;
                    sessionFactory.user = JSON.parse($window.localStorage.getItem('currentUser'));
                    config.headers.authorization = $window.localStorage.token;
                }
                return config;
            },
            responseError(response) {
                if (response.status === 401 || response.status === 403) {
                    $rootScope.$emit('loginStatusChanged', false);
                    //$location.path('/login')
                }
                return $q.reject(response);
            }
        };
    });

};

const loginStatus = ($rootScope, $window, sessionFactory) => {

    if ($window.localStorage.currentUser) {
        sessionFactory.user = JSON.parse($window.localStorage.getItem('currentUser'));
    }

    $rootScope.$on('loginStatusChanged', (event, isLogged) => {
        $window.localStorage.setItem('currentUser', JSON.stringify(sessionFactory.user));
        $window.localStorage.token = sessionFactory.token;
        sessionFactory.isLogged = isLogged;
    });

};

const checkIsConnected = ($q, $http, $location, $window, $rootScope) => {
    let deferred = $q.defer();

    $http.get('/api/loggedin').success(() => {
        $rootScope.$emit('loginStatusChanged', true);
        // Authenticated
        deferred.resolve();
    }).error(() => {
        $window.localStorage.removeItem('token');
        $window.localStorage.removeItem('currentUser');
        $rootScope.$emit('loginStatusChanged', false);
        // Not Authenticated
        deferred.reject();
        $location.url('/login');
    });

    return deferred.promise;
};
