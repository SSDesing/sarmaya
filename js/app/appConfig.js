/**
 * Routing of All apps to be done
 */
'use strict';

// definition of routes
app.config(['$stateProvider',
    '$urlRouterProvider',

    function($stateProvider,
        $urlRouterProvider
    ) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
            url: '/home',
            templateUrl: 'modules/home/home.html',
            controller: 'homeController',
            controllerAs: 'homeVm'
        })

    }
]);
