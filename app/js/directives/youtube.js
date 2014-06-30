'use strict';

angular.module('tvApp').directive('youtube', function() {
  return function (scope, element) {
    scope.$watch('data', function() {
      var el = '<iframe width="853" height="480" id="vidz" src="//www.youtube.com/embed/'+scope.data.videoId+'?enablejsapi=1&version=3&rel=0" frameborder="0"></iframe>';
      element.html('').append(el);
    });
  };
});
