'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesNgTableCtrl
 * @description
 * # TablesNgTableCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('EventsOverviewCtrl', function($scope, ngTableParams) {
    $scope.page = {
      title: 'Übersicht',
      subtitle: 'Events'
    };
  });