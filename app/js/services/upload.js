'use strict';

angular.module('tvApp').factory('UploadService', function ($http, endpoint, Token) {
  return{
    setVideo: function(videoId) {
      return $http({
        method: 'POST',
        url: endpoint+'/api/web/upload',
        headers: {
          'Authorization': 'Bearer '+ Token.get()
        },
        data: {
          type: 'video',
          videoId: videoId
        }
      }).then(function(response) {
        console.log(response.data);
      });
    },
    setNew: function(titulo, conteudo, url, date) {
      return $http({
        method: 'POST',
        url: endpoint+'/api/web/upload',
        headers: {
          'Authorization': 'Bearer '+ Token.get()
        },
        data: {
          type: 'new',
          titulo: titulo,
          conteudo: conteudo,
          link: url,
          publicado: date
        }
      }).then(function(response) {
        return response.data;
      });
    }
  };
});