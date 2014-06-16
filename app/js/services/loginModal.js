'use strict';

angular.module('tvApp').factory('loginModal', function (btfModal) {
  return btfModal({
    controller: 'loginCtrl',
    template: '<div class="btf-modal">Hello {{name}}</div>'
  });
});
