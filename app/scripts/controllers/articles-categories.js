'use strict';


angular.module('minovateApp')
  .controller('ArticlesCategoriesCtrl', function($scope, Article) {
    $scope.page = {
      title: 'Artikelkategorien',
      subtitle: 'Übersicht'
    };
    $scope.categories = Article.get({
      type: 'categories'
    });
  });