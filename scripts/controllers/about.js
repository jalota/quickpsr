'use strict';

/**
 * @ngdoc function
 * @name quickpsrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quickpsrApp
 */
angular.module('quickpsrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
