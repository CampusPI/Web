'use strict';

angular.module('tvApp').controller('typeContentCtrl', function ($scope, $routeParams, VideosService, NewsService, EventsService) {
  $scope.type = $routeParams.type;
  if($routeParams.type === 'videos'){
    VideosService.get().then(function(data) {
      $scope.videos = data;
    });
  }
  else if($routeParams.type === 'noticias'){
    NewsService.get().then(function(data) {
      $scope.news = data;
      $scope.imgDef= 'http://www.fct.unl.pt/sites/default/files/imagens/noticias/noticias.jpg';
    });
  }
  else if($routeParams.type === 'eventos'){
    EventsService.get().then(function(data) {
      $scope.events = data;
    });
  }
});
