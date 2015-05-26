'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesNgTableCtrl
 * @description
 * # TablesNgTableCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('ArticlesArticleCtrl', function($scope, $stateParams, Article, Categorie) {
    $scope.page = {
      title: 'Der Arikeltext',
      subtitle: 'Artikel'
    };
    $scope.article = Article.find({
      id: $stateParams.id
    }, function(data) {
      $scope.page.title = $scope.article.title;
    });
    $scope.categories = Categorie.get();
  });