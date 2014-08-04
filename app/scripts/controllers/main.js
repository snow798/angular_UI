'use strict';

/**
 * @ngdoc function
 * @name angulerTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulerTestApp
 */
angular.module('angulerTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
