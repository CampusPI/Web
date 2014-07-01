'use strict';

angular.module('tvApp').factory('FavoritesService', function ($http, endpoint, Token) {
  return {
    getFavorites: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/favorites',
        headers: {
          'Authorization': 'Bearer '+ Token.get()
        }
      }).then(function(response) {
        return response.data;
      });
    },
    addFavorite: function(videoid) {
      return $http({
        method: 'POST',
        url: endpoint+'/api/web/favorites',
        headers: {
          'Authorization': 'Bearer '+ Token.get()
        },
        data: {videoid: videoid}
      }).then(function(response) {
        return response.data;
      });
    }
  };
});
