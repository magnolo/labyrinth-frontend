'use strict';

angular.module('minovateApp').directive('listing', function($state) {
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
    }
  };
});