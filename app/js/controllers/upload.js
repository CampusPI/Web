'use strict';

angular.module('tvApp').controller('uploadCtrl', function ($scope, $routeParams, UploadService) {

  $scope.tabv = true;
  $scope.video = function() {$scope.tabv = true;};
  $scope.artigo = function() {$scope.tabv = false;};


  $scope.showOptions = true;

  $scope.isCheckboxSelected = function(type) {
    return type === $scope.selectedType;
  };

  $scope.show = function () {
    $scope.showOptions = false;
  };

  $scope.canShow = function () {
    return $scope.showOptions;
  };

  $scope.upload = function (selectedType) {
    if(selectedType === 'video'){
      var id = $scope.url.split('v=')[1].substring(0, 11);
      UploadService.setVideo(id).then(function(data) {
        console.log(data);
      });
    }
    else{
      UploadService.setNew($scope.titulo, $scope.conteudo, $scope.url, new Date()).then(function(data) {
        console.log(data);
        $scope.data = data;
      });
    }
  };

});
