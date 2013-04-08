(function(){var e,t,i=Function.prototype.call,n=Array.prototype,a=Object.prototype,r=n.slice;if(Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var i=r.call(arguments,1),n=function(){if(this instanceof n){var a=function(){};a.prototype=t.prototype;var o=new a,s=t.apply(o,i.concat(r.call(arguments)));return null!==s&&Object(s)===s?s:o}return t.apply(e,i.concat(r.call(arguments)))};return n}),t=i.bind(a.toString),e=i.bind(a.hasOwnProperty),Array.isArray||(Array.isArray=function(e){return"[object Array]"==t(e)}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var i=y(this),n=arguments[1],a=0,r=i.length>>>0;if("[object Function]"!=t(e))throw new TypeError;for(;r>a;)a in i&&e.call(n,i[a],a,i),a++}),Array.prototype.map||(Array.prototype.map=function(e){var i=y(this),n=i.length>>>0,a=Array(n),r=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var o=0;n>o;o++)o in i&&(a[o]=e.call(r,i[o],o,i));return a}),Array.prototype.filter||(Array.prototype.filter=function(e){var i=y(this),n=i.length>>>0,a=[],r=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var o=0;n>o;o++)o in i&&e.call(r,i[o],o,i)&&a.push(i[o]);return a}),Array.prototype.every||(Array.prototype.every=function(e){var i=y(this),n=i.length>>>0,a=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var r=0;n>r;r++)if(r in i&&!e.call(a,i[r],r,i))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(e){var i=y(this),n=i.length>>>0,a=arguments[1];if("[object Function]"!=t(e))throw new TypeError;for(var r=0;n>r;r++)if(r in i&&e.call(a,i[r],r,i))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var i=y(this),n=i.length>>>0;if("[object Function]"!=t(e))throw new TypeError;if(!n&&1==arguments.length)throw new TypeError;var a,r=0;if(arguments.length>=2)a=arguments[1];else for(;;){if(r in i){a=i[r++];break}if(++r>=n)throw new TypeError}for(;n>r;r++)r in i&&(a=e.call(void 0,a,i[r],r,i));return a}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e){var i=y(this),n=i.length>>>0;if("[object Function]"!=t(e))throw new TypeError;if(!n&&1==arguments.length)throw new TypeError;var a,r=n-1;if(arguments.length>=2)a=arguments[1];else for(;;){if(r in i){a=i[r--];break}if(0>--r)throw new TypeError}do r in this&&(a=e.call(void 0,a,i[r],r,i));while(r--);return a}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=y(this),i=t.length>>>0;if(!i)return-1;var n=0;for(arguments.length>1&&(n=v(arguments[1])),n=n>=0?n:i-Math.abs(n);i>n;n++)if(n in t&&t[n]===e)return n;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e){var t=y(this),i=t.length>>>0;if(!i)return-1;var n=i-1;for(arguments.length>1&&(n=v(arguments[1])),n=n>=0?n:i-Math.abs(n);n>=0;n--)if(n in t&&e===t[n])return n;return-1}),2!=[1,2].splice(0).length){var o=Array.prototype.splice;Array.prototype.splice=function(e,t){return arguments.length?o.apply(this,[e===void 0?0:e,t===void 0?this.length-e:t].concat(r.call(arguments,2))):[]}}if(!Object.keys){var s=!0,u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=u.length;for(var c in{toString:null})s=!1;Object.keys=function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var i=[];for(var n in t)e(t,n)&&i.push(n);if(s)for(var a=0,r=l;r>a;a++){var o=u[a];e(t,o)&&i.push(o)}return i}}Date.prototype.toISOString||(Date.prototype.toISOString=function(){var e,t,i;if(!isFinite(this))throw new RangeError;for(e=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],t=e.length;t--;)i=e[t],10>i&&(e[t]="0"+i);return e.slice(0,3).join("-")+"T"+e.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}),Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()});var p="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||p.trim()){p="["+p+"]";var d=RegExp("^"+p+p+"*"),h=RegExp(p+p+"*$");String.prototype.trim=function(){return(this+"").replace(d,"").replace(h,"")}}if("0".split(void 0,0).length){var f=String.prototype.split;String.prototype.split=function(e,t){return e===void 0&&0===t?[]:f.apply(this,arguments)}}if("".substr&&"b"!=="0b".substr(-1)){var m=String.prototype.substr;String.prototype.substr=function(e,t){return m.call(this,0>e?0>(e=this.length+e)?0:e:e,t)}}var v=function(e){return e=+e,e!==e?e=-1:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},g="a"!="a"[0],y=function(e){if(null==e)throw new TypeError;return g&&"string"==typeof e&&e?e.split(""):Object(e)}})(),function(e,t){var i="defineProperty",n=!!(Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor);if(n&&Object[i]&&Object.prototype.__defineGetter__&&function(){try{var e=document.createElement("foo");Object[i](e,"bar",{get:function(){return!0}}),n=!!e.bar}catch(t){n=!1}e=null}(),Modernizr.objectAccessor=!!(n||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__),Modernizr.advancedObjectProperties=n,!(n&&Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor&&Object.defineProperty)){var a=Function.prototype.call,r=Object.prototype,o=a.bind(r.hasOwnProperty);t.objectCreate=function(e,i,n,a){var r,o=function(){};return o.prototype=e,r=new o,a||"__proto__"in r||Modernizr.objectAccessor||(r.__proto__=e),i&&t.defineProperties(r,i),n&&(r.options=jQuery.extend(!0,{},r.options||{},n),n=r.options),r._create&&jQuery.isFunction(r._create)&&r._create(n),r},t.defineProperties=function(e,i){for(var n in i)o(i,n)&&t.defineProperty(e,n,i[n]);return e},t.defineProperty=function(e,t,i){return"object"!=typeof i||null===i?e:o(i,"value")?(e[t]=i.value,e):(e.__defineGetter__&&("function"==typeof i.get&&e.__defineGetter__(t,i.get),"function"==typeof i.set&&e.__defineSetter__(t,i.set)),e)},t.getPrototypeOf=function(e){return Object.getPrototypeOf&&Object.getPrototypeOf(e)||e.__proto__||e.constructor&&e.constructor.prototype},t.getOwnPropertyDescriptor=function(e,t){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var i;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return i=Object.getOwnPropertyDescriptor(e,t)}catch(n){}i={configurable:!0,enumerable:!0,writable:!0,value:void 0};var a=e.__lookupGetter__&&e.__lookupGetter__(t),r=e.__lookupSetter__&&e.__lookupSetter__(t);if(!a&&!r){if(!o(e,t))return;return i.value=e[t],i}return delete i.writable,delete i.value,i.get=i.set=void 0,a&&(i.get=a),r&&(i.set=r),i}}}(jQuery,jQuery.webshims),jQuery.webshims.register("dom-extend",function(e,t,i,n,a){"use strict";t.assumeARIA=Modernizr.localstorage||Modernizr.video||Modernizr.boxsizing,(""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims.");var r=t.modules,o=/\s*,\s*/,s={},u={},l={},c={},p={},d=e.fn.val,h=function(t,i,n,a,r){return r?d.call(e(t)):d.call(e(t),n)};e.fn.val=function(t){var i=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return i&&1===i.nodeType?e.prop(i,"value",t,"val",!0):d.call(this);if(e.isArray(t))return d.apply(this,arguments);var n=e.isFunction(t);return this.each(function(r){if(i=this,1===i.nodeType)if(n){var o=t.call(i,r,e.prop(i,"value",a,"val",!0));null==o&&(o=""),e.prop(i,"value",o,"val")}else e.prop(i,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)};var f="_webshimsLib"+Math.round(1e3*Math.random()),m=function(t,i,n){if(t=t.jquery?t[0]:t,!t)return n||{};var r=e.data(t,f);return n!==a&&(r||(r=e.data(t,f,{})),i&&(r[i]=n)),i?r&&r[i]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){return this.map(function(){var e=m(this,"shadowData");return e&&e[t.prop]||this})}}),e.Tween.propHooks._default&&e.extend(e.Tween.propHooks._default,{get:function(t){var i;return null==t.elem[t.prop]&&!u[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(i=jQuery.css(t.elem,t.prop,""),i&&"auto"!==i?i:0):u[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):u[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}}),["removeAttr","prop","attr"].forEach(function(i){s[i]=e[i],e[i]=function(t,n,r,o,c){var d="val"==o,f=d?h:s[i];if(!t||!u[n]||1!==t.nodeType||!d&&o&&"attr"==i&&e.attrFn[n])return f(t,n,r,o,c);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=l[y],w="attr"!=i||r!==!1&&null!==r?i:"removeAttr";if(b||(b=l["*"]),b&&(b=b[n]),b&&(m=b[w]),m){if("value"==n&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(r===a)return m.get?m.get.call(t):m.value;m.set&&("attr"==i&&r===!0&&(r=n),g=m.set.call(t,r)),"value"==n&&(m.isVal=v)}else g=f(t,n,r,o,c);if((r!==a||"removeAttr"===w)&&p[y]&&p[y][n]){var T;T="removeAttr"==w?!1:"prop"==w?!!r:!0,p[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==i)||"attr"==e.only&&"prop"!=i)&&e.call(t,r,T,d?"val":w,i)})}return g},c[i]=function(e,n,r){l[e]||(l[e]={}),l[e][n]||(l[e][n]={});var o=l[e][n][i],u=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==i&&"value"==n?function(e){var t=this;return r.isVal?h(t,n,e,!1,0===arguments.length):s[i](t,n,e)}:"prop"==i&&"value"==e&&r.value.apply?function(){var e=s[i](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return s[i](this,n,e)}};l[e][n][i]=r,r.value===a&&(r.set||(r.set=r.writeable?u("set",r,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),r.get||(r.get=u("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=u(e,o))})}});var v=function(){var e=t.getPrototypeOf(n.createElement("foobar")),i=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(r,o,s){var u,l;if(!(a&&(u=n.createElement(r))&&(l=t.getPrototypeOf(u))&&e!==l)||u[o]&&i.call(u,o))s._supvalue=function(){var e=m(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},g.extendValue(r,o,s.value);else{var c=u[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},l[o]=s.value}s.value._supvalue=s._supvalue}}(),g=function(){var i={};t.addReady(function(n,r){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(o[t]=o[t].add(r)))};e.each(i,function(e,i){return s(e),i&&i.forEach?(i.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+i),a)}),o=null});var r,o=e([]),s=function(t,a){i[t]?i[t].push(a):i[t]=[a],e.isDOMReady&&(r||e(n.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(n.getElementsByTagName(t))),r||o},flushTmpCache:function(){r=null},content:function(t,i){s(t,function(){var t=e.attr(this,i);null!=t&&e.attr(this,i,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,i,n){s(t,function(){e(this).each(function(){var e=m(this,"propValue",{});e[i]=this[i],this[i]=n})})}}}(),y=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(i){i=e(i);var n=i.prop("id");return n||(t++,n="ID-"+t,i.eq(0).prop("id",n)),n}}(),implement:function(e,i){var n=m(e,"implemented")||m(e,"implemented",{});return n[i]?(t.info(i+" already implemented for element #"+e.id),!1):(n[i]=!0,!0)},extendUNDEFProp:function(t,i){e.each(i,function(e,i){e in t||(t[e]=i)})},createPropDefault:y,data:m,moveToFirstEvent:function(t,i,n){var a,r=(e._data(t,"events")||{})[i];r&&r.length>1&&(a=r.pop(),n||(n="bind"),"bind"==n&&r.delegateCount?r.splice(r.delegateCount,0,a):r.unshift(a)),t=null},addShadowDom:function(){var a,r,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(i).width(),u=e(i).width();if(u==r&&a==o)return;r=u,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var i=n.body,a=n.documentElement;s[t]=function(){return Math.max(i["scroll"+e],a["scroll"+e],i["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(i).bind("resize",this.handler),function(){var t,i=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),i.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(i,n,a){a=a||{},i.jquery&&(i=i[0]),n.jquery&&(n=n[0]);var r=e.data(i,f)||e.data(i,f,{}),o=e.data(n,f)||e.data(n,f,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,f)||e.data(a.shadowFocusElement,f,s)):a.shadowFocusElement=n,r.hasShadow=n,s.nativeElement=o.nativeElement=i,s.shadowData=o.shadowData=r.shadowData={nativeElement:i,shadowElement:n,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){m(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=a.data),a=null,t.docObserve()}}(),propTypes:{standard:function(e){y(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){y(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(i,n){y(i),i.prop||(i.prop={set:function(e){i.attr.set.call(this,e)},get:function(){var i,a=this.getAttribute(n);if(null==a)return"";if(t.setAttribute("href",a+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(r){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}})}}(),enumarated:function(e){y(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(i,n){"string"==typeof n&&(n=n.split(o)),n.forEach(function(n){t.defineNodeNamesProperty(i,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(i,n,a){return u[n]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,n),["prop","attr","removeAttr"].forEach(function(r){var o=a[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),c[r](i,n,o),"*"!=i&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&v(i,n,o),a[r]=o)}),a.initAttr&&g.content(i,n),a},defineNodeNameProperties:function(e,i,n,a){for(var r in i)!a&&i[r].initAttr&&g.createTmpCache(e),n&&(i[r][n]||(i[r][n]={},["value","set","get"].forEach(function(e){e in i[r]&&(i[r][n][e]=i[r][e],delete i[r][e])}))),i[r]=t.defineNodeNameProperty(e,r,i[r]);return a||g.flushTmpCache(),i},createElement:function(i,n,a){var r;return e.isFunction(n)&&(n={after:n}),g.createTmpCache(i),n.before&&g.createElement(i,n.before),a&&(r=t.defineNodeNameProperties(i,a,!1,!0)),n.after&&g.createElement(i,n.after),g.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,i,n,a){"string"==typeof t&&(t=t.split(o)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof i&&(i=i.split(o)),n.initAttr&&g.createTmpCache(e),i.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),n.set&&(a&&(n.set.only=a),p[e][t].push(n.set)),n.initAttr&&g.content(e,t)}),g.flushTmpCache()})},defineNodeNamesBooleanProperty:function(i,n,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(i,n,{attr:{set:function(e){this.setAttribute(n,e),r.set&&r.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?a:n}},removeAttr:{value:function(){this.removeAttribute(n),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,i){if(e.nodeName){var n;return i===a?(n=e.attributes[t]||{},i=n.specified?n.value:null,null==i?a:i):("boolean"==typeof i?i?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,i),a)}},activeLang:function(){var i,n,a=[],o={},s=/:\/\/|^\.*\//,u=function(i,n,a){var r;return n&&a&&-1!==e.inArray(n,a.availabeLangs||[])?(i.loading=!0,r=a.langSrc,s.test(r)||(r=t.cfg.basePath+r),t.loader.loadScript(r+n+".js",function(){i.langObj[n]?(i.loading=!1,c(i,!0)):e(function(){i.langObj[n]&&c(i,!0),i.loading=!1})}),!0):!1},l=function(e){o[e]&&o[e].forEach(function(e){e.callback(i,n,"")})},c=function(e,t){if(e.activeLang!=i&&e.activeLang!==n){var a=r[e.module].options;e.langObj[i]||n&&e.langObj[n]?(e.activeLang=i,e.callback(e.langObj[i]||e.langObj[n],i),l(e.module)):t||u(e,i,a)||u(e,n,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],i),l(e.module))}},p=function(t){return"string"==typeof t&&t!==i?(i=t,n=i.split("-")[0],i==n&&(n=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(o[t.register]||(o[t.register]=[]),o[t.register].push(t),t.callback(i,n,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),i};return p}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,i){t[e]=function(e,n,a,r){"string"==typeof e&&(e=e.split(o));var s={};return e.forEach(function(e){s[e]=t[i](e,n,a,r)}),s}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var i=e.getAttribute("role");i||e.setAttribute("role",t)};e.webshims.addReady(function(a,r){if(e.each(i,function(t,i){for(var o=e(t,a).add(r.filter(t)),s=0,u=o.length;u>s;s++)n(o[s],i)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),u=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!u)return;var l=s[u-1];e(l).closest("section, article")[0]||n(l,"contentinfo")}})}}(jQuery,document),function(){"JSON"in window&&JSON.stringify&&JSON.parse||(this.JSON||(this.JSON={}),function(){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var i,n,a,r,o,s=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?u+"":"null";case"boolean":case"null":return u+"";case"object":if(!u)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(u)){for(r=u.length,i=0;r>i;i+=1)o[i]=str(i,u)||"null";return a=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+s+"]":"["+o.join(",")+"]",gap=s,a}if(rep&&"object"==typeof rep)for(r=rep.length,i=0;r>i;i+=1)n=rep[i],"string"==typeof n&&(a=str(n,u),a&&o.push(quote(n)+(gap?": ":":")+a));else for(n in u)Object.hasOwnProperty.call(u,n)&&(a=str(n,u),a&&o.push(quote(n)+(gap?": ":":")+a));return a=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+s+"}":"{"+o.join(",")+"}",gap=s,a}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,i){var n;if(gap="",indent="","number"==typeof i)for(n=0;i>n;n+=1)indent+=" ";else"string"==typeof i&&(indent=i);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var i,n,a=e[t];if(a&&"object"==typeof a)for(i in a)Object.hasOwnProperty.call(a,i)&&(n=walk(a,i),void 0!==n?a[i]=n:delete a[i]);return reviver.call(e,t,a)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}())}(),function(){var e=jQuery;if("localStorage"in window&&"sessionStorage"in window)return e.webshims.isReady("json-storage",!0),void 0;var t,i=function(t){t&&t.indexOf&&-1!=t.indexOf(";")&&setTimeout(function(){e.webshims.warn("Bad key for localStorage: ; in localStorage. name was: "+t)},0)},n=!1;e.each(["opener","top","parent"],function(e,i){try{if(t=window[i],t&&"name"in t)return t.name,!1;t=!1}catch(n){t=!1}}),t||(t=window,n=!0);var a=function(e){if(!n)try{window.name=e}catch(i){}try{t.name=e}catch(i){t=window,n=!0}},r=function(){var e;if(!n)try{e=window.name}catch(i){}if(!e)try{e=t.name}catch(i){t=window,n=!0}return e},o=function(e){function t(e,t,i){var n,a;i?(n=new Date,n.setTime(n.getTime()+1e3*60*60*24*i),a="; expires="+n.toGMTString()):a="",document.cookie=e+"="+t+a+"; path=/"}function n(e){var t,i,n=e+"=",a=document.cookie.split(";");for(t=0;a.length>t;t++){for(i=a[t];" "==i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(n))return i.substring(n.length,i.length)}return null}function o(i){i=JSON.stringify(i),"session"==e?a(i):t("localStorage",i,365)}function s(){"session"==e?a(""):t("localStorage","",365)}function u(){var t;if(t="session"==e?r():n("localStorage"))try{t=JSON.parse(t)}catch(i){t={}}return t||{}}var l=u();return{clear:function(){l={},s()},getItem:function(e){return e in l?l[e]:null},key:function(e){var t=0;for(var i in l){if(t==e)return i;t++}return null},removeItem:function(e){delete l[e],o(l)},setItem:function(e,t){i(e),l[e]=t+"",o(l)}}};"sessionStorage"in window||(window.sessionStorage=new o("session")),function(){var t,n,a,r="(empty string)+1287520303738",s=function(n){return clearTimeout(t),window.localStorage&&("swf"!=n||a&&a.key)?(e.webshims.isReady("json-storage",!0),void 0):("swf"===n&&(a=document.getElementById("swflocalstorageshim"),a&&void 0!==a.GetVariable||(a=document.swflocalstorageshim),a&&void 0!==a.GetVariable||(a=window.localstorageshim),a&&a.GetVariable!==void 0&&(window.localStorage={},window.localStorage.clear=function(){a.clear&&a.clear()},window.localStorage.key=function(e){a.key&&a.key(e)},window.localStorage.removeItem=function(e){a.removeItem&&a.removeItem(e)},window.localStorage.setItem=function(e,t){i(e),t+="",t||(t=r),a.setItem&&a.setItem(e,t)},window.localStorage.getItem=function(e){if(!a.getItem)return null;var t=a.getItem(e,t);return t==r&&(t=""),t},e.webshims.log("flash-localStorage was implemented"))),"localStorage"in window||(window.localStorage=new o("local"),e.webshims.warn("implement cookie-localStorage")),e.webshims.isReady("json-storage",!0),void 0)},u=e.webshims.cfg["json-storage"];e.webshims.swfLocalStorage={show:function(){u.exceededMessage&&e("#swflocalstorageshim-wrapper").prepend('<div class="polyfill-exceeded-message">'+u.exceededMessage+"</div>"),e("#swflocalstorageshim-wrapper").css({top:e(window).scrollTop()+20,left:e(window).width()/2-e("#swflocalstorageshim-wrapper").outerWidth()/2})},hide:function(t){if(e("#swflocalstorageshim-wrapper").css({top:"",left:""}).find("div.polyfill-exceeded-message").remove(),!t){var i=Error("DOMException: QUOTA_EXCEEDED_ERR");throw i.code=22,i.name="DOMException",i}},isReady:s},e.webshims.ready("DOM swfmini",function(){n||"localStorage"in window&&document.getElementById("swflocalstorageshim")||(n=!0,window.swfmini&&swfmini.hasFlashPlayerVersion("8.0.0")?(e("body").append('<div id="swflocalstorageshim-wrapper"><div id="swflocalstorageshim" /></div>'),swfmini.embedSWF(e.webshims.cfg.basePath+"swf/localStorage.swf"+(e.webshims.cfg.addCacheBuster||""),"swflocalstorageshim","295","198","8.0.0","",{allowscriptaccess:"always"},{name:"swflocalstorageshim"},function(e){e.success||window.localStorage||s()}),clearTimeout(t),t=setTimeout(function(){"localStorage"in window||e.webshims.warn("Add your development-directory to the local-trusted security sandbox: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"),s()},0===location.protocol.indexOf("file")?500:9999)):s())})}()}();