angular.module('minovateApp').factory('Article', function($resource) {
  return $resource('http://localhost:8000/api/articles/:type/:id/:action', {}, {
    get: {
      Method: 'GET',
      isArray: true
    },
    find: {
      Method: 'GET'
    }
  });
});