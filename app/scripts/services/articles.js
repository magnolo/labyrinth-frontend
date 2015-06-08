angular.module('minovateApp').factory('Article', function($resource, urls) {
  return $resource(urls.BASE_API +'/articles/:type/:id/:action', {}, {
    get: {
      Method: 'GET',
      isArray: true
    },
    find: {
      Method: 'GET'
    },
    update:{
      method: 'PUT',
      params:{
        id: ''
      }
    }
  });
});
