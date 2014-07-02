'use strict';

angular.module('tvApp').factory('VideosService', function ($http, endpoint) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/videos'
      }).then(function(response) {
        var a = response.data.slice(1);
        return a;
      });
    },
  };
});

angular.module('tvApp').factory('NewsService', function ($http, endpoint) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/news'
      }).then(function(response) {
        var a = response.data.slice(1);
        return a;
      });
    },
  };
});

angular.module('tvApp').factory('EventsService', function ($http, endpoint) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/biblio'
      }).then(function(response) {
        var a = response.data.slice(1);
        return a;
      });
    },
  };
});