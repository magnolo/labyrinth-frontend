angular.module('minovateApp').factory('Menue', function($resource) {
  return $resource('http://localhost:8000/api/menues/:type/:id/:action', {}, {
    get: {
      Method: 'GET',
      isArray: true
    },
    find: {
      Method: 'GET'
    }
  });
});