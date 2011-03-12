(function(b,l,m,s){m.createElement("datalist");var o=b.event.special,p=Modernizr.input,z=Modernizr.inputtypes,w=parseFloat(b.browser.version,10);(function(){var a=Modernizr.addTest,c=b('<form action="#"><input name="a" required /><select><option>y</option></select><input required id="date-input-test" type="date" /></form>');a("formvalidation",function(){return!!("checkValidity"in c[0])});a("datalist",function(){return!!(p.list&&l.HTMLDataListElement)});a("validationmessage",function(){if(!Modernizr.formvalidation)return false;
c.appendTo("head");return!!b("input",c).attr("validationMessage")});a("output",function(){return Modernizr.formvalidation&&"value"in m.createElement("output")});Modernizr.genericDOM=!!b("<video><div></div></video>")[0].innerHTML;Modernizr.requiredSelect=!!(Modernizr.formvalidation&&"required"in b("select",c)[0]);Modernizr.bugfreeformvalidation=Modernizr.formvalidation&&Modernizr.requiredSelect&&Modernizr.validationmessage&&(!b.browser.webkit||w>534.19);p.valueAsNumber=false;p.valueAsDate=false;if(Modernizr.formvalidation){a=
b("#date-input-test",c)[0];p.valueAsNumber="valueAsNumber"in a;p.valueAsDate="valueAsDate"in a;a=null}Modernizr.formvalidation&&c.remove();c=null;Modernizr.ES5base=!!(String.prototype.trim&&Date.now&&Date.prototype.toISOString);Modernizr.ES5extras=!!(Array.isArray&&Object.keys&&Object.create&&Function.prototype.bind&&Object.defineProperties);Modernizr.ES5base&&b.each(["filter","map","every","reduce","reduceRight","lastIndexOf"],function(e,f){if(!Array.prototype[f])return Modernizr.ES5base=false});
Modernizr.advancedObjectProperties=!!(Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor);!b.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var e=m.createElement("foo");Object.defineProperty(e,"bar",{get:function(){return true}});Modernizr.advancedObjectProperties=!!e.bar}catch(f){Modernizr.advancedObjectProperties=false}e=null}();Modernizr.ES5=Modernizr.ES5base&&Modernizr.ES5extras&&Modernizr.advancedObjectProperties;Modernizr.objectAccessor=
!!(Modernizr.advancedObjectProperties||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__);Modernizr.domAccessor=!!(Modernizr.objectAccessor||Object.defineProperty&&Object.getOwnPropertyDescriptor)})();b.webshims=b.sub();b.extend(b.webshims,{version:"pre1.5.0rc4",cfg:{useImportantStyles:true,removeFOUC:false,waitReady:true,extendNative:true,addCacheBuster:false},modules:{},features:{},featureList:[],profiles:{lightweight:["es5","canvas","geolocation","forms","json-storage"],xlightweight:["es5",
"canvas","geolocation","json-storage"]},setOptions:function(a,c){if(typeof a=="string"&&c!==s&&a in t)if(typeof c!="object")t[a]=c;else b.extend(true,t[a],c);else typeof a=="object"&&b.extend(true,t,a)},addPolyfill:function(a,c){c=c||{};var e=c.feature||a;if(!h.features[e]){h.features[e]=[];h.featureList.push(e);h.cfg[e]={}}h.features[e].push(a);c.options=b.extend(h.cfg[e],c.options);x(a,c);if(c.methodNames){if(!b.isArray(c.methodNames))c.methodNames=[c.methodNames];b.each(c.methodNames,function(f,
d){h.addMethodName(d)})}},polyfill:function(){var a=function(c){var e,f=[],d=c,g=function(){b("html").removeClass("loading-polyfills long-loading-polyfills polyfill-remove-fouc");b(l).unbind(".loadingPolyfills");clearTimeout(e)};if(b.isReady)h.warn("You should call $.webshims.polyfill before DOM-Ready");else{if(h.cfg.removeFOUC){if(h.cfg.waitReady)d=d.concat(["DOM"]);f.push("polyfill-remove-fouc")}f.push("loading-polyfills");b(l).bind("load.loadingPolyfills polyfillloaderror.loadingPolyfills  error.loadingPolyfills",
g);e=setTimeout(function(){b("html").addClass("long-loading-polyfills")},600)}u(c,g);h.cfg.useImportantStyles&&f.push("polyfill-important");f[0]&&b("html").addClass(f.join(" "));b(function(){n.loadList(["html5a11y","html5shiv"])});n.loadCSS("shim.css");a=b.noop};return function(c){var e=[];c=c||h.featureList;if(typeof c=="string")c=h.profiles[c]||c.split(" ");if(h.cfg.waitReady){b.readyWait++;u(c,function(){b.ready(true)})}b.each(c,function(f,d){d!==h.features[d][0]&&u(h.features[d],function(){q(d,
true)});e=e.concat(h.features[d])});a(c);n.loadList(e)}}(),isReady:function(a,c){a+="Ready";if(c){if(o[a]&&o[a].add)return true;o[a]=b.extend(o[a]||{},{add:function(e){e.handler.call(this,b.Event(a))}});b.event.trigger(a)}return!!(o[a]&&o[a].add)||false},ready:function(a,c,e){if(typeof a=="string")a=a.split(" ");e||(a=b.map(b.grep(a,function(f){return!q(f)}),function(f){return f+"Ready"}));if(a.length){e=a.shift();b(m).one(e,function(){u(a,c,true)})}else c(b,h,l,m)},addMethodName:function(a){b.fn[a]&&
"shim"in b.fn[a]||(b.fn[a]=function(){var c=arguments,e;this.each(function(){var f=b.attr(this,a);if(f&&f.apply){e=f.apply(this,c);if(e!==s)return false}});return e!==s?e:this})},fixHTML5:function(a){return a},capturingEvents:function(a,c){if(m.addEventListener){if(typeof a=="string")a=[a];b.each(a,function(e,f){var d=function(g){g=b.event.fix(g);if(c&&!g._isPolyfilled){var i=g.isDefaultPrevented,j=g.preventDefault;g.preventDefault=function(){clearTimeout(b.data(g.target,g.type+"-defaultPrevented"));
b.data(g.target,g.type+"-defaultPrevented",setTimeout(function(){b.removeData(g.target,g.type+"-defaultPrevented")},30));return j.apply(this,arguments)};g.isDefaultPrevented=function(){return!!(i.apply(this,arguments)||b.data(g.target,g.type+"-defaultPrevented")||false)};g._isPolyfilled=true}return b.event.handle.call(this,g)};o[f]=o[f]||{};o[f].setup||o[f].teardown||b.extend(o[f],{setup:function(){this.addEventListener(f,d,true)},teardown:function(){this.removeEventListener(f,d,true)}})})}},loader:{basePath:function(){var a=
b('meta[name="polyfill-path"]').attr("content");if(!a){a=b("script");a=a[a.length-1];a=(!b.browser.msie||m.documentMode>=8?a.src:a.getAttribute("src",4)).split("?")[0];a=a.slice(0,a.lastIndexOf("/")+1)+"shims/"}return a}(),addModule:function(a,c){r[a]=c;c.name=c.name||a},loadList:function(){var a=[],c=function(f,d){if(q(f)||b.inArray(f,a)!=-1)return true;var g=r[f];if(g)if(g=g.test&&b.isFunction(g.test)?g.test(d):g.test){q(f,true);return true}else return false;return true},e=function(f,d){if(f.dependencies&&
f.dependencies.length){var g=function(i,j){!c(j,d)&&b.inArray(j,d)==-1&&d.push(j)};b.each(f.dependencies,function(i,j){if(r[j])g(i,j);else if(h.features[j]){b.each(h.features[j],g);u(h.features[j],function(){q(j,true)})}});if(!f.noAutoCallback){f.noAutoCallback=true;u(b.merge([f.name+"FileLoaded"],f.dependencies),function(){q(f.name,true)})}}};return function(f){for(var d,g=0;g<f.length;g++){d=r[f[g]];if(!c(d.name,f)){d.css&&n.loadCSS(d.css);d.loadInit&&d.loadInit();e(d,f,f);var i=d.src||d.name;d=
d.name;if(typeof d=="string")d=[d];b.merge(a,d);n.loadScript(i,false,d)}}}}(),makePath:function(a){if(a.indexOf("//")!=-1||a.indexOf("/")===0)return a;if(a.indexOf(".")==-1)a+=".js";if(t.addCacheBuster)a+=t.addCacheBuster;return n.basePath+a},loadCSS:function(){var a,c=[];return function(e){e=this.makePath(e);if(b.inArray(e,c)==-1){a=a||m.getElementsByTagName("script")[0];c.push(e);b('<link rel="stylesheet" />').insertBefore(a).attr({href:e})}}}(),loadScript:function(){var a,c=[];return function(e,
f,d){e=n.makePath(e);if(b.inArray(e,c)==-1){a=a||m.getElementsByTagName("script")[0];var g=m.createElement("script"),i,j=function(y){if(y&&y.type==="error"){b(l).triggerHandler("polyfillloaderror");h.warn("Error: could not find script @"+e+'| configure polyfill-path: $.webshims.loader.basePath = "path/to/shims-folder" or by using markup: <meta name="polyfill-path" content="path/to/shims-folder/" />')}if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){g.onload=null;g.onreadystatechange=
null;f&&f(y,this);if(d){if(typeof d=="string")d=d.split(" ");b.each(d,function(C,v){if(r[v]){r[v].afterLoad&&r[v].afterLoad();q(!r[v].noAutoCallback?v:v+"FileLoaded",true)}})}b(g).unbind("error.polyfillerror",j);g=null;clearTimeout(i)}};g.setAttribute("async","async");i=setTimeout(function(){j({type:"error"})},2E4);g.onload=j;b(g).one("error.polyfillerror",j);g.onreadystatechange=j;g.src=e;a.parentNode.insertBefore(g,a);g.async=true;c.push(e)}}}()}});var h=b.webshims,t=h.cfg,q=h.isReady,u=h.ready,
k=h.addPolyfill,r=h.modules,n=h.loader,x=n.addModule,A={warn:1,error:1},B={cache:true,dataType:"text",error:function(a,c){h.warn("error with: "+this.url+" | "+c)}};b.each(["log","error","warn","info"],function(a,c){h[c]=function(e){if((A[c]||h.debug)&&l.console&&console.log)return console[console[c]?c:"log"](e)}});(function(){b.isDOMReady=b.isReady;if(b.isDOMReady)q("DOM",true);else{var a=b.ready;b.ready=function(c){if(c!==true&&!b.isDOMReady&&m.body){b.isDOMReady=true;q("DOM",true);b.ready=a}return a.apply(this,
arguments)}}})();(function(){var a=[],c=b([]);b.extend(h,{addReady:function(e){var f=function(d,g){h.ready("DOM",function(){e(d,g)})};a.push(f);f(m,c)},triggerDomUpdate:function(e){if(e&&e.nodeType){var f=e.nodeType;if(!(f!=1&&f!=9)){var d=e!==m?b(e):c;b.each(a,function(g,i){i(e,d)})}}}});b.fn.htmlWebshim=function(e){e=b.fn.html.call(this,e?h.fixHTML5(e):e);e===this&&b.isDOMReady&&this.each(function(){this.nodeType==1&&h.triggerDomUpdate(this)});return e};h.fn.html=b.fn.htmlWebshim;b.each(["after",
"before","append","prepend","replaceWith"],function(e,f){b.fn[f+"Webshim"]=function(d){d=b(h.fixHTML5(d));b.fn[f].call(this,d);b.isDOMReady&&d.each(function(){this.nodeType==1&&h.triggerDomUpdate(this)});return this};h.fn[f]=b.fn[f+"Webshim"]})})();(function(){var a=Object.prototype.hasOwnProperty,c=["configurable","enumerable","writable"],e=function(d){for(var g=0;g<3;g++)if(d[c[g]]===s&&(c[g]!=="writable"||d.value!==s))d[c[g]]=true},f=function(d){if(d)for(var g in d)a.call(d,g)&&e(d[g])};if(Object.create)h.objectCreate=
function(d,g,i){f(g);d=Object.create(d,g);if(i){d.options=b.extend(true,{},d.options||{},i);i=d.options}d._create&&b.isFunction(d._create)&&d._create(i);return d};if(Object.defineProperty)h.defineProperty=function(d,g,i){e(i);return Object.defineProperty(d,g,i)};if(Object.defineProperties)h.defineProperties=function(d,g){f(g);return Object.defineProperties(d,g)};h.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;h.getPrototypeOf=Object.getPrototypeOf})();x("html5a11y",{src:"html5a11y",test:!(b.browser.msie&&
w<9&&w>7||b.browser.mozilla&&w<2||b.browser.webkit&&w<535||!l.HTMLArticleElement)});x("jquery-ui",{src:"//ajax.googleapis.com/ajax/libs/jqueryui/1.8.10/jquery-ui.min.js",test:function(){return!!(b.widget&&b.Widget)}});x("input-widgets",{src:"",test:function(){var a=!(b.widget&&!(b.fn.datepicker||b.fn.slider));if(!this.src){a||h.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src');return true}return a}});x("swfobject",
{src:"//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",test:function(){return"swfobject"in l}});k("es5-1",{feature:"es5",test:Modernizr.ES5});k("es5-2",{feature:"es5",test:Modernizr.ES5base});k("dom-extend",{feature:"dom-support",noAutoCallback:true,dependencies:["es5"]});k("html5shiv",{feature:"dom-support",test:Modernizr.genericDOM});k("geolocation",{test:Modernizr.geolocation,options:{destroyWrite:true,confirmText:""},dependencies:["json-storage"]});(function(){var a;k("canvas",{src:"excanvas",
test:Modernizr.canvas,options:{type:"excanvas"},noAutoCallback:true,loadInit:function(){var c=this.options.type;if(c&&c.indexOf("flash")!==-1&&(!l.swfobject||swfobject.hasFlashPlayerVersion("9.0.0"))){l.FlashCanvasOptions=l.FlashCanvasOptions||{};a=l.FlashCanvasOptions;if(c=="flash"){b.extend(a,{swfPath:n.basePath+"FlashCanvas/"});this.src="FlashCanvas/flashcanvas";c=a.swfPath+"flashcanvas.swf"}else{b.extend(a,{swfPath:n.basePath+"FlashCanvasPro/"});this.src="FlashCanvasPro/flashcanvas";c=a.swfPath+
"flash10canvas.swf"}c&&b.ajax(c,B)}},afterLoad:function(){h.ready("dom-extend",function(c,e){e.addReady(function(f,d){c("canvas",f).add(d.filter("canvas")).each(function(){this.getContext||G_vmlCanvasManager.initElement(this)})});q("canvas",true)})},methodNames:["getContext"],dependencies:["es5","dom-support"]})})();h.validityMessages=[];h.validationMessages=h.validityMessages;h.inputTypes={};k("form-core",{feature:"forms",dependencies:["es5"]});k("form-message",{feature:"forms",test:function(a){return Modernizr.validationmessage&&
!this.options.customMessages&&r["form-extend"].test(a)},options:{customMessages:false,overrideMessages:false},dependencies:["dom-support"]});if(Modernizr.formvalidation){h.capturingEvents(["input"]);h.capturingEvents(["invalid"],true);k("form-extend",{feature:"forms",src:"form-native-extend",test:function(a){return Modernizr.requiredSelect&&Modernizr.validationmessage&&(p.valueAsNumber&&p.valueAsDate||b.inArray("form-number-date",a)==-1)&&!this.options.overrideMessages},dependencies:["form-core",
"dom-support","form-message"],methodNames:["setCustomValidity","checkValidity"]});k("form-native-fix",{feature:"forms",test:Modernizr.bugfreeformvalidation,dependencies:["dom-support"],combination:["combined-webkit"]})}else k("form-extend",{feature:"forms",src:"form-shim-extend",methodNames:["setCustomValidity","checkValidity"],dependencies:["form-core","dom-support","form-message"]});k("form-output-datalist",{feature:"forms",test:function(){var a=Modernizr.datalist&&p.list;if(a&&b(m.createElement("input")).attr("list")===
null){var c=b.attr;b.attr=function(e,f,d){if(f=="list"&&e&&(e.nodeName||"").toLowerCase()=="input")if(d!==s)e.setAttribute(f,d);else return e.getAttribute(f);return c.apply(this,arguments)}}return Modernizr.output&&a},dependencies:["dom-support","json-storage"]});k("form-number-date",{feature:"forms-ext",dependencies:["es5","forms","dom-support"],test:p.valueAsNumber&&p.valueAsDate,options:{stepArrows:{number:1,time:1},calculateWidth:true}});k("inputUI",{feature:"forms-ext",src:"form-date-range-ui",
test:function(){return z.range&&z.date&&!this.options.replaceUI},noAutoCallback:true,dependencies:["es5","forms","dom-support"],loadInit:function(){n.loadList(["jquery-ui"]);r["input-widgets"].src&&n.loadList(["input-widgets"])},options:{slider:{},datepicker:{},langSrc:"//ajax.googleapis.com/ajax/libs/jqueryui/1.8.10/i18n/jquery.ui.datepicker-",availabeLangs:"af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" "),
recalcWidth:true,replaceUI:false}});k("form-placeholder",{feature:"forms",test:p.placeholder,options:{placeholderType:"value"}});k("json-storage",{test:Modernizr.localstorage&&"sessionStorage"in l&&"JSON"in l,loadInit:function(){n.loadList(["swfobject"])},noAutoCallback:true})})(jQuery,this,this.document);
