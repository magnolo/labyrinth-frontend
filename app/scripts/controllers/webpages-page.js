'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesNgTableCtrl
 * @description
 * # TablesNgTableCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('WebpagesPageCtrl', function($scope) {
    $scope.page = {
      title: 'Übersicht',
      subtitle: 'Seiten'
    };
  });