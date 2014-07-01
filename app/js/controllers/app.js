'use strict';

angular.module('tvApp').controller('appCtrl', function ($scope, ScheduleService, $location, UpdateService, $interval, LoginService) {

  $scope.getClass = function(path) {
    if ($location.path().substr(0, path.length) === path) {
      return 'selected';
    } else {
      return '';
    }
  };

  var l = function() {
    $scope.logged = false;
    $scope.log = false;
    LoginService.verify(function(user) {
      if (user) {
        console.log(user);
        $scope.user = user;
        $scope.logged = true;
        $scope.log = false;
      }
      else {
        $scope.log = true;
        $scope.logged = false;
      }
    });
  };

  l();

  $scope.login = function() {
    LoginService.login();
  };

  $scope.logout = function() {
    localStorage.removeItem('accessToken');
    l();
  };

  var apdete = function() {
    UpdateService.new().then(function(data) {
      if (JSON.stringify($scope.new) !== JSON.stringify(data[0])) {
        $scope.new = data[0];
      }
    });
    ScheduleService.get().then(function(data) {
      $scope.coisas = data;
      $scope.imgDef= 'http://www.fct.unl.pt/sites/default/files/imagens/noticias/noticias.jpg';
    });
  };

  apdete();

  $interval(apdete,10000);

  $scope.go = function ( path ) {
    $location.path( path );
  };
});
