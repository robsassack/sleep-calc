(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);"]),i.push([e.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: "Roboto", Helvetica, Arial, sans-serif;\r\n  font-weight: 400;\r\n}\r\n\r\nbody {\r\n  background-color: #2E3047;\r\n  color: #979ddd;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5em;\r\n}\r\n\r\ninput {\r\n  background-color: #595d86;\r\n}\r\n\r\n#minutes {\r\n  width: 50px;\r\n  color: #cdd0f1;\r\n}\r\n\r\n#sleep-at-input, #wake-at-input {\r\n  color: #cdd0f1;\r\n}\r\n\r\nbutton {\r\n  background-color: #595d86;\r\n  border: 1px solid #979ddd;\r\n  color: #cdd0f1;\r\n  padding: 2px 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\nlabel {\r\n  user-select: none;\r\n}\r\n\r\n.time-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n}\r\n\r\n.cycle {\r\n  outline: 2px solid #979ddd;\r\n  border-radius: 5px;\r\n  height: 80px;\r\n  width: 140px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 7px;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.cycle-time {\r\n  font-size: 1.75em;\r\n  font-weight: 500;\r\n  padding-bottom: 5px;\r\n  border-bottom: 1px solid #979ddd;\r\n}\r\n\r\n.cycle-num {\r\n  font-size: 1.2em;\r\n}\r\n\r\n.cycle-6 .cycle-time {\r\n  color: #91E5A0;\r\n}\r\n\r\n.cycle-5 .cycle-time {\r\n  color: #FFFFA2;\r\n}\r\n\r\n.cycle-4 .cycle-time {\r\n  color: #FFD7A2;\r\n}\r\n\r\n.cycle-3 .cycle-time {\r\n  color: #FFA2A2;\r\n}\r\n',""]);const u=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var s=e[u],c=r.base?s[0]+r.base:s[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var f=n(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var m=a(h,r);r.byIndex=u,t.splice(u,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var s=r(e,a),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),s=n.n(u),c=n(216),d=n.n(c),l=n(589),f=n.n(l),h=n(426),m={};function g(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function v(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function w(e){v(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function p(e,t){v(2,arguments);var n=w(e),r=g(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function y(e,t){v(2,arguments);var n=w(e),r=g(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var a=n.getDate(),o=new Date(n.getTime());o.setMonth(n.getMonth()+r+1,0);var i=o.getDate();return a>=i?o:(n.setFullYear(o.getFullYear(),o.getMonth(),a),n)}function b(e,t){if(v(2,arguments),!t||"object"!=typeof t)return new Date(NaN);var n=t.years?g(t.years):0,r=t.months?g(t.months):0,a=t.weeks?g(t.weeks):0,o=t.days?g(t.days):0,i=t.hours?g(t.hours):0,u=t.minutes?g(t.minutes):0,s=t.seconds?g(t.seconds):0,c=w(e),d=r||n?y(c,r+12*n):c,l=o||a?p(d,o+7*a):d,f=u+60*i,h=s+60*f,m=1e3*h,b=new Date(l.getTime()+m);return b}function T(e,t){v(2,arguments);var n=g(t);return p(e,-n)}function C(e,t){v(2,arguments);var n=g(t);return y(e,-n)}function M(e,t){if(v(2,arguments),!t||"object"!=typeof t)return new Date(NaN);var n=t.years?g(t.years):0,r=t.months?g(t.months):0,a=t.weeks?g(t.weeks):0,o=t.days?g(t.days):0,i=t.hours?g(t.hours):0,u=t.minutes?g(t.minutes):0,s=t.seconds?g(t.seconds):0,c=C(e,r+12*n),d=T(c,o+7*a),l=u+60*i,f=s+60*l,h=1e3*f,m=new Date(d.getTime()-h);return m}function x(e){return v(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function D(e){if(v(1,arguments),!x(e)&&"number"!=typeof e)return!1;var t=w(e);return!isNaN(Number(t))}function k(e,t){v(2,arguments);var n=w(e).getTime(),r=g(t);return new Date(n+r)}function S(e,t){v(2,arguments);var n=g(t);return k(e,-n)}m.styleTagTransform=f(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var P=864e5;function U(e){v(1,arguments);var t=1,n=w(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function E(e){v(1,arguments);var t=w(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=U(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=U(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function N(e){v(1,arguments);var t=E(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=U(n);return r}var W=6048e5,Y={};function q(){return Y}function O(e,t){var n,r,a,o,i,u,s,c;v(1,arguments);var d=q(),l=g(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:d.weekStartsOn)&&void 0!==r?r:null===(s=d.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=w(e),h=f.getUTCDay(),m=(h<l?7:0)+h-l;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function F(e,t){var n,r,a,o,i,u,s,c;v(1,arguments);var d=w(e),l=d.getUTCFullYear(),f=q(),h=g(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(s=f.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(l+1,0,h),m.setUTCHours(0,0,0,0);var p=O(m,t),y=new Date(0);y.setUTCFullYear(l,0,h),y.setUTCHours(0,0,0,0);var b=O(y,t);return d.getTime()>=p.getTime()?l+1:d.getTime()>=b.getTime()?l:l-1}function L(e,t){var n,r,a,o,i,u,s,c;v(1,arguments);var d=q(),l=g(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:d.firstWeekContainsDate)&&void 0!==r?r:null===(s=d.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),f=F(e,t),h=new Date(0);h.setUTCFullYear(f,0,l),h.setUTCHours(0,0,0,0);var m=O(h,t);return m}var j=6048e5;function H(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const A=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return H("yy"===t?r%100:r,t.length)},z=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):H(n+1,2)},Q=function(e,t){return H(e.getUTCDate(),t.length)},R=function(e,t){return H(e.getUTCHours()%12||12,t.length)},G=function(e,t){return H(e.getUTCHours(),t.length)},X=function(e,t){return H(e.getUTCMinutes(),t.length)},B=function(e,t){return H(e.getUTCSeconds(),t.length)},I=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return H(Math.floor(r*Math.pow(10,n-3)),t.length)};var J={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return A(e,t)},Y:function(e,t,n,r){var a=F(e,r),o=a>0?a:1-a;return"YY"===t?H(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):H(o,t.length)},R:function(e,t){return H(E(e),t.length)},u:function(e,t){return H(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return H(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return H(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return z(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return H(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){v(1,arguments);var n=w(e),r=O(n,t).getTime()-L(n,t).getTime();return Math.round(r/j)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):H(a,t.length)},I:function(e,t,n){var r=function(e){v(1,arguments);var t=w(e),n=U(t).getTime()-N(t).getTime();return Math.round(n/W)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):H(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):Q(e,t)},D:function(e,t,n){var r=function(e){v(1,arguments);var t=w(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/P)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):H(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return H(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return H(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return H(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return R(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):G(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):H(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):H(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):X(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):B(e,t)},S:function(e,t){return I(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return Z(a);case"XXXX":case"XX":return $(a);default:return $(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return Z(a);case"xxxx":case"xx":return $(a);default:return $(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+_(a,":");default:return"GMT"+$(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+_(a,":");default:return"GMT"+$(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return H(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return H((r._originalDate||e).getTime(),t.length)}};function _(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+H(o,2)}function Z(e,t){return e%60==0?(e>0?"-":"+")+H(Math.abs(e)/60,2):$(e,t)}function $(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+H(Math.floor(a/60),2)+n+H(a%60,2)}const V=J;var K=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},ee=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const te={p:ee,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return K(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",K(a,t)).replace("{{time}}",ee(o,t))}};function ne(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var re=["D","DD"],ae=["YY","YYYY"];function oe(e){return-1!==re.indexOf(e)}function ie(e){return-1!==ae.indexOf(e)}function ue(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var se={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function ce(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}const de={date:ce({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:ce({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:ce({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var le={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function fe(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const he={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:fe({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:fe({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:fe({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:fe({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:fe({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function me(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?ve(s,(function(e){return e.test(u)})):ge(s,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var d=t.slice(u.length);return{value:i,rest:d}}}function ge(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function ve(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var we,pe={ordinalNumber:(we={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(we.matchPattern);if(!n)return null;var r=n[0],a=e.match(we.parsePattern);if(!a)return null;var o=we.valueCallback?we.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;var i=e.slice(r.length);return{value:o,rest:i}}),era:me({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:me({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:me({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:me({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:me({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ye={code:"en-US",formatDistance:function(e,t,n){var r,a=se[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:de,formatRelative:function(e,t,n,r){return le[e]},localize:he,match:pe,options:{weekStartsOn:0,firstWeekContainsDate:1}};var be=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Te=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ce=/^'([^]*?)'?$/,Me=/''/g,xe=/[a-zA-Z]/;function De(e){var t=e.match(Ce);return t?t[1].replace(Me,"'"):e}const ke=document.querySelector(".sleep-now"),Se=document.querySelector(".wake-at"),Pe=document.querySelector(".sleep-at");let Ue="",Ee=new Date;function Ne(){return document.querySelector("#enable-time-to-sleep").checked?Number(document.querySelector("#minutes").value):0}function We(){let e=Ee;e="sleep"===Ue?function(e){let t=Ne();const n=b(e,{hours:9,minutes:t}),r=b(e,{hours:6,minutes:t});return t+=30,{"6 Cycles":n,"5 Cycles":b(e,{hours:7,minutes:t}),"4 Cycles":r,"3 Cycles":b(e,{hours:4,minutes:t})}}(Ee):function(e){let t=Ne();const n=M(e,{hours:9,minutes:t}),r=M(e,{hours:6,minutes:t});return t+=30,{"6 Cycles":n,"5 Cycles":M(e,{hours:7,minutes:t}),"4 Cycles":r,"3 Cycles":M(e,{hours:4,minutes:t})}}(Ee);const t=document.createElement("div");t.classList.add("time-list"),[6,5,4,3].forEach((n=>{const r=document.createElement("div");r.classList.add("cycle"),r.classList.add(`cycle-${n}`);const a=document.createElement("div");a.classList.add("cycle-time"),a.innerText=`${function(e,t,n){var r,a,o,i,u,s,c,d,l,f,h,m,p,y,b,T,C,M;v(2,arguments);var x=String(t),k=q(),P=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:k.locale)&&void 0!==r?r:ye,U=g(null!==(o=null!==(i=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==u?u:k.firstWeekContainsDate)&&void 0!==i?i:null===(l=k.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=g(null!==(h=null!==(m=null!==(p=null!==(y=null==n?void 0:n.weekStartsOn)&&void 0!==y?y:null==n||null===(b=n.locale)||void 0===b||null===(T=b.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==p?p:k.weekStartsOn)&&void 0!==m?m:null===(C=k.locale)||void 0===C||null===(M=C.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==h?h:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var N=w(e);if(!D(N))throw new RangeError("Invalid time value");var W=ne(N),Y=S(N,W),O={firstWeekContainsDate:U,weekStartsOn:E,locale:P,_originalDate:N};return x.match(Te).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,te[t])(e,P.formatLong):e})).join("").match(be).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return De(r);var o=V[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!ie(r)||ue(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!oe(r)||ue(r,t,String(e)),o(Y,r,P.localize,O);if(a.match(xe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}(e[`${n} Cycles`],"h:mm a")}`;const o=document.createElement("div");o.classList.add("cycle-num"),o.innerText=`${n} Cycles`,r.appendChild(a),r.appendChild(o),t.appendChild(r)})),function(e){const t=document.querySelector(".content");t.textContent="",t.appendChild(e)}(t)}ke.addEventListener("click",(()=>{Ue="sleep",Ee=new Date,We()})),Se.addEventListener("click",(()=>{Ue="wake";const e=document.querySelector("#wake-at-input").value;e&&(Ee=new Date,Ee.setHours(e.split(":")[0]),Ee.setMinutes(e.split(":")[1]),We())})),Pe.addEventListener("click",(()=>{Ue="sleep";const e=document.querySelector("#sleep-at-input").value;e&&(Ee=new Date,Ee.setHours(e.split(":")[0]),Ee.setMinutes(e.split(":")[1]),We())})),document.querySelector("#enable-time-to-sleep").addEventListener("change",(()=>{Ue&&We()})),document.querySelector("#minutes").addEventListener("keyup",(()=>{document.querySelector("#enable-time-to-sleep").checked&&Ue&&We()})),document.querySelector("#minutes").addEventListener("change",(()=>{document.querySelector("#enable-time-to-sleep").checked&&Ue&&We()}))})()})();