const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: '../views/admin/main.html',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/login', {
            templateUrl: '../views/admin/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .when('/utilisateurs/ajouter', {
            templateUrl: '../views/admin/utilisateurs/add.html',
            controller: 'userController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/utilisateurs', {
            templateUrl: '../views/admin/utilisateurs/show.html',
            resolve: {
                connected: checkIsConnected
            },
            controller: 'userController',
            controllerAs: 'vm'
        })
        .when('/boutons/ehpad', {
            templateUrl: '../views/admin/boutons/ehpad.html',
            controller: 'ehpadController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/boutons/hospitalise', {
            templateUrl: '../views/admin/boutons/hospitalise.html',
            controller: 'hospitaliseController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/boutons/rendezvous', {
            templateUrl: '../views/admin/boutons/rendezvous.html',
            controller: 'rendezvousController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/boutons/visite', {
            templateUrl: '../views/admin/boutons/visite.html',
            controller: 'visiteController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/actualite', {
            templateUrl: '../views/admin/actualite.html',
            controller: 'actualiteController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/annuaire', {
            templateUrl: '../views/admin/annuaire.html',
            controller: 'annuaireController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/apropos', {
            templateUrl: '../views/admin/apropos.html',
            controller: 'aproposController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/contacts', {
            templateUrl: '../views/admin/contacts.html',
            controller: 'contactController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/marches', {
            templateUrl: '../views/admin/marches.html',
            controller: 'marcheController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/stats', {
            templateUrl: '../views/admin/stats.html',
            controller: 'statController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/services', {
            templateUrl: '../views/admin/services.html',
            controller: 'categorieController',
            controllerAs: 'vm',
            resolve: {
                connected: checkIsConnected
            }
        })
        .when('/boutons', {
            templateUrl: '../views/admin/buttonadmin.html',
            controller: 'categorieController',
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
                    $location.path('/login');
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
