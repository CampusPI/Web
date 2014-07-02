'use strict';

angular.module('tvApp').controller('contentCtrl', function ($scope, $routeParams, ScheduleService) {
  console.log($routeParams);
  $scope.id = $routeParams.id;
  ScheduleService.getc($routeParams.id).then(function(data) {
    console.log(data);
    $scope.data = data;
  });
});
