'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('LoginCtrl', function ($scope, $rootScope,  $state ,$localStorage, Auth) {
    function successAuth(res){
      $localStorage.token = res.token;
      window.location =  "/";
    }
    $scope.login = function() {

        var formData = {
          email: $scope.user.email,
          password: $scope.user.password
        };

        Auth.signin( formData, successAuth, function(){
          $rootScope.error = 'Invalid crdentials';
        })

    };
  });
