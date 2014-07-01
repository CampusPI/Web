'use strict';

angular.module('tvApp').controller('typeContentCtrl', function ($scope, $routeParams) {
  $scope.type = $routeParams.type;
});
