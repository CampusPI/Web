'use strict';

angular.module('tvApp').controller('contentCtrl', function ($scope, $routeParams, ScheduleService) {
  console.log($routeParams);
  $scope.id = $routeParams.id;
  ScheduleService.getId($routeParams.id).then(function(data) {
    console.log(data);
    $scope.data = data[0];
  });
});
