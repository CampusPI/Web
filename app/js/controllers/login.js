'use strict';

angular.module('tvApp').controller('loginCtrl', function ($scope,loginModal) {
  $scope.name = 'Campeão';
  $scope.showModal = function() {
    console.log('chamou');
    loginModal.activate();
  };
});
