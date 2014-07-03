'use strict';

angular.module('tvApp').controller('contentCtrl', function ($scope, $routeParams, ScheduleService, FavoritesService) {
  console.log($routeParams);
  $scope.isFav = null;
  $scope.id = $routeParams.id;
  ScheduleService.getc($routeParams.id).then(function(data) {
    console.log(data);
    $scope.data = data;
  });

  var isfav = function () {
    FavoritesService.isFav($scope.id).then(function(res){
      if (res.length > 0) {
        $scope.isFav = true;
      }
      else {
        $scope.isFav = false;
      }
      console.log($scope.isFav);
    });
  };

  isfav();

  $scope.rem = function(id) { FavoritesService.removeFavorite(id).then(function() { isfav(); }); };
  $scope.add = function(id) { FavoritesService.addFavorite(id).then(function() { isfav(); }); };
});
