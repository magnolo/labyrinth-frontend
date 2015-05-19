'use strict';

angular.module('minovateApp').directive('listing', function($state, $cookies) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      items: '=',
      location: '@',
      idfield: '@',
      name: '@',
      canMove: '='
    },
    templateUrl: '/views/includes/listings/listing.html',
    link: function listingsDirective(scope, element, attrs) {
      scope.$state = $state;
      scope.listview = $cookies.listview || '';
      scope.$watchCollection('listview', function(newItem, oldItem) {
        console.log(newItem);
        if (newItem === oldItem) {
          return;
        }
        $cookies.listview = newItem;

      });
    }
  };
});