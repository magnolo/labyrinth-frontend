'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('MainCtrl', function($scope, $http) {

    $scope.main = {
      title: 'Labyrinth',
      settings: {
        navbarHeaderColor: 'scheme-black',
        sidebarColor: 'scheme-black',
        brandingColor: 'scheme-black',
        activeColor: 'lightred-scheme-color',
        headerFixed: true,
        asideFixed: true,
        rightbarShow: false,
        helpbarShow: false
      }
    };


    $scope.toggleInfo = function(name) {
      if ($scope.infoTile && $scope.infoTile === name) {
        $scope.infoTile = "";
      } else {
        $scope.infoTile = name;
      }
    };
  });