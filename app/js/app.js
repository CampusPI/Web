'use strict';

angular.module('tvApp', ['ngResource', 'btford.modal', 'ngRoute', 'googleOauth'])

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
  }).

  config(function(TokenProvider) {
    TokenProvider.extendConfig({
      clientId: '859779641004-cvl4ppt05dj26eprlv0eer3hrbmkpudf.apps.googleusercontent.com',
      redirectUri: 'http://localhost:9068/bower_components/angular-oauth/src/oauth2callback.html',
      //redirectUri: baseUrl + 'src/oauth2callback.html',  // allow lunching demo from a mirror
      scopes: ['https://www.googleapis.com/auth/userinfo.email']
    });
  });
