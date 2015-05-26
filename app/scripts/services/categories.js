angular.module('minovateApp').factory('Categorie', function($resource) {
  return $resource('http://localhost:8000/api/categories/:type/:id/:action', {}, {
    get: {
      Method: 'GET',
      isArray: true
    },
    find: {
      Method: 'GET'
    }
  });
});