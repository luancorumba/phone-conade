'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var conade = angular.module('conade', ['ngRoute'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
        $routeProvider.when('/index', {templateUrl: 'partials/home.html'});
        $routeProvider.when('/view1', {templateUrl: 'partials/shop.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partners.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/checklist.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/local.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/gossipbox.html', controller: 'GossipCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
  }]);
