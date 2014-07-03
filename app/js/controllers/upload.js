'use strict';

angular.module('tvApp').controller('uploadCtrl', function ($scope, $routeParams, UploadService) {

  $scope.enviado = false;

  $scope.apagaOJP = function() {
    $scope.enviado = false;
    $scope.titulo = '';
    $scope.conteudo = '';
    $scope.url = '';
  };

  $scope.tabv = true;
  $scope.video = function() {$scope.tabv = true;};
  $scope.artigo = function() {$scope.tabv = false;};

  $scope.upload = function (selectedType) {
    if(selectedType){
      var id = $scope.url.split('v=')[1].substring(0, 11);
      UploadService.setVideo(id).then(function(data) {
        console.log(data);
        $scope.enviado = true;
      });
    }
    else{
      console.log('sim');
      UploadService.setNew($scope.titulo, $scope.conteudo, $scope.url, new Date()).then(function(data) {
        console.log(data);
        $scope.data = data;
        $scope.enviado = true;
      });
    }
  };

});
