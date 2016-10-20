const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/admin/contact', {
            templateUrl: 'views/admin/addcontact.html',
            controller: 'contactController',
            controllerAs: 'vm'
        })
        .when('/admin/praticien', {
            templateUrl: 'views/admin/adddoctor.html',
            controller: 'annuaireController',
            controllerAs: 'vm'
        })
        .when('/annuaire', {
            templateUrl: 'views/annuaire/annuaire.html',
            controller: 'annuaireController',
            controllerAs: 'vm'
        })
        .when('/admin/categorie', {
            templateUrl: 'views/categorie/addcategorie.html',
            controller: 'categorieController',
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
        .when('/editor', {
            templateUrl: 'views/admin/editor.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/ehpad', {
            templateUrl: 'views/ehpad/ehpad.html',
        })
        .when('/legals', {
            templateUrl: 'views/mentions/legals.html'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .when('/btn1', {
            templateUrl: 'views/addMainBtn/btn1.html',
            controller: 'btn1Controller',
            controllerAs: 'vm'
        })
        .when('/btn2', {
            templateUrl: 'views/addMainBtn/btn2.html',
            controller: 'btn2Controller',
            controllerAs: 'vm'
        })
        .when('/btn3', {
            templateUrl: 'views/addMainBtn/btn3.html',
            controller: 'btn3Controller',
            controllerAs: 'vm'
        })
        .when('/btn4', {
            templateUrl: 'views/addMainBtn/btn4.html',
            controller: 'btn4Controller',
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
