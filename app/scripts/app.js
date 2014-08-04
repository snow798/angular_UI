'use strict';

/**
 * @ngdoc overview
 * @name angulerTestApp
 * @description
 * # angulerTestApp
 *
 * Main module of the application.
 */
angular
  .module('angulerTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
