'use strict';

angular.module('tvApp').controller('favsCtrl', function ($scope, FavoritesService) {
  FavoritesService.getFavorites().then(function(res) {
    $scope.favs = res;
  });
});
