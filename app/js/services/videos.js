'use strict';

angular.module('tvApp').factory('ScheduleService', function ($http, endpoint) {
  return{
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/lastContent'
      }).then(function(response) {
        var a = response.data.reverse().slice(1);
        return a;
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
