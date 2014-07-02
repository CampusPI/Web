'use strict';

angular.module('tvApp').factory('LoginService', function ($http, endpoint, Token, $location) {
  return {
    accessToken: null,
    user: null,
    verify: function(fn) {
      var self = this;
      self.accessToken = Token.get();
      if (self.accessToken) {
        Token.verifyAsync(self.accessToken).then(function() {
          $http.get(endpoint+'/api/web/user', {headers: {'Authorization': 'Bearer '+self.accessToken}}).success(function(data) {
            self.user = data;
            return fn(self.user);
          });
        }, function() {
          console.log('Failed to verify token.');
          fn(null);
        });
      } else {
        fn(null);
      }
    },
    login: function() {
      Token.extendConfig({state: $location.absUrl()});
      Token.getTokenWithRedirect({});
    }
  };
});
