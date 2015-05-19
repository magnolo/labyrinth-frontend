'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesNgTableCtrl
 * @description
 * # TablesNgTableCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('ArticlesOverviewCtrl', function($scope, Article) {
    $scope.page = {
      title: 'Artikel',
      subtitle: 'Übersicht'
    };
    $scope.articles = Article.get();
  });