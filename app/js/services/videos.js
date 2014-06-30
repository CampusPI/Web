'use strict';

angular.module('tvApp').factory('ScheduleService', function ($http, endpoint) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/schedule'
      }).then(function(response) {
        return response.data;
      });
    },
    getId: function(id) {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/schedule'
      }).then(function(response) {
        return response.data.filter(function(element){
          return element._id === id;
        });
      });
    }
  };
});
