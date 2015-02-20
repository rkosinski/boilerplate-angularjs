'use strict';

/*
 Routing configuration
 */
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/components/home/homeView.html',
            controller: 'homePageCtrl'
        }).
        when('/about', {
            templateUrl: 'app/components/about/aboutView.html',
            controller: 'aboutPageCtrl',
            resolve: {
                'AboutService': function(About) {
                    return About.promise;
                }
            }
        }).
        when('/contact', {
            templateUrl: 'app/components/contact/contactView.html',
            controller: 'contactPageCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);