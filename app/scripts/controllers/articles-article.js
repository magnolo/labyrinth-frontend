'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesNgTableCtrl
 * @description
 * # TablesNgTableCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('ArticlesArticleCtrl', function($scope) {
    $scope.page = {
      title: 'Der Arikeltext',
      subtitle: 'Artikel'
    };
    $scope.article = {
      title: 'Titelchen',
      intro: '',
      text: '',
      is_online: 1,
      online_at: '',
      created_at: '2015-05-05 15:12:00',
      updated_at: '2015-05-05 15:12:00',
      image_id: 0,
      image: {}
    };
  });