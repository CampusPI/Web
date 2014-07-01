'use strict';

angular.module('tvApp').directive('menu', function() {
  return function(scope, element) {
    var clickingCallback = function() {
      var a = document.querySelectorAll('.js-item');
      angular.element(a).children().removeClass('selected');
      element.children().addClass('selected');
    };
    element.bind('click', clickingCallback);
  };
});
