'use strict';

/**
 * @ngdoc function
 * @name angulerTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angulerTestApp
 */
angular.module('angulerTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
