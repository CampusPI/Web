'use strict';

angular.module('tvApp').controller('loginCtrl', function ($scope, loginModal, $http, Token, $rootScope, $location) {
  $scope.name = 'Campeão';
  $scope.showModal = function() {
    console.log('chamou');
    loginModal.activate();
  };

  $scope.$on('$routeChangeStart', function () {
    verify();
  });

  var verify = function() {
    console.log(Token);
    $scope.accessToken = Token.get();
    if ($scope.accessToken) {
      Token.verifyAsync($scope.accessToken).
        then(function() {
          $scope.accessTokenVerified = true;
          $http.get('http://localhost:8080/api/web/user', {headers: {'Authorization': 'Bearer '+$scope.accessToken}}).success(function(data) {
            $scope.user = data;
            console.log(data);
          });
        }, function() {
          console.log('Failed to verify token.');
        });
    }
  };

  $scope.login = function() {
    Token.extendConfig({state: $location.absUrl()});
    var extraParams = {};
    Token.getTokenWithRedirect(extraParams);
  };

});
