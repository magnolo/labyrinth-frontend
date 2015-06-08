'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('MainCtrl', function($scope, $http, $location, $localStorage, Auth) {

    $scope.main = {
      title: 'Labyrinth',
      settings: {
        navbarHeaderColor: 'scheme-greensea',
        sidebarColor: 'scheme-greensea',
        brandingColor: 'scheme-greensea',
        activeColor: 'greensea-scheme-color',
        headerFixed: true,
        asideFixed: true,
        rightbarShow: false,
        helpbarShow: false
      }
    };
    function successAuth(res){
      $localStorage.token = res.token;
      window.location =  "/";
    }
    $scope.signin = function (){
      var fromData = {
        email: $scope.email,
        password: $scope.password
      };

      Auth.signin( formData, successAuth, function(){
        $rootScope.error = 'Invalid crdentials';
      })
    }
    $scope.token = $localStorage.token;
    $scope.tokenClaims = Auth.getTokenClaims();
    $scope.logout = function(){
      Auth.logout(function(){
        window.location = "/";
      });
    };

    $scope.toggleInfo = function(name) {
      if ($scope.infoTile && $scope.infoTile === name) {
        $scope.infoTile = "";
      } else {
        $scope.infoTile = name;
      }
    };
  });
