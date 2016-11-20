var $__app_95_app__ = (function() {
  "use strict";
  var __moduleName = "app_app";
  var mod = angular.module('app', ['ngRoute', 'ngAnimate', 'ngMessages', 'ngMaterial', 'route-segment', 'view-segment', 'app.nw-manifest', 'app.socket', 'ui.ace', 'ui.modal', 'ui.bootstrap', 'app.local-storage', 'app.top', 'app.game', 'app.game.creep', 'app.game.spawn', 'app.game.source', 'app.game.energy', 'app.game.construction-site', 'app.game.constructed-wall', 'app.game.exit', 'app.game.extension', 'app.game.flag', 'app.game.room.walls', 'app.game.room.roads', 'app.game.room.display-options-block', 'app.game.room.rendered-svg-path', 'app.game.room.view-popup', 'ui.bootstrap.tabs', 'app.game.memory', 'app.game.console', 'app.game.script', 'luegg.directives', 'app.connection', 'app.game.room', 'app.game.room.dlg-creep', 'app.dialogs', 'app.constants', 'app.game.tutorial', 'app.static-maps', 'app.memory-storage', 'app.game.editor-panel', 'app.game.replay-list', 'app.api', 'app.config', 'app.login', 'app.register', 'app.auth', 'app.loader', 'app.game.lobby', 'ngAria', 'app.game.room.dlg-flag', 'app.game.room.spawn-properties', 'app.game.room.creep-properties', 'ui.drop', 'app.profile', 'app.profile.account', 'app.key-filter', 'app.game.keeper-lair', 'app.game.portal', 'app.game.lobby.survival', 'app.game.lobby.arena', 'app.game.room.dlg-arena-activation', 'ui.json-editor', 'app.profile.account.badge', 'app.badge', 'app.badge.paths', 'app.game.world-map', 'app.game.controller', 'app.game.dlg-world-activation', 'app.game.dlg-world-respawn', 'app.profile.early-preview-request', 'app.game.overview', 'app.game.overview.room', 'app.punchcard', 'app.game.lobby.world', 'app.ea', 'app.game.room.controller-properties', 'app.game.link', 'app.game.room.flag-properties', 'app.timeline-stats', 'app.profile.messages.respondent', 'app.profile.messages.index', 'app.game.storage', 'app.game.script.dlg-clone-branch', 'app.order', 'app.profile.cpu', 'app.order.dlg-coupon', 'app.order.twitter-promo', 'app.game.tower', 'app.game.observer', 'app.game.disabled-object', 'app.game.power-bank', 'app.game.power-spawn', 'app.game.lobby.power', 'app.profile-stats', 'app.recaptcha', 'app.profile.account.subscription', 'app.game.tutorial.index', 'app.game.mineral', 'app.game.extractor', 'app.game.lab', 'app.game.terminal', 'app.game.container', 'app.game.tutorial.section1', 'app.game.tutorial.section2', 'app.game.tutorial.section3', 'app.game.tutorial.section4', 'app.game.tutorial.section5', 'angularSpectrumColorpicker', 'app.game.market', 'app.game.nuke', 'app.game.nuker', 'app.dlg-version-updated', 'app.nw-menu', 'app.code-branches', 'app.nw-local-file-sync', 'app.game.rampart', 'app.game.room.rampart-properties', 'app.game.market.all-orders', 'app.game.market.my-orders', 'app.game.market.history', 'app.dlg-server-message']);
  mod.config(function($locationProvider, $routeProvider, $routeSegmentProvider, $mdThemingProvider, $compileProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/g'});
    $mdThemingProvider.theme('default').dark().primaryColor('indigo', {'hue-3': 'A400'}).accentColor('teal', {'default': '500'}).warnColor('orange');
    $mdThemingProvider.setDefaultTheme('default');
    if (1 || window.nw) {
      $compileProvider.imgSrcSanitizationWhitelist(/^\s*((https?|ftp|file|blob|chrome-extension|steam):|data:image\/)/);
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|chrome-extension|steam):/);
    }
  });
  mod.constant('uiAceConfig', {ace: {advanced: {
        enableTern: {
          defs: ['ecma5', 'ecma6', 'screeps'],
          plugins: {doc_comment: {fullDocs: true}},
          useWorker: true,
          switchToDoc: function(name, start) {
            console.log('switchToDoc called but not defined. name=' + name + '; start=', start);
          },
          startedCb: function() {}
        },
        enableSnippets: true,
        enableBasicAutocompletion: true
      }}});
  mod.constant('AppInstanceId', new Date().getTime());
  mod.constant('ResourceTypeNames', {
    token: "subscription token",
    energy: 'energy',
    power: 'power',
    H: 'hydrogen',
    O: 'oxygen',
    U: 'utrium',
    L: 'lemergium',
    K: 'keanium',
    Z: 'zynthium',
    X: 'catalyst',
    OH: 'hydroxide',
    ZK: 'zynthium keanite',
    UL: 'utrium lemergite',
    G: 'ghodium',
    UH: 'utrium hydride',
    UO: 'utrium oxide',
    KH: 'keanium hydride',
    KO: 'keanium oxide',
    LH: 'lemergium hydride',
    LO: 'lemergium oxide',
    ZH: 'zynthium hydride',
    ZO: 'zynthium oxide',
    GH: 'ghodium hydride',
    GO: 'ghodium oxide',
    UH2O: 'utrium acid',
    UHO2: 'utrium alkalide',
    KH2O: 'keanium acid',
    KHO2: 'keanium alkalide',
    LH2O: 'lemergium acid',
    LHO2: 'lemergium alkalide',
    ZH2O: 'zynthium acid',
    ZHO2: 'zynthium alkalide',
    GH2O: 'ghodium acid',
    GHO2: 'ghodium alkalide',
    XUH2O: 'catalyzed utrium acid',
    XUHO2: 'catalyzed utrium alkalide',
    XKH2O: 'catalyzed keanium acid',
    XKHO2: 'catalyzed keanium alkalide',
    XLH2O: 'catalyzed lemergium acid',
    XLHO2: 'catalyzed lemergium alkalide',
    XZH2O: 'catalyzed zynthium acid',
    XZHO2: 'catalyzed zynthium alkalide',
    XGH2O: 'catalyzed ghodium acid',
    XGHO2: 'catalyzed ghodium alkalide'
  });
  mod.run(function($routeSegment, $rootScope, Socket, $http, MemoryStorage, LocalStorage, Console, Connection, Auth, Loader, $mdAria, $interval, $document, $injector) {
    $rootScope.$routeSegment = $routeSegment;
    $rootScope._ = _;
    $rootScope.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    $rootScope.Me = (function() {
      return Auth.Me;
    });
    $rootScope.Loader = Loader;
    $rootScope.Math = Math;
    $rootScope.isOffServer = (function() {
      return $injector.get('Api').options.official;
    });
    if (LocalStorage.get('firstVisit', false) === false) {
      var time = new Date().getTime();
      LocalStorage.put('firstVisit', time);
    }
    $interval.bindToScope = (function($scope, fn, timeout) {
      var interval = $interval(fn, timeout);
      $scope.$on('$destroy', (function() {
        return $interval.cancel(interval);
      }));
    });
    $document.bindToScope = (function(scope, event, fn) {
      var applyFn = (function() {
        return scope.$apply(fn);
      });
      $document.bind(event, applyFn);
      scope.$on('$destroy', (function() {
        return $document.unbind(event, applyFn);
      }));
    });
    if (window.nw) {
      $rootScope.nw = true;
      var greenworks = require('./greenworks');
      if (!greenworks.initAPI()) {
        console.error('Could not init steamworks');
      }
    }
  });
  mod.directive('appShowWhenSteamOverlay', function($animate, $timeout) {
    return {link: function($scope, elm, attrs) {
        var active = false,
            timeout;
        function forceRefresh() {
          if (!active) {
            return;
          }
          setTimeout(function() {
            elm[0].getContext('2d').clearRect(0, 0, 1, 1);
            window.requestAnimationFrame(forceRefresh);
          }, 1000 / 30);
        }
        function update(isVisible) {
          $animate[isVisible ? 'removeClass' : 'addClass'](elm, 'ng-hide');
          active = isVisible;
          if (active) {
            forceRefresh();
            if (timeout) {
              $timeout.cancel(timeout);
              timeout = null;
            }
          }
        }
        var greenworks = require('./greenworks');
        greenworks.on('game-overlay-activated', (function(isActive) {
          return $scope.$apply((function() {
            if (isActive) {
              update(true);
            } else {
              if (timeout) {
                $timeout.cancel(timeout);
              }
              timeout = $timeout(2000);
              timeout.then((function() {
                if (active) {
                  update(false);
                }
              }));
            }
          }));
        }));
        $scope.$on('$destroy', (function() {
          return active = false;
        }));
      }};
  });
  mod.directive('appCustomValidator', function() {
    return {
      require: 'ngModel',
      link: function($scope, elm, attrs, ngModel) {
        var info = $scope.$eval(attrs.appCustomValidator);
        for (var key in info) {
          if (info[key]().$$state)
            ngModel.$asyncValidators[key] = info[key];
        }
        for (var key in info) {
          if (!info[key]().$$state)
            ngModel.$validators[key] = info[key];
        }
      }
    };
  });
  mod.directive('appController', function() {
    return {
      controller: '@',
      priority: -10000
    };
  });
  mod.directive('appAutofocus', function() {
    return {link: function($scope, elm, attrs) {
        if (!attrs.appAutofocus || $scope.$eval(attrs.appAutofocus))
          setTimeout(function() {
            elm.focus();
          }, 100);
      }};
  });
  mod.directive('appSubmit', function($parse) {
    return {
      controller: function() {
        this.loadingCnt = false;
      },
      link: function($scope, elm, attrs, ctrl) {
        elm.submit((function(event) {
          event.preventDefault();
          $scope.$apply((function() {
            var promise = $parse(attrs.appSubmit)($scope, {$event: event});
            if (promise && promise.then) {
              ctrl.loadingCnt = true;
              promise.catch((function() {
                $scope.$broadcast('form fail');
              }))['finally'](function() {
                ctrl.loadingCnt = false;
              });
            }
          }));
        }));
      }
    };
  });
  mod.directive('appFormFailAnim', function($animate) {
    return {link: function($scope, elm, attrs) {
        $scope.$on('form fail', (function() {
          $animate.addClass(elm, attrs.appFormFailAnim).then((function() {
            return $animate.removeClass(elm, attrs.appFormFailAnim);
          }));
        }));
      }};
  });
  mod.directive('appSubmitAnimated', function() {
    return {
      require: '^appSubmit',
      link: function($scope, elm, attrs, ctrl) {
        $scope.$watch((function() {
          return ctrl.loadingCnt;
        }), (function(val) {
          elm.toggleClass('striped', val);
          val ? elm.attr('disabled', 'disabled') : elm.removeAttr('disabled');
        }));
      }
    };
  });
  mod.directive('appFocusOnEvent', function() {
    return {link: function($scope, elm, attrs) {
        $scope.$on(attrs.appFocusOnEvent, (function() {
          setTimeout((function() {
            elm.focus();
            elm.find('input, textarea').focus();
          }), 100);
        }));
      }};
  });
  mod.directive('appCursorToEndOnEvent', function() {
    return {link: function($scope, elm, attrs) {
        $scope.$on(attrs.appCursorToEndOnEvent, (function() {
          if (elm.get(0).setSelectionRange) {
            elm.get(0).setSelectionRange(elm.val().length, elm.val().length);
          }
        }));
      }};
  });
  mod.directive('appStopClickPropagation', function() {
    return function($scope, element, attrs) {
      element.click(function(e) {
        if (attrs.appStopClickPropagation.charAt(0) == "~") {
          var m = attrs.appStopClickPropagation.match(/^~(.*)$/);
          if (!m[1] || $scope.$eval(m[1])) {
            console.log('@', element);
            e.stopImmediatePropagation();
          }
        } else if (attrs.appStopClickPropagation == "" || $scope.$eval(attrs.appStopClickPropagation))
          e.stopPropagation();
      });
    };
  });
  mod.directive('appStopPropagation', function() {
    return function($scope, element, attrs) {
      element.bind(attrs.appStopPropagation, function(e) {
        e.stopPropagation();
      });
    };
  });
  mod.directive('appClickAnimated', function($parse) {
    return {
      scope: true,
      link: function($scope, element, attrs) {
        element.bind('click', function(event) {
          element.addClass('striped');
          element.attr('disabled', 'disabled');
          $scope.$apply(function() {
            var resultPromise = $parse(attrs.appClickAnimated)($scope, {$event: event});
            resultPromise['finally'](function() {
              element.removeClass('striped');
              if (attrs.ngDisabled) {
                var value = $scope.$eval(attrs.ngDisabled);
                value ? element.attr('disabled', 'disabled') : element.removeAttr('disabled');
              } else
                element.removeAttr('disabled');
            });
          });
        });
      }
    };
  });
  mod.directive('appOnCtrlEnter', function() {
    return {link: function($scope, elm, attrs) {
        elm.find('textarea').keydown(function(event) {
          if ((event.ctrlKey || event.shiftKey) && event.keyCode == 13 || event.ctrlKey && event.keyCode == 83) {
            event.preventDefault();
            $scope.$apply((function() {
              return $scope.$eval(attrs.appOnCtrlEnter);
            }));
          }
        });
      }};
  });
  mod.directive('appFacebookParse', function($timeout) {
    return {link: function($scope, elm, attrs) {
        $timeout((function() {
          FB.XFBML.parse();
        }), 10);
      }};
  });
  mod.directive('appAutoScrollWatch', function() {
    return {
      priority: 100000,
      link: function($scope, elm, attrs) {
        var boundToBottom = 0;
        $scope.$watch(attrs.appAutoScrollWatch, function() {
          if (boundToBottom !== null) {
            setTimeout(function() {
              elm[0].scrollTop = elm[0].scrollHeight - elm.height() - boundToBottom;
              if (boundToBottom)
                boundToBottom = 0;
            }, 0);
          }
        });
        elm.scroll(function() {
          if (boundToBottom === 0 || boundToBottom === null) {
            boundToBottom = elm[0].scrollTop == elm[0].scrollHeight - elm.height() ? 0 : null;
          }
        });
        $scope.$on('save scroll', function() {
          boundToBottom = elm[0].scrollHeight - elm.height() - elm[0].scrollTop;
        });
      }
    };
  });
  mod.directive('appEnterSubmit', function() {
    return {link: function($scope, elm) {
        elm.keydown(function(event) {
          if (event.keyCode == 13 && event.ctrlKey) {
            $(elm.get(0).form).submit();
            event.preventDefault();
          }
        });
      }};
  });
  mod.directive('appClickSelectAll', function() {
    return {link: function($scope, elm, attrs) {
        elm.click((function() {
          return elm[0].select();
        }));
      }};
  });
  mod.directive('appButtonCopyInput', function() {
    return {link: function($scope, elm, attrs) {
        elm.find('button').click((function() {
          elm.find('input')[0].select();
          document.execCommand('copy');
        }));
      }};
  });
  mod.directive('appNwExternalLink', function() {
    return {link: function($scope, elm, attrs) {
        if (!window.nw) {
          return;
        }
        elm.click((function(e) {
          nw.Shell.openExternal(attrs.appNwExternalLink || elm.attr('href'));
          e.preventDefault();
        }));
      }};
  });
  mod.filter('empty', function() {
    return function(val) {
      if (_.isObject(val)) {
        if (_.isArray(val))
          return val.length == 0;
        else {
          for (var i in val)
            if (!_.isFunction(val[i]) && val[i] !== null && val[i] !== undefined)
              return false;
          return true;
        }
      }
      return val === null || val === undefined;
    };
  });
  mod.filter('keys', function() {
    return (function(value) {
      return _.keys(value);
    });
  });
  mod.filter('sort', function() {
    return (function(value) {
      return value.sort();
    });
  });
  mod.filter('trust', function($sce) {
    return (function(val) {
      return $sce.trustAsHtml(val);
    });
  });
  mod.filter('bust', function() {
    return (function(val) {
      return val + '?bust=__bust__';
    });
  });
  mod.filter('readableDate', function($locale) {
    return function(value) {
      var now = new Date();
      var time = new Date(value);
      var today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
      if (time.getTime() > now.getTime() - 60 * 1000)
        return 'Just now';
      if (time.getTime() > now.getTime() - 3600 * 1000) {
        var minutesAgo = Math.round((now.getTime() - time.getTime()) / 1000 / 60);
        return minutesAgo + (minutesAgo != 1 ? ' minutes ago' : ' minute ago');
      }
      if (time.getTime() >= today.getTime())
        return 'Today at ' + time.toLocaleTimeString();
      if (time.getTime() > new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 0, 0, 0).getTime())
        return 'Yesterday at ' + time.toLocaleTimeString();
      if (time.getTime() > new Date(now.getFullYear(), now.getMonth(), now.getDate() - 4, 0, 0, 0).getTime()) {
        var days = Math.round((today.getTime() - new Date(time.getFullYear(), time.getMonth(), time.getDate(), 0, 0, 0)) / 24 / 3600 / 1000);
        return days + ' days ago';
      }
      return time.toLocaleDateString();
    };
  });
  mod.factory('$mdAria', function() {
    return {
      expect: angular.noop,
      expectWithText: angular.noop
    };
  });
  mod.filter('pad', function() {
    return (function(val) {
      if (val < 10)
        return '0' + val;
      return val;
    });
  });
  mod.filter('round', function() {
    return function(val) {
      val = Math.round(val | 0);
      var log = Math.floor(Math.log10 ? Math.log10(val) : (Math.log(val) / Math.LN10 + 0.00000001)),
          log3 = Math.floor(log / 3),
          round = 100;
      if (log > 3) {
        if (log - log3 * 3 > 0) {
          round = 10;
        }
        if (log - log3 * 3 > 1) {
          round = 1;
        }
        val = Math.floor(val / Math.pow(10, 3 * log3) * round) / round;
        val = "" + val;
        if (val.length < 3 && !/\./.test(val)) {
          val += ".0";
        }
        val += {
          0: '',
          1: 'K',
          2: 'M',
          3: 'B'
        }[log3];
      }
      return "" + val;
    };
  });
  mod.filter('marked', function($sce) {
    var renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
      return '<a href="' + href + '" target="_blank" onclick="if(window.nw) {nw.Shell.openExternal(this.href); return false;}">' + text + '</a>';
    };
    var options = _.extend({}, marked.defaults, {
      breaks: true,
      sanitize: true,
      code: true,
      renderer: renderer
    });
    var lexer = new marked.Lexer(options);
    var parser = new marked.Parser(options);
    return function(value) {
      value = parser.parse(lexer.lex(value));
      return $sce.trustAsHtml(value);
    };
  });
  mod.filter('truncate', function() {
    return function(value, length) {
      if (value.length <= length) {
        return value;
      }
      return value.substring(0, length) + '...';
    };
  });
  mod.filter('elapsedDays', function() {
    function pad(val) {
      if (val < 10)
        return '0' + val;
      return val;
    }
    var filter = function(value) {
      var elapsed = value - Date.now();
      if (elapsed < 0) {
        return null;
      }
      if (elapsed > 48 * 3600 * 1000) {
        return Math.floor(elapsed / 24 / 3600 / 1000) + ' days';
      } else {
        return pad(Math.floor(elapsed / 60 / 60 / 1000)) + ':' + pad(Math.floor(elapsed / 60 / 1000) % 60) + ':' + pad(Math.floor(elapsed / 1000) % 60);
      }
    };
    filter.$stateful = true;
    return filter;
  });
  mod.filter('capitalize', function() {
    return function(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    };
  });
  mod.directive('appSpectrum', function() {
    return {link: function($scope, elm, attrs) {
        $(elm).spectrum({
          preferredFormat: "hex",
          showInput: true
        });
        $(elm).on('change.spectrum', (function() {
          return $scope.$apply();
        }));
      }};
  });
  mod.directive('appVisible', function($animate) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        scope.$watch(attr.appVisible, function(value) {
          $animate[value ? 'removeClass' : 'addClass'](element, 'invisible');
        });
      }
    };
  });
  mod.directive('appAttr', function() {
    return {link: function($scope, elm, attrs) {
        var m = attrs.appAttr.split('#');
        $scope.$watch(m[1], (function(val) {
          return elm[0].setAttribute(m[0], val);
        }));
      }};
  });
  angular.module('ngAria', []);
  return {};
})();
