'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesNgTableCtrl
 * @description
 * # TablesNgTableCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('ArticlesOverviewCtrl', function($scope) {
    $scope.page = {
      title: 'Übersicht',
      subtitle: 'Artikel'
    };
    $scope.articles = [{
      id: 1,
      name: 'Ein Wind der Stille im Norden',
      intro: 'hlsdf  hsldf  hjhkjhsl  hkjhlk as hlkjhl js hjkhlasdf',
      categorie: 'Urlaubserlebnisse',
      is_online: 1,
      created_at: '2015-05-12 15:45:30',
      published_at: '2015-01-02 15:45:30'
    }, {
      id: 2,
      name: 'Holzweg',
      intro: 'hlsdf  hsldf  hjhkjhsl  hkjhlk as hlkjhl js hjkhlasdf',
      categorie: 'Urlaubserlebnisse',
      is_online: 1,
      created_at: '2015-01-01 15:45:30',
      published_at: '2015-01-02 15:45:30'
    }, {
      name: 'Zaunpfeiler',
      categorie: 'Seecamping',
      intro: 'hlsdf  hsldf  hjhkjhsl  hkjhlk as hlkjhl js hjkhlasdf',
      is_online: 1,
      created_at: '2015-01-01 15:45:30',
      published_at: '2015-01-02 15:45:30'
    }, {
      name: 'Rotzpipn',
      categorie: 'Alm',
      intro: 'hlsdf  hsldf  hjhkjhsl  hkjhlk as hlkjhl js hjkhlasdf',
      is_online: 0,
      created_at: '2015-01-01 15:45:30',
      published_at: '2015-01-02 15:45:30'
    }, {
      name: 'Moroni',
      categorie: 'Alm',
      is_online: 1,
      created_at: '2015-01-01 15:45:30',
      published_at: '2015-01-02 15:45:30'
    }];

  });