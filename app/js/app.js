'use strict';

angular.module('tvApp', ['ngResource', 'btford.modal', 'ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      // route for the home page
      .when('/', {
        templateUrl : 'templates/home.html',
        controller  : 'appCtrl'
      })

      //DUMMY ROUTE!!!
      .when('/videos', {
        templateUrl : 'templates/video.html',
        controller  : 'videoCtrl'
      });
  });
