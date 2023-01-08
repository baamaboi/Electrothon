(this.webpackJsonpelectrothon=this.webpackJsonpelectrothon||[]).push([[5],{90:function(t,e,r){"use strict";(function(t){var n=r(91),o=r(92),i=setTimeout;function s(t){return Boolean(t&&"undefined"!==typeof t.length)}function a(){}function u(t){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(t,this)}function c(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,u._immediateFn((function(){var r=1===t._state?e.onFulfilled:e.onRejected;if(null!==r){var n;try{n=r(t._value)}catch(o){return void h(e.promise,o)}f(e.promise,n)}else(1===t._state?f:h)(e.promise,t._value)}))):t._deferreds.push(e)}function f(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===typeof e||"function"===typeof e)){var r=e.then;if(e instanceof u)return t._state=3,t._value=e,void l(t);if("function"===typeof r)return void p((n=r,o=e,function(){n.apply(o,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(i){h(t,i)}var n,o}function h(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&u._immediateFn((function(){t._handled||u._unhandledRejectionFn(t._value)}));for(var e=0,r=t._deferreds.length;e<r;e++)c(t,t._deferreds[e]);t._deferreds=null}function d(t,e,r){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=r}function p(t,e){var r=!1;try{t((function(t){r||(r=!0,f(e,t))}),(function(t){r||(r=!0,h(e,t))}))}catch(n){if(r)return;r=!0,h(e,n)}}u.prototype.catch=function(t){return this.then(null,t)},u.prototype.then=function(t,e){var r=new this.constructor(a);return c(this,new d(t,e,r)),r},u.prototype.finally=n.a,u.all=function(t){return new u((function(e,r){if(!s(t))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(t);if(0===n.length)return e([]);var o=n.length;function i(t,s){try{if(s&&("object"===typeof s||"function"===typeof s)){var a=s.then;if("function"===typeof a)return void a.call(s,(function(e){i(t,e)}),r)}n[t]=s,0===--o&&e(n)}catch(u){r(u)}}for(var a=0;a<n.length;a++)i(a,n[a])}))},u.allSettled=o.a,u.resolve=function(t){return t&&"object"===typeof t&&t.constructor===u?t:new u((function(e){e(t)}))},u.reject=function(t){return new u((function(e,r){r(t)}))},u.race=function(t){return new u((function(e,r){if(!s(t))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=t.length;n<o;n++)u.resolve(t[n]).then(e,r)}))},u._immediateFn="function"===typeof t&&function(e){t(e)}||function(t){i(t,0)},u._unhandledRejectionFn=function(t){"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=u}).call(this,r(42).setImmediate)},91:function(t,e,r){"use strict";e.a=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){return e.reject(r)}))}))}},92:function(t,e,r){"use strict";e.a=function(t){return new this((function(e,r){if(!t||"undefined"===typeof t.length)return r(new TypeError(typeof t+" "+t+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(t);if(0===n.length)return e([]);var o=n.length;function i(t,r){if(r&&("object"===typeof r||"function"===typeof r)){var s=r.then;if("function"===typeof s)return void s.call(r,(function(e){i(t,e)}),(function(r){n[t]={status:"rejected",reason:r},0===--o&&e(n)}))}n[t]={status:"fulfilled",value:r},0===--o&&e(n)}for(var s=0;s<n.length;s++)i(s,n[s])}))}},93:function(t,e,r){(function(n){var o;!function(n){"use strict";function i(t){var e=t&&t.Promise||n.Promise,r=t&&t.XMLHttpRequest||n.XMLHttpRequest,o=n;return function(){var t=Object.create(o,{fetch:{value:void 0,writable:!0}});return function(t){if(!t.fetch){var n="URLSearchParams"in t,o="Symbol"in t&&"iterator"in Symbol,i="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in t,a="ArrayBuffer"in t;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=function(t){return t&&DataView.prototype.isPrototypeOf(t)},f=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};b.prototype.append=function(t,e){t=d(t),e=p(e);var r=this.map[t];this.map[t]=r?r+","+e:e},b.prototype.delete=function(t){delete this.map[d(t)]},b.prototype.get=function(t){return t=d(t),this.has(t)?this.map[t]:null},b.prototype.has=function(t){return this.map.hasOwnProperty(d(t))},b.prototype.set=function(t,e){this.map[d(t)]=p(e)},b.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},b.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),y(t)},b.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),y(t)},b.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),y(t)},o&&(b.prototype[Symbol.iterator]=b.prototype.entries);var h=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];A.prototype.clone=function(){return new A(this,{body:this._bodyInit})},_.call(A.prototype),_.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new b(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var l=[301,302,303,307,308];E.redirect=function(t,e){if(-1===l.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})},t.Headers=b,t.Request=A,t.Response=E,t.fetch=function(t,n){return new e((function(e,o){var s=new A(t,n),a=new r;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:j(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var r="response"in a?a.response:a.responseText;e(new E(r,t))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&i&&(a.responseType="blob"),s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),a.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))},t.fetch.polyfill=!0}function d(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function p(t){return"string"!==typeof t&&(t=String(t)),t}function y(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function b(t){this.map={},t instanceof b?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function m(t){if(t.bodyUsed)return e.reject(new TypeError("Already read"));t.bodyUsed=!0}function v(t){return new e((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function w(t){var e=new FileReader,r=v(e);return e.readAsArrayBuffer(t),r}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(i&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(s&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(n&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(a&&i&&c(t))this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!a||!ArrayBuffer.prototype.isPrototypeOf(t)&&!f(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=g(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=m(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?m(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(w)}),this.text=function(){var t=m(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=v(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}function A(t,e){var r=(e=e||{}).body;if(t instanceof A){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new b(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new b(e.headers)),this.method=function(t){var e=t.toUpperCase();return h.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function T(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function j(t){var e=new b;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e}function E(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new b(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!==typeof t?t:this),{fetch:t.fetch,Headers:t.Headers,Request:t.Request,Response:t.Response}}()}void 0===(o=function(){return i}.call(e,r,e,t))||(t.exports=o)}("undefined"!==typeof self?self:"undefined"!==typeof n?n:this)}).call(this,r(9))},94:function(t,e,r){"use strict";r.d(e,"a",(function(){return S}));var n=r(1),o=r.n(n),i=r(90),s=r(93),a=r.n(s);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t}var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var d,p=function(t){return function(t){for(var e,r,n,o,i="",s=0,a=(t=String(t)).length%3;s<t.length;){if((r=t.charCodeAt(s++))>255||(n=t.charCodeAt(s++))>255||(o=t.charCodeAt(s++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=h.charAt((e=r<<16|n<<8|o)>>18&63)+h.charAt(e>>12&63)+h.charAt(e>>6&63)+h.charAt(63&e)}return a?i.slice(0,a-3)+"===".substring(a):i}(JSON.stringify(t))},y=function(t){var e="@formspree/core@".concat("2.6.2");return t?"".concat(t," ").concat(e):e},b=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!l.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(3&t.length));for(var e,r,n,o="",i=0;i<t.length;)e=h.indexOf(t.charAt(i++))<<18|h.indexOf(t.charAt(i++))<<12|(r=h.indexOf(t.charAt(i++)))<<6|(n=h.indexOf(t.charAt(i++))),o+=64===r?String.fromCharCode(e>>16&255):64===n?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,255&e);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},m=function(){function t(){u(this,t),this.loadedAt=1*new Date,this.webdriver=b()}return f(t,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),t}(),v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(this,t),this.project=e.project,"undefined"!==typeof window&&this.startBrowserSession()}return f(t,[{key:"startBrowserSession",value:function(){this.session||(this.session=new m)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.endpoint||"https://formspree.io",o=r.fetchImpl||a()({Promise:i.a}).fetch,s=this.project?"".concat(n,"/p/").concat(this.project,"/f/").concat(t):"".concat(n,"/f/").concat(t),u=function(t){return t instanceof FormData?t:JSON.stringify(t)},c={Accept:"application/json","Formspree-Client":y(r.clientName)};this.session&&(c["Formspree-Session-Data"]=p(this.session.data())),e instanceof FormData||(c["Content-Type"]="application/json");var f={method:"POST",mode:"cors",body:u(e),headers:c};return o(s,f).then((function(t){return t.json().then((function(e){return{body:e,response:t}}))}))}}]),t}(),w=function(t){return new v(t)};function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function A(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=o.a.createContext({client:void 0});T.displayName="Formspree";function j(){return Object(n.useContext)(T).client||(d||(d=w()),d)}var E="2.2.4";function F(t){return void 0!==t.preventDefault}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(n.useState)(!1),o=A(r,2),i=o[0],s=o[1],a=Object(n.useState)(!1),u=A(a,2),c=u[0],f=u[1],h=Object(n.useState)([]),l=A(h,2),d=l[0],p=l[1],y=j(),b=e.client||y;if(!b)throw new Error("You must provide a Formspree client");if(!t)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');var m=!!e.debug,v=e.data,w=function(){s(!1),f(!1),p([])},T=function(r){var n=F(r)?function(t){t.preventDefault();var e=t.target;if("FORM"!=e.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(e)}(r):r,o=function(t,e){n instanceof FormData?n.append(t,e):n=Object.assign(n,_({},t,e))};if("object"===g(v))for(var i in v)"function"===typeof v[i]?o(i,v[i].call(null)):o(i,v[i]);return s(!0),b.submitForm(t,n,{endpoint:e.endpoint,clientName:"@formspree/react@".concat(E)}).then((function(t){var e,r=t.response.status;return 200===r?(m&&console.log("Form submitted",t),f(!0),p([])):r>=400&&r<500?((e=t.body).errors&&p(e.errors),m&&console.log("Validation error",t),f(!1)):(m&&console.log("Unexpected error",t),f(!1)),t})).catch((function(t){throw m&&console.log("Unexpected error",t),f(!1),t})).finally((function(){s(!1)}))};return[{submitting:i,succeeded:c,errors:d},T,w]}}}]);
//# sourceMappingURL=5.dd3b8a88.chunk.js.map