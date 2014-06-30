'use strict';

angular.module('tvApp').controller('appCtrl', function ($scope, ScheduleService, $location) {
  ScheduleService.get().then(function(data) {
    console.log(data);
    $scope.coisas = data;
    $scope.imgDef= 'http://www.fct.unl.pt/sites/default/files/imagens/noticias/noticias.jpg';
  });

  $scope.go = function ( path ) {
    $location.path( path );
  };
});
