'use strict';

angular.module('tvApp').factory('UpdateService', function ($http, endpoint) {
  return{
    new: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/currentContent'
      }).then(function(response) {
        return response.data;
      });
    },
    isNew: function() {
      return true;
    }
  };
});
