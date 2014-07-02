'use strict';

angular.module('tvApp', ['ngResource', 'btford.modal', 'ngRoute', 'googleOauth', 'td.easySocialShare'])

  .config(function($routeProvider) {
    $routeProvider
      // route for the home page
      .when('/', {
        templateUrl : 'templates/home.html'
      })

      .when('/list/favoritos', {
        templateUrl : 'templates/list.html',
        controller  : 'favsCtrl'
      })

      .when('/content/:type', {
        templateUrl : 'templates/content.html',
        controller  : 'typeContentCtrl'
      })

      .when('/view/:id', {
        templateUrl : 'templates/view.html',
        controller  : 'contentCtrl'
      });
  }).

  config(function(TokenProvider) {
    TokenProvider.extendConfig({
      clientId: '859779641004-cvl4ppt05dj26eprlv0eer3hrbmkpudf.apps.googleusercontent.com',
      redirectUri: 'http://localhost:9068/oauth2callback.html',
      scopes: ['https://www.googleapis.com/auth/userinfo.email']
    });
  });
