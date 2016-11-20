var $__app_95_config__ = (function() {
  "use strict";
  var __moduleName = "app_config";
  var mod = angular.module('app.config', []);
  mod.config(function(ApiProvider, SocketProvider) {
    ApiProvider.options.apiUrl = 'https://screeps.com/api/';
    SocketProvider.options.websocketUrl = 'https://screeps.com/socket';
    if (localStorage.getItem('debug') != '1') {
      SocketProvider.options.gzip = true;
    }
  });
  return {};
})();
