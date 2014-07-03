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
        data: {id: videoid}
      }).then(function(response) {
        return response.data;
      });
    },
    removeFavorite: function(id) {
      return $http({
        method: 'DELETE',
        url: endpoint+'/api/web/favorites',
        headers: {
          'Authorization': 'Bearer '+ Token.get()
        },
        data: {id: id}
      }).then(function(response) {
        return response.data;
      });
    },
    isFav: function(id) {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/favorites',
        headers: {
          'Authorization': 'Bearer '+ Token.get()
        }
      }).then(function(response) {
        console.log(response.data);
        console.log(id);
        return response.data.filter(function(element){
          return element._id === id;
        });
      });
    }
  };
});
