!function(a,b){"use strict";function c(a,b,c){if(!a)throw pa("areq","Argument '{0}' is {1}",b||"?",c||"required");return a}function d(a,b){return a||b?a?b?(Q(a)&&(a=a.join(" ")),Q(b)&&(b=b.join(" ")),a+" "+b):a:b:""}function e(a){var b={};return a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from),b}function f(a,b,c){var d="";return a=Q(a)?a:a&&R(a)&&a.length?a.split(/\s+/):[],P(a,function(a,e){a&&a.length>0&&(d+=e>0?" ":"",d+=c?b+a:a+b)}),d}function g(a,b){var c=a.indexOf(b);b>=0&&a.splice(c,1)}function h(a){if(a instanceof O)switch(a.length){case 0:return[];case 1:if(a[0].nodeType===X)return a;break;default:return O(i(a))}return a.nodeType===X?O(a):void 0}function i(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(c.nodeType==X)return c}}function j(a,b,c){P(b,function(b){a.addClass(b,c)})}function k(a,b,c){P(b,function(b){a.removeClass(b,c)})}function l(a){return function(b,c){c.addClass&&(j(a,b,c.addClass),c.addClass=null),c.removeClass&&(k(a,b,c.removeClass),c.removeClass=null)}}function m(a){if(a=a||{},!a.$$prepared){var b=a.domOperation||L;a.domOperation=function(){a.$$domOperationFired=!0,b(),b=L},a.$$prepared=!0}return a}function n(a,b){o(a,b),p(a,b)}function o(a,b){b.from&&(a.css(b.from),b.from=null)}function p(a,b){b.to&&(a.css(b.to),b.to=null)}function q(a,b,c){var d=b.options||{},e=c.options||{},f=(d.addClass||"")+" "+(e.addClass||""),g=(d.removeClass||"")+" "+(e.removeClass||""),h=r(a.attr("class"),f,g);e.preparationClasses&&(d.preparationClasses=y(e.preparationClasses,d.preparationClasses),delete e.preparationClasses);var i=d.domOperation!==L?d.domOperation:null;return N(d,e),i&&(d.domOperation=i),h.addClass?d.addClass=h.addClass:d.addClass=null,h.removeClass?d.removeClass=h.removeClass:d.removeClass=null,b.addClass=d.addClass,b.removeClass=d.removeClass,d}function r(a,b,c){function d(a){R(a)&&(a=a.split(" "));var b={};return P(a,function(a){a.length&&(b[a]=!0)}),b}var e=1,f=-1,g={};a=d(a),b=d(b),P(b,function(a,b){g[b]=e}),c=d(c),P(c,function(a,b){g[b]=g[b]===e?null:f});var h={addClass:"",removeClass:""};return P(g,function(b,c){var d,g;b===e?(d="addClass",g=!a[c]):b===f&&(d="removeClass",g=a[c]),g&&(h[d].length&&(h[d]+=" "),h[d]+=c)}),h}function s(a){return a instanceof b.element?a[0]:a}function t(a,b,c){var d="";b&&(d=f(b,$,!0)),c.addClass&&(d=y(d,f(c.addClass,Y))),c.removeClass&&(d=y(d,f(c.removeClass,Z))),d.length&&(c.preparationClasses=d,a.addClass(d))}function u(a,b){b.preparationClasses&&(a.removeClass(b.preparationClasses),b.preparationClasses=null),b.activeClasses&&(a.removeClass(b.activeClasses),b.activeClasses=null)}function v(a,b){var c=b?"-"+b+"s":"";return x(a,[na,c]),[na,c]}function w(a,b){var c=b?"paused":"",d=J+ja;return x(a,[d,c]),[d,c]}function x(a,b){var c=b[0],d=b[1];a.style[c]=d}function y(a,b){return a?b?a+" "+b:a:b}function z(a){return[ma,a+"s"]}function A(a,b){var c=b?la:na;return[c,a+"s"]}function B(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};return P(c,function(a,b){var c=e[a];if(c){var f=c.charAt(0);("-"===f||"+"===f||f>=0)&&(c=C(c)),0===c&&(c=null),d[b]=c}}),d}function C(a){var b=0,c=a.split(/\s*,\s*/);return P(c,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1)),a=parseFloat(a)||0,b=b?Math.max(a,b):a}),b}function D(a){return 0===a||null!=a}function E(a,b){var c=H,d=a+"s";return b?c+=ea:d+=" linear all",[c,d]}function F(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){var c=a[b];return c?c.total:0},get:function(b){var c=a[b];return c&&c.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function G(a,b,c){P(c,function(c){a[c]=U(a[c])?a[c]:b.style.getPropertyValue(c)})}var H,I,J,K,L=b.noop,M=b.copy,N=b.extend,O=b.element,P=b.forEach,Q=b.isArray,R=b.isString,S=b.isObject,T=b.isUndefined,U=b.isDefined,V=b.isFunction,W=b.isElement,X=1,Y="-add",Z="-remove",$="ng-",_="-active",aa="-prepare",ba="ng-animate",ca="$$ngAnimateChildren",da="";T(a.ontransitionend)&&U(a.onwebkittransitionend)?(da="-webkit-",H="WebkitTransition",I="webkitTransitionEnd transitionend"):(H="transition",I="transitionend"),T(a.onanimationend)&&U(a.onwebkitanimationend)?(da="-webkit-",J="WebkitAnimation",K="webkitAnimationEnd animationend"):(J="animation",K="animationend");var ea="Duration",fa="Property",ga="Delay",ha="TimingFunction",ia="IterationCount",ja="PlayState",ka=9999,la=J+ga,ma=J+ea,na=H+ga,oa=H+ea,pa=b.$$minErr("ng"),qa=["$$rAF",function(a){function b(a){d=d.concat(a),c()}function c(){if(d.length){for(var b=d.shift(),f=0;f<b.length;f++)b[f]();e||a(function(){e||c()})}}var d,e;return d=b.queue=[],b.waitUntilQuiet=function(b){e&&e(),e=a(function(){e=null,b(),c()})},b}],ra=["$interpolate",function(a){return{link:function(c,d,e){function f(a){a="on"===a||"true"===a,d.data(ca,a)}var g=e.ngAnimateChildren;b.isString(g)&&0===g.length?d.data(ca,!0):(f(a(g)(c)),e.$observe("ngAnimateChildren",f))}}}],sa="$$animateCss",ta=1e3,ua=3,va=1.5,wa={transitionDuration:oa,transitionDelay:na,transitionProperty:H+fa,animationDuration:ma,animationDelay:la,animationIterationCount:J+ia},xa={transitionDuration:oa,transitionDelay:na,animationDuration:ma,animationDelay:la},ya=["$animateProvider",function(a){var b=F(),c=F();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,d,h,i,j,k,q,r){function t(a,b){var c="$$ngAnimateParentKey",d=a.parentNode,e=d[c]||(d[c]=++O);return e+"-"+a.getAttribute("class")+"-"+b}function u(c,d,e,f){var g=b.get(e);return g||(g=B(a,c,f),"infinite"===g.animationIterationCount&&(g.animationIterationCount=1)),b.put(e,g),g}function y(e,g,h,i){var j;if(b.count(h)>0&&(j=c.get(h),!j)){var k=f(g,"-stagger");d.addClass(e,k),j=B(a,e,i),j.animationDuration=Math.max(j.animationDuration,0),j.transitionDuration=Math.max(j.transitionDuration,0),d.removeClass(e,k),c.put(h,j)}return j||{}}function C(a){R.push(a),q.waitUntilQuiet(function(){b.flush(),c.flush();for(var a=j(),d=0;d<R.length;d++)R[d](a);R.length=0})}function F(a,b,c){var d=u(a,b,c,wa),e=d.animationDelay,f=d.transitionDelay;return d.maxDelay=e&&f?Math.max(e,f):e||f,d.maxDuration=Math.max(d.animationDuration*d.animationIterationCount,d.transitionDuration),d}var N=l(d),O=0,R=[];return function(a,c){function j(){q()}function l(){q(!0)}function q(b){if(!(V||X&&W)){V=!0,W=!1,S.$$skipPreparationClasses||d.removeClass(a,wa),d.removeClass(a,za),w(U,!1),v(U,!1),P(ja,function(a){U.style[a[0]]=""}),N(a,S),n(a,S),Object.keys(T).length&&P(T,function(a,b){a?U.style.setProperty(b,a):U.style.removeProperty(b)}),S.onDone&&S.onDone(),na&&na.length&&a.off(na.join(" "),O);var c=a.data(sa);c&&(i.cancel(c[0].timer),a.removeData(sa)),aa&&aa.complete(!b)}}function u(a){Na.blockTransition&&v(U,a),Na.blockKeyframeAnimation&&w(U,!!a)}function B(){return aa=new h({end:j,cancel:l}),C(L),q(),{$$willAnimate:!1,start:function(){return aa},end:j}}function O(a){a.stopPropagation();var b=a.originalEvent||a,c=b.$manualTimeStamp||Date.now(),d=parseFloat(b.elapsedTime.toFixed(ua));Math.max(c-ia,0)>=da&&d>=ea&&(X=!0,q())}function R(){function b(){if(!V){if(u(!1),P(ja,function(a){var b=a[0],c=a[1];U.style[b]=c}),N(a,S),d.addClass(a,za),Na.recalculateTimingStyles){if(ya=U.className+" "+wa,Ca=t(U,ya),La=F(U,ya,Ca),Ma=La.maxDelay,ca=Math.max(Ma,0),ea=La.maxDuration,0===ea)return void q();Na.hasTransitions=La.transitionDuration>0,Na.hasAnimations=La.animationDuration>0}if(Na.applyAnimationDelay&&(Ma="boolean"!=typeof S.delay&&D(S.delay)?parseFloat(S.delay):Ma,ca=Math.max(Ma,0),La.animationDelay=Ma,Oa=A(Ma,!0),ja.push(Oa),U.style[Oa[0]]=Oa[1]),da=ca*ta,ga=ea*ta,S.easing){var b,e=S.easing;Na.hasTransitions&&(b=H+ha,ja.push([b,e]),U.style[b]=e),Na.hasAnimations&&(b=J+ha,ja.push([b,e]),U.style[b]=e)}La.transitionDuration&&na.push(I),La.animationDuration&&na.push(K),ia=Date.now();var f=da+va*ga,g=ia+f,h=a.data(sa)||[],j=!0;if(h.length){var k=h[0];j=g>k.expectedEndTime,j?i.cancel(k.timer):h.push(q)}if(j){var l=i(c,f,!1);h[0]={timer:l,expectedEndTime:g},h.push(q),a.data(sa,h)}na.length&&a.on(na.join(" "),O),S.to&&(S.cleanupStyles&&G(T,U,Object.keys(S.to)),p(a,S))}}function c(){var b=a.data(sa);if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData(sa)}}if(!V){if(!U.parentNode)return void q();var e=function(a){if(X)W&&a&&(W=!1,q());else if(W=!a,La.animationDuration){var b=w(U,W);W?ja.push(b):g(ja,b)}},f=Ja>0&&(La.transitionDuration&&0===Da.transitionDuration||La.animationDuration&&0===Da.animationDuration)&&Math.max(Da.animationDelay,Da.transitionDelay);f?i(b,Math.floor(f*Ja*ta),!1):b(),ba.resume=function(){e(!0)},ba.pause=function(){e(!1)}}}var S=c||{};S.$$prepared||(S=m(M(S)));var T={},U=s(a);if(!U||!U.parentNode||!r.enabled())return B();var V,W,X,aa,ba,ca,da,ea,ga,ia,ja=[],la=a.attr("class"),ma=e(S),na=[];if(0===S.duration||!k.animations&&!k.transitions)return B();var oa=S.event&&Q(S.event)?S.event.join(" "):S.event,pa=oa&&S.structural,qa="",ra="";pa?qa=f(oa,$,!0):oa&&(qa=oa),S.addClass&&(ra+=f(S.addClass,Y)),S.removeClass&&(ra.length&&(ra+=" "),ra+=f(S.removeClass,Z)),S.applyClassesEarly&&ra.length&&N(a,S);var wa=[qa,ra].join(" ").trim(),ya=la+" "+wa,za=f(wa,_),Aa=ma.to&&Object.keys(ma.to).length>0,Ba=(S.keyframeStyle||"").length>0;if(!Ba&&!Aa&&!wa)return B();var Ca,Da;if(S.stagger>0){var Ea=parseFloat(S.stagger);Da={transitionDelay:Ea,animationDelay:Ea,transitionDuration:0,animationDuration:0}}else Ca=t(U,ya),Da=y(U,wa,Ca,xa);S.$$skipPreparationClasses||d.addClass(a,wa);var Fa;if(S.transitionStyle){var Ga=[H,S.transitionStyle];x(U,Ga),ja.push(Ga)}if(S.duration>=0){Fa=U.style[H].length>0;var Ha=E(S.duration,Fa);x(U,Ha),ja.push(Ha)}if(S.keyframeStyle){var Ia=[J,S.keyframeStyle];x(U,Ia),ja.push(Ia)}var Ja=Da?S.staggerIndex>=0?S.staggerIndex:b.count(Ca):0,Ka=0===Ja;Ka&&!S.skipBlocking&&v(U,ka);var La=F(U,ya,Ca),Ma=La.maxDelay;ca=Math.max(Ma,0),ea=La.maxDuration;var Na={};if(Na.hasTransitions=La.transitionDuration>0,Na.hasAnimations=La.animationDuration>0,Na.hasTransitionAll=Na.hasTransitions&&"all"==La.transitionProperty,Na.applyTransitionDuration=Aa&&(Na.hasTransitions&&!Na.hasTransitionAll||Na.hasAnimations&&!Na.hasTransitions),Na.applyAnimationDuration=S.duration&&Na.hasAnimations,Na.applyTransitionDelay=D(S.delay)&&(Na.applyTransitionDuration||Na.hasTransitions),Na.applyAnimationDelay=D(S.delay)&&Na.hasAnimations,Na.recalculateTimingStyles=ra.length>0,(Na.applyTransitionDuration||Na.applyAnimationDuration)&&(ea=S.duration?parseFloat(S.duration):ea,Na.applyTransitionDuration&&(Na.hasTransitions=!0,La.transitionDuration=ea,Fa=U.style[H+fa].length>0,ja.push(E(ea,Fa))),Na.applyAnimationDuration&&(Na.hasAnimations=!0,La.animationDuration=ea,ja.push(z(ea)))),0===ea&&!Na.recalculateTimingStyles)return B();if(null!=S.delay){var Oa;"boolean"!=typeof S.delay&&(Oa=parseFloat(S.delay),ca=Math.max(Oa,0)),Na.applyTransitionDelay&&ja.push(A(Oa)),Na.applyAnimationDelay&&ja.push(A(Oa,!0))}return null==S.duration&&La.transitionDuration>0&&(Na.recalculateTimingStyles=Na.recalculateTimingStyles||Ka),da=ca*ta,ga=ea*ta,S.skipBlocking||(Na.blockTransition=La.transitionDuration>0,Na.blockKeyframeAnimation=La.animationDuration>0&&Da.animationDelay>0&&0===Da.animationDuration),S.from&&(S.cleanupStyles&&G(T,U,Object.keys(S.from)),o(a,S)),Na.blockTransition||Na.blockKeyframeAnimation?u(ea):S.skipBlocking||v(U,!1),{$$willAnimate:!0,end:j,start:function(){return V?void 0:(ba={end:j,cancel:l,resume:null,pause:null},aa=new h(ba),C(R),aa)}}}}]}],za=["$$animationProvider",function(a){function b(a){return a.parentNode&&11===a.parentNode.nodeType}a.drivers.push("$$animateCssDriver");var c="ng-animate-shim",d="ng-anchor",e="ng-anchor-out",f="ng-anchor-in";this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,g,h,i,j,k,m){function n(a){return a.replace(/\bng-\S+\b/g,"")}function o(a,b){return R(a)&&(a=a.split(" ")),R(b)&&(b=b.split(" ")),a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function p(b,g,i){function j(a){var b={},c=s(a).getBoundingClientRect();return P(["width","height","top","left"],function(a){var d=c[a];switch(a){case"top":d+=t.scrollTop;break;case"left":d+=t.scrollLeft}b[a]=Math.floor(d)+"px"}),b}function k(){var b=a(q,{addClass:e,delay:!0,from:j(g)});return b.$$willAnimate?b:null}function l(a){return a.attr("class")||""}function m(){var b=n(l(i)),c=o(b,r),d=o(r,b),g=a(q,{to:j(i),addClass:f+" "+c,removeClass:e+" "+d,delay:!0});return g.$$willAnimate?g:null}function p(){q.remove(),g.removeClass(c),i.removeClass(c)}var q=O(s(g).cloneNode(!0)),r=n(l(q));g.addClass(c),i.addClass(c),q.addClass(d),v.append(q);var u,w=k();if(!w&&(u=m(),!u))return p();var x=w||u;return{start:function(){function a(){c&&c.end()}var b,c=x.start();return c.done(function(){return c=null,!u&&(u=m())?(c=u.start(),c.done(function(){c=null,p(),b.complete()}),c):(p(),void b.complete())}),b=new h({end:a,cancel:a})}}}function q(a,b,c,d){var e=r(a,L),f=r(b,L),g=[];return P(d,function(a){var b=a.out,d=a["in"],e=p(c,b,d);e&&g.push(e)}),e||f||0!==g.length?{start:function(){function a(){P(b,function(a){a.end()})}var b=[];e&&b.push(e.start()),f&&b.push(f.start()),P(g,function(a){b.push(a.start())});var c=new h({end:a,cancel:a});return h.all(b,function(a){c.complete(a)}),c}}:void 0}function r(b){var c=b.element,d=b.options||{};b.structural&&(d.event=b.event,d.structural=!0,d.applyClassesEarly=!0,"leave"===b.event&&(d.onDone=d.domOperation)),d.preparationClasses&&(d.event=y(d.event,d.preparationClasses));var e=a(c,d);return e.$$willAnimate?e:null}if(!j.animations&&!j.transitions)return L;var t=m[0].body,u=s(i),v=O(b(u)||t.contains(u)?u:t);l(k);return function(a){return a.from&&a.to?q(a.from,a.to,a.classes,a.anchors):r(a)}}]}],Aa=["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=Q(c)?c:c.split(" ");for(var d=[],e={},f=0;f<c.length;f++){var g=c[f],h=a.$$registeredAnimations[g];h&&!e[g]&&(d.push(b.get(h)),e[g]=!0)}return d}var f=l(d);return function(a,b,d,g){function h(){g.domOperation(),f(a,g)}function i(){o=!0,h(),n(a,g)}function j(a,b,d,e,f){var g;switch(d){case"animate":g=[b,e.from,e.to,f];break;case"setClass":g=[b,r,s,f];break;case"addClass":g=[b,r,f];break;case"removeClass":g=[b,s,f];break;default:g=[b,f]}g.push(e);var h=a.apply(a,g);if(h)if(V(h.start)&&(h=h.start()),h instanceof c)h.done(f);else if(V(h))return h;return L}function k(a,b,d,e,f){var g=[];return P(e,function(e){var h=e[f];h&&g.push(function(){var e,f,g=!1,i=function(a){g||(g=!0,(f||L)(a),e.complete(!a))};return e=new c({end:function(){i()},cancel:function(){i(!0)}}),f=j(h,a,b,d,function(a){var b=a===!1;i(b)}),e})}),g}function l(a,b,d,e,f){var g=k(a,b,d,e,f);if(0===g.length){var h,i;"beforeSetClass"===f?(h=k(a,"removeClass",d,e,"beforeRemoveClass"),i=k(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=k(a,"removeClass",d,e,"removeClass"),i=k(a,"addClass",d,e,"addClass")),h&&(g=g.concat(h)),i&&(g=g.concat(i))}if(0!==g.length)return function(a){var b=[];return g.length&&P(g,function(a){b.push(a())}),b.length?c.all(b,a):a(),function(a){P(b,function(b){a?b.cancel():b.end()})}}}var o=!1;3===arguments.length&&S(d)&&(g=d,d=null),g=m(g),d||(d=a.attr("class")||"",g.addClass&&(d+=" "+g.addClass),g.removeClass&&(d+=" "+g.removeClass));var p,q,r=g.addClass,s=g.removeClass,t=e(d);if(t.length){var u,v;"leave"==b?(v="leave",u="afterLeave"):(v="before"+b.charAt(0).toUpperCase()+b.substr(1),u=b),"enter"!==b&&"move"!==b&&(p=l(a,b,g,t,v)),q=l(a,b,g,t,u)}if(p||q){var w;return{$$willAnimate:!0,end:function(){return w?w.end():(i(),w=new c,w.complete(!0)),w},start:function(){function a(a){i(a),w.complete(a)}function b(b){o||((d||L)(b),a(b))}if(w)return w;w=new c;var d,e=[];return p&&e.push(function(a){d=p(a)}),e.length?e.push(function(a){h(),a(!0)}):h(),q&&e.push(function(a){d=q(a)}),w.setHost({end:function(){b()},cancel:function(){b(!0)}}),c.chain(e,a),w}}}}}]}],Ba=["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(a,b){function c(b){var c=b.element,d=b.event,e=b.options,f=b.classes;return a(c,d,f,e)}return function(a){if(a.from&&a.to){var d=c(a.from),e=c(a.to);if(!d&&!e)return;return{start:function(){function a(){return function(){P(f,function(a){a.end()})}}function c(a){g.complete(a)}var f=[];d&&f.push(d.start()),e&&f.push(e.start()),b.all(f,c);var g=new b({end:a(),cancel:a()});return g}}}return c(a)}}]}],Ca="data-ng-animate",Da="$ngAnimatePin",Ea=["$animateProvider",function(d){function e(a){if(!a)return null;var b=a.split(p),c=Object.create(null);return P(b,function(a){c[a]=!0}),c}function f(a,b){if(a&&b){var c=e(b);return a.split(p).some(function(a){return c[a]})}}function g(a,b,c,d){return r[a].some(function(a){return a(b,c,d)})}function j(a,b){var c=(a.addClass||"").length>0,d=(a.removeClass||"").length>0;return b?c&&d:c||d}var k=1,o=2,p=" ",r=this.rules={skip:[],cancel:[],join:[]};r.join.push(function(a,b,c){return!b.structural&&j(b)}),r.skip.push(function(a,b,c){return!b.structural&&!j(b)}),r.skip.push(function(a,b,c){return"leave"==c.event&&b.structural}),r.skip.push(function(a,b,c){return c.structural&&c.state===o&&!b.structural}),r.cancel.push(function(a,b,c){return c.structural&&b.structural}),r.cancel.push(function(a,b,c){return c.state===o&&b.structural}),r.cancel.push(function(a,b,c){if(c.structural)return!1;var d=b.addClass,e=b.removeClass,g=c.addClass,h=c.removeClass;return T(d)&&T(e)||T(g)&&T(h)?!1:f(d,h)||f(e,g)}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(e,f,p,r,v,w,x,y,z,A){function B(){var a=!1;return function(b){a?b():f.$$postDigest(function(){a=!0,b()})}}function C(a,b){return q(a,b,{})}function D(a,b,c){var d=s(b),e=s(a),f=[],g=_[c];return g&&P(g,function(a){ea.call(a.node,d)?f.push(a.callback):"leave"===c&&ea.call(a.node,e)&&f.push(a.callback)}),f}function E(a,b,c){var d=i(b);return a.filter(function(a){var b=a.node===d&&(!c||a.callback===c);return!b})}function F(a,b){"close"!==a||b[0].parentNode||fa.off(b)}function G(a,b,c){function d(b,c,d,f){z(function(){var b=D(p,a,c);b.length?e(function(){P(b,function(b){b(a,d,f)}),F(d,a)}):F(d,a)}),b.progress(c,d,f)}function i(b){u(a,v),da(a,v),n(a,v),v.domOperation(),y.complete(!b)}var l,p,v=M(c);a=h(a),a&&(l=s(a),p=a.parent()),v=m(v);var y=new x,z=B();if(Q(v.addClass)&&(v.addClass=v.addClass.join(" ")),v.addClass&&!R(v.addClass)&&(v.addClass=null),Q(v.removeClass)&&(v.removeClass=v.removeClass.join(" ")),v.removeClass&&!R(v.removeClass)&&(v.removeClass=null),v.from&&!S(v.from)&&(v.from=null),v.to&&!S(v.to)&&(v.to=null),!l)return i(),y;var A=[l.className,v.addClass,v.removeClass].join(" ");if(!ba(A))return i(),y;var E=["enter","move","leave"].indexOf(b)>=0,G=r[0].hidden,J=!Z||G||Y.get(l),N=!J&&V.get(l)||{},O=!!N.state;if(J||O&&N.state==k||(J=!K(a,p,b)),J)return G&&d(y,b,"start"),i(),G&&d(y,b,"close"),y;E&&H(a);var T={structural:E,element:a,event:b,addClass:v.addClass,removeClass:v.removeClass,close:i,options:v,runner:y};if(O){var U=g("skip",a,T,N);if(U)return N.state===o?(i(),y):(q(a,N,T),N.runner);var W=g("cancel",a,T,N);if(W)if(N.state===o)N.runner.end();else{if(!N.structural)return q(a,N,T),N.runner;N.close()}else{var X=g("join",a,T,N);if(X){if(N.state!==o)return t(a,E?b:null,v),b=T.event=N.event,v=q(a,N,T),N.runner;C(a,T)}}}else C(a,T);var $=T.structural;if($||($="animate"===T.event&&Object.keys(T.options.to||{}).length>0||j(T)),!$)return i(),I(a),y;var _=(N.counter||0)+1;return T.counter=_,L(a,k,T),f.$$postDigest(function(){var c=V.get(l),e=!c;c=c||{};var f=a.parent()||[],g=f.length>0&&("animate"===c.event||c.structural||j(c));if(e||c.counter!==_||!g)return e&&(da(a,v),n(a,v)),(e||E&&c.event!==b)&&(v.domOperation(),y.end()),void(g||I(a));b=!c.structural&&j(c,!0)?"setClass":c.event,L(a,o);var h=w(a,b,c.options);y.setHost(h),d(y,b,"start",{}),h.done(function(c){i(!c);var e=V.get(l);e&&e.counter===_&&I(s(a)),d(y,b,"close",{})})}),y}function H(a){var b=s(a),c=b.querySelectorAll("["+Ca+"]");P(c,function(a){var b=parseInt(a.getAttribute(Ca)),c=V.get(a);if(c)switch(b){case o:c.runner.end();case k:V.remove(a)}})}function I(a){var b=s(a);b.removeAttribute(Ca),V.remove(b)}function J(a,b){return s(a)===s(b)}function K(a,b,c){var d,e=O(r[0].body),f=J(a,e)||"HTML"===a[0].nodeName,g=J(a,p),h=!1,i=Y.get(s(a)),j=O.data(a[0],Da);for(j&&(b=j),b=s(b);b&&(g||(g=J(b,p)),b.nodeType===X);){var k=V.get(b)||{};if(!h){var l=Y.get(b);if(l===!0&&i!==!1){i=!0;break}l===!1&&(i=!1),h=k.structural}if(T(d)||d===!0){var m=O.data(b,ca);U(m)&&(d=m)}if(h&&d===!1)break;if(f||(f=J(b,e)),f&&g)break;b=g||!(j=O.data(b,Da))?b.parentNode:s(j)}var n=(!h||d)&&i!==!0;return n&&g&&f}function L(a,b,c){c=c||{},c.state=b;var d=s(a);d.setAttribute(Ca,b);var e=V.get(d),f=e?N(e,c):c;V.put(d,f)}var V=new v,Y=new v,Z=null,$=f.$watch(function(){return 0===y.totalPendingRequests},function(a){a&&($(),f.$$postDigest(function(){f.$$postDigest(function(){null===Z&&(Z=!0)})}))}),_={},aa=d.classNameFilter(),ba=aa?function(a){return aa.test(a)}:function(){return!0},da=l(z),ea=a.Node.prototype.contains||function(a){return this===a||!!(16&this.compareDocumentPosition(a))},fa={on:function(a,b,c){var d=i(b);_[a]=_[a]||[],_[a].push({node:d,callback:c}),O(b).on("$destroy",function(){var e=V.get(d);e||fa.off(a,b,c)})},off:function(a,c,d){if(1!==arguments.length||b.isString(arguments[0])){var e=_[a];e&&(_[a]=1===arguments.length?null:E(e,c,d))}else{c=arguments[0];for(var f in _)_[f]=E(_[f],c)}},pin:function(a,b){c(W(a),"element","not an element"),c(W(b),"parentElement","not an element"),a.data(Da,b)},push:function(a,b,c,d){return c=c||{},c.domOperation=d,G(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!Z;else{var d=W(a);if(d){var e=s(a),f=Y.get(e);1===c?b=!f:Y.put(e,!b)}else b=Z=!!a}return b}};return fa}]}],Fa=["$animateProvider",function(a){function b(a,b){a.data(h,b)}function c(a){a.removeData(h)}function e(a){return a.data(h)}var f="ng-animate-ref",g=this.drivers=[],h="$$animationRunner";this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,h,i,j,k,o){function p(a){function b(a){if(a.processed)return a;a.processed=!0;var c=a.domNode,d=c.parentNode;f.put(c,a);for(var g;d;){if(g=f.get(d)){g.processed||(g=b(g));break}d=d.parentNode}return(g||e).children.push(a),a}function c(a){var b,c=[],d=[];for(b=0;b<a.children.length;b++)d.push(a.children[b]);var e=d.length,f=0,g=[];for(b=0;b<d.length;b++){var h=d[b];0>=e&&(e=f,f=0,c.push(g),g=[]),g.push(h.fn),h.children.forEach(function(a){f++,d.push(a)}),e--}return g.length&&c.push(g),c}var d,e={children:[]},f=new k;for(d=0;d<a.length;d++){var g=a[d];f.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return c(e)}var q=[],r=l(a);return function(k,l,t){function u(a){var b="["+f+"]",c=a.hasAttribute(f)?[a]:a.querySelectorAll(b),d=[];return P(c,function(a){var b=a.getAttribute(f);b&&b.length&&d.push(a)}),d}function v(a){var b=[],c={};P(a,function(a,d){var e=a.element,g=s(e),h=a.event,i=["enter","move"].indexOf(h)>=0,j=a.structural?u(g):[];if(j.length){var k=i?"to":"from";P(j,function(a){var b=a.getAttribute(f);c[b]=c[b]||{},c[b][k]={animationID:d,element:O(a)}})}else b.push(a)});var d={},e={};return P(c,function(c,f){var g=c.from,h=c.to;if(!g||!h){var i=g?g.animationID:h.animationID,j=i.toString();return void(d[j]||(d[j]=!0,b.push(a[i])))}var k=a[g.animationID],l=a[h.animationID],m=g.animationID.toString();if(!e[m]){var n=e[m]={structural:!0,beforeStart:function(){k.beforeStart(),l.beforeStart()},close:function(){k.close(),l.close()},classes:w(k.classes,l.classes),from:k,to:l,anchors:[]};n.classes.length?b.push(n):(b.push(k),b.push(l))}e[m].anchors.push({out:g.element,"in":h.element})}),b}function w(a,b){a=a.split(" "),b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var f=0;f<b.length;f++)if(e===b[f]){c.push(e);break}}return c.join(" ")}function x(a){for(var b=g.length-1;b>=0;b--){var c=g[b];if(i.has(c)){var d=i.get(c),e=d(a);if(e)return e}}}function y(){k.addClass(ba),F&&a.addClass(k,F),G&&(a.removeClass(k,G),G=null)}function z(a,b){function c(a){e(a).setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function A(){var a=e(k);!a||"leave"===l&&t.$$domOperationFired||a.end()}function B(b){k.off("$destroy",A),c(k),r(k,t),n(k,t),t.domOperation(),F&&a.removeClass(k,F),k.removeClass(ba),D.complete(!b)}t=m(t);var C=["enter","move","leave"].indexOf(l)>=0,D=new j({end:function(){B()},cancel:function(){B(!0)}});if(!g.length)return B(),D;b(k,D);var E=d(k.attr("class"),d(t.addClass,t.removeClass)),F=t.tempClasses;F&&(E+=" "+F,t.tempClasses=null);var G;return C&&(G="ng-"+l+aa,a.addClass(k,G)),q.push({element:k,classes:E,event:l,structural:C,options:t,beforeStart:y,close:B}),k.on("$destroy",A),q.length>1?D:(h.$$postDigest(function(){var a=[];P(q,function(b){e(b.element)?a.push(b):b.close()}),q.length=0;var b=v(a),c=[];P(b,function(a){c.push({domNode:s(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close,d=a.anchors?a.from.element||a.to.element:a.element;if(e(d)){var f=x(a);f&&(b=f.start)}if(b){var g=b();g.done(function(a){c(!a)}),z(a,g)}else c()}})}),o(p(c))}),D)}}]}],Ga=["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,c,d,e,f){var g,h;b.$watchCollection(d.ngAnimateSwap||d["for"],function(d){g&&a.leave(g),h&&(h.$destroy(),h=null),(d||0===d)&&(h=b.$new(),f(h,function(b){g=b,a.enter(b,null,c)}))})}}}];b.module("ngAnimate",[]).directive("ngAnimateSwap",Ga).directive("ngAnimateChildren",ra).factory("$$rAFScheduler",qa).provider("$$animateQueue",Ea).provider("$$animation",Fa).provider("$animateCss",ya).provider("$$animateCssDriver",za).provider("$$animateJs",Aa).provider("$$animateJsDriver",Ba)}(window,window.angular);