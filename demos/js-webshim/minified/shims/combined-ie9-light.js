(function(a){if(!navigator.geolocation){a.support.geolocation="shim";var l=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},f=0;navigator.geolocation=function(){var h,g={getCurrentPosition:function(j,i,b){var c=function(){clearTimeout(d);if(!(h||!window.google||!google.loader||!google.loader.ClientLocation)){var e=google.loader.ClientLocation;h={latitude:e.latitude,longitude:e.longitude,altitude:null,accuracy:43E3,
altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null}}if(h)j({coords:h,timestamp:(new Date).getTime()});else i&&i({code:2,message:"POSITION_UNAVAILABLE"})},d;if(!window.google||!google.loader){if(a.webshims.modules.geolocation.options.destroyWrite){document.write=l;document.writeln=l}a(document).one("google-loaderReady",c);a.webshims.loader.loadScript("http://www.google.com/jsapi",false,"google-loader");if(b&&b.timeout)d=setTimeout(function(){a(document).unbind("google-loader",c);i&&i({code:3,
message:"TIMEOUT"})},b.timeout)}else setTimeout(c,1)},clearWatch:a.noop};g.watchPosition=function(j,i,b){g.getCurrentPosition(j,i,b);f++;return f};return g}()}})(jQuery);
jQuery.webshims.ready("es5",function(a){a.extend(a.expr.filters,{valid:function(f){return(a.attr(f,"validity")||{valid:true}).valid},invalid:function(f){return!a.expr.filters.valid(f)},willValidate:function(f){return a.attr(f,"willValidate")}});a.webshims.validityAlert=function(){var f={hideDelay:5E3,showFor:function(c,d){c=a(c);var e=(c.data("inputUIReplace")||{visual:c}).visual;b();f.clear();h.attr("for",e.attr("id"));this.getMessage(c);this.position(e);this.show();if(this.hideDelay)g=setTimeout(j,
this.hideDelay);if(!d){e.focus();a(document).bind("focusout.validityalert",j)}},getMessage:function(c){a("> span",h).html(c.attr("validationMessage"))},position:function(c){var d=c.offset();d.top+=c.outerHeight();h.css(d)},show:function(){h.css("display")==="none"?h.fadeIn():h.fadeTo(400,1)},hide:function(){f.clear();h.fadeOut()},clear:function(){clearTimeout(g);a(document).unbind("focusout.validityalert");h.stop().removeAttr("for")}},h=a('<label class="validity-alert" role="alert"><span class="va-box" /></label>').css({position:"absolute",
display:"none"}),g=false,j=a.proxy(f,"hide"),i=false,b=function(){if(!i){i=true;a(function(){h.appendTo("body")})}};return f}();a.webshims.validityMessages.en=a.webshims.validityMessages.en||a.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},
rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};a.webshims.validityMessages["en-US"]=a.webshims.validityMessages["en-US"]||
a.webshims.validityMessages.en;a.webshims.validityMessages[""]=a.webshims.validityMessages[""]||a.webshims.validityMessages.en;a.webshims.validityMessages.de=a.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},
rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",
valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var l=a.webshims.validityMessages[""];a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.webshims.validityMessages,"validation-base",function(f){l=f})});a.webshims.createValidationMessage=function(f,h){var g=l[h];if(g&&typeof g!=="string")g=g[(f.getAttribute("type")||"").toLowerCase()]||g.defaultMessage;g&&a.each(["value","min","max","title","maxlength","label"],function(j,i){if(g.indexOf("{%"+i)!==-1){var b=(i=="label"?a.trim(a("label[for="+
f.id+"]",f.form).text()).replace(/\*$|:$/,""):a.attr(f,i))||"";g=g.replace("{%"+i+"}",b);if("value"==i)g=g.replace("{%valueLen}",b.length)}});return g||""};a.each(a.support.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(f,h){a.webshims.attr(h,{elementNames:["input","select","textarea"],getter:function(g){var j="";if(!a.attr(g,"willValidate"))return j;var i=a.attr(g,"validity")||{valid:1};if(i.valid)return j;if(i.customError||h==="validationMessage")if(j=
"validationMessage"in g?g.validationMessage:a.data(g,"customvalidationMessage"))return j;a.each(i,function(b,c){if(!(b=="valid"||!c))if(j=a.webshims.createValidationMessage(g,b))return false});return j||""}})});(function(){var f,h=[],g,j,i;a.support.validity===true&&window.addEventListener&&!window.noHTMLExtFixes&&window.addEventListener("submit",function(b){b.target.checkValidity&&a.attr(b.target,"novalidate")===undefined&&b.target.checkValidity()},true);a(document).bind("invalid",function(b){if(!f){j=
b.target.form;if(a.support.validity===true&&j&&!window.noHTMLExtFixes){var c=a(j).bind("submit.preventInvalidSubmit",function(d){if(a.attr(j,"novalidate")===undefined){d.stopImmediatePropagation();return false}}).data("events").submit;c&&c.length>1&&c.unshift(c.pop())}f=a.Event("firstinvalid");a(b.target).trigger(f)}f&&f.isDefaultPrevented()&&b.preventDefault();if(a.support.validity!==true||a.inArray(b.target,h)==-1)h.push(b.target);else if(!window.noHTMLExtFixes){i=true;b.stopImmediatePropagation()}b.extraData=
"fix";clearTimeout(g);g=setTimeout(function(){var d={type:"lastinvalid",cancelable:false,invalidlist:a(h)};!i&&f.target!==document.activeElement&&document.activeElement&&!a.data(f.target,"maybePreventedinvalid")&&a.webshims.validityAlert.showFor(f.target);f=i=false;h=[];a(j).unbind("submit.preventInvalidSubmit");a(b.target).trigger(d,d)},0)})})();(function(){if(!(a.support.validity!==true||a.support.fieldsetValidation||window.noHTMLExtFixes)){a.support.fieldsetValidation="shim";a.webshims.addMethod("checkValidity",
function(){if(a.nodeName(this,"fieldset")){var f=true;a(this.elements||"input, textarea, select",this).each(function(){if(this.checkValidity)this.checkValidity()||(f=false)});return f}else if(this.checkValidity)return this.checkValidity()})}})();a.support.validationMessage=a.support.validationMessage||"shim";a.webshims.createReadyEvent("validation-base")},true,true);
jQuery.webshims.ready("validation-base",function(a){if(!a.support.validity){a.webshims.inputTypes=a.webshims.inputTypes||{};var l=a.webshims.inputTypes,f={radio:1,checkbox:1};a.webshims.addInputType=function(b,c){l[b]=c};var h={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},g={valueMissing:function(b,c){if(!b.attr("required"))return false;return f[b[0].type]?!a(b[0].form&&b[0].name?
b[0].form[b[0].name]:[]).filter(":checked")[0]:!c},tooLong:function(b,c){if(c==="")return false;var d=b.attr("maxlength"),e=false,k=c.length;if(k&&d>=0&&c.replace&&(typeof d=="number"||d&&d==d*1))e=k>d;return e},typeMismatch:function(b,c,d){if(c==="")return false;var e=false;if(!("type"in d))d.type=(b[0].getAttribute("type")||"").toLowerCase();if(l[d.type]&&l[d.type].mismatch)e=l[d.type].mismatch(c,b);return e},patternMismatch:function(b,c){if(c==="")return false;var d=b.attr("pattern");if(!d)return false;
return!RegExp("^(?:"+d+")$").test(c)}};a.webshims.addValidityRule=function(b,c){g[b]=c};a.webshims.addMethod("checkValidity",function(){var b,c=function(d){var e,k=a.attr(d,"validity");if(k)a.data(d,"cachedValidity",k);else k={valid:true};if(!k.valid){e=a.Event("invalid");var m=a(d).trigger(e);if(!e.isDefaultPrevented()){b||a.webshims.validityAlert.showFor(m);b=true}}a.data(d,"cachedValidity",false);return k.valid};return function(){b=false;if(a.nodeName(this,"form")||a.nodeName(this,"fieldset")){for(var d=
true,e=this.elements||a("input, textarea, select",this),k=0,m=e.length;k<m;k++)c(e[k])||(d=false);return d}else return this.form?c(this):true}}());a.event.special.invalid={add:function(){a.data(this,"invalidEventShim")||a.event.special.invalid.setup.call(this)},setup:function(){a(this).bind("submit",a.event.special.invalid.handler).data("invalidEventShim",true);var b=a(this).data("events").submit;b&&b.length>1&&b.unshift(b.pop())},teardown:function(){a(this).unbind("submit",a.event.special.invalid.handler).data("invalidEventShim",
false)},handler:function(b){if(!(b.type!="submit"||!a.nodeName(b.target,"form")||a.attr(b.target,"novalidate")!==undefined||a.data(b.target,"novalidate")))if(!a(b.target).checkValidity()){!b.originalEvent&&!window.debugValidityShim&&window.console&&console.log&&console.log("submit");b.stopImmediatePropagation();return false}}};a.webshims.attr("validity",{elementNames:["input","select","textarea"],getter:function(b){var c=a.data(b,"cachedValidity");if(c)return c;c=a.extend({},h);if(!a.attr(b,"willValidate"))return c;
var d=a(b),e=d.val(),k={};c.customError=!!a.data(b,"customvalidationMessage");if(c.customError)c.valid=false;if((b.nodeName||"").toLowerCase()=="select")return c;a.each(g,function(m,n){if(n(d,e,k)){c[m]=true;c.valid=false}});return c}});a.webshims.addMethod("setCustomValidity",function(b){a.data(this,"customvalidationMessage",""+b)});a.webshims.attr("validationMessage",{elementNames:["input","select","textarea"],getter:function(b,c){var d=c()||a.data(b,"customvalidationMessage");return!d||!a.attr(b,
"willValidate")?"":d}});a.webshims.createBooleanAttrs("required",["input","textarea"]);a.webshims.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var b={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(c){return!!(c.name&&c.form&&!c.disabled&&!c.readOnly&&!b[c.type]&&a.attr(c.form,"novalidate")===undefined)}}()});a.webshims.addInputType("email",{mismatch:function(){var b=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(c){return!b.test(c)}}()});a.webshims.addInputType("url",{mismatch:function(){var b=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!b.test(c)}}()});var j=function(){var b=this;if(b.form){a.data(b.form,"novalidate",true);setTimeout(function(){a.data(b.form,"novalidate",false)},1)}},i={submit:1,button:1};a(document).bind("click",function(b){b.target&&b.target.form&&i[b.target.type]&&a.attr(b.target,"formnovalidate")!==undefined&&j.call(b.target)});a.webshims.addReady(function(b){a("form",b).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",j)});(function(){if(a.support.validity!==true){a.support.validity=
"shim";var b={input:1,textarea:1},c={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1,range:1},d=function(e){var k;e[0].getAttribute("type");var m=e.val(),n=function(o){if(e){var q=e.val();if(q!==m){m=q;if(!o||o.type!="input")e.trigger("input")}}},p=function(){e.unbind("focusout",p).unbind("input",n);clearInterval(k);n();e=null};clearInterval(k);k=setInterval(n,150);setTimeout(n,9);e.bind("focusout",p).bind("input",n)};a(document).bind("focusin",function(e){if(e.target&&e.target.type&&
!e.target.readonly&&!e.target.readOnly&&!e.target.disabled&&b[(e.target.nodeName||"").toLowerCase()]&&!c[e.target.type])d(a(e.target))})}})();a.webshims.createReadyEvent("validity")}},true,true);
(function(a){if(!a.support.placeholder){a.support.placeholder="shim";var l=function(b,c,d,e,k){if(!e){e=a.data(b,"placeHolder");if(!e)return}if(k=="focus")e.box.removeClass("placeholder-visible");else{if(c===false)c=a.attr(b,"value");if(c)e.box.removeClass("placeholder-visible");else{if(d===false)d=a.attr(b,"placeholder");e.box[d&&!c?"addClass":"removeClass"]("placeholder-visible")}}},f=0,h=function(b){b=a(b);var c=b.attr("id"),d=!!(b.attr("title")||b.attr("aria-labeledby"));if(!d&&c)d=!!a("label[for="+
c+"]",b[0].form)[0];else if(!c){f++;c="input-placeholder-id-"+f;b.attr("id",c)}return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},g=function(){var b=/\n|\r|\f|\t/g,c={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(d){var e=a.data(d,"placeHolder");if(e)return e;e=a.data(d,"placeHolder",{text:h(d)});e.box=a(d).wrap('<span class="placeholder-box placeholder-box-'+(d.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(p){l(this,false,false,e,p.type)}).parent();e.text.insertAfter(d).bind("mousedown.placeholder",function(){l(this,false,false,e,"focus");d.focus();return false});a.each(["Left","Top"],function(p,o){var q=(parseInt(a.curCSS(d,"padding"+o),10)||0)+Math.max(parseInt(a.curCSS(d,"margin"+o),10)||0,0)+(parseInt(a.curCSS(d,"border"+o+"Width"),10)||0);e.text.css("padding"+o,q)});var k=a.curCSS(d,"lineHeight"),m={width:a(d).width()||parseInt(a.curCSS(d,"width"),10),height:a(d).height()||parseInt(a.curCSS(d,
"height"),10)},n=a.curCSS(d,"float");e.text.css("lineHeight")!==k&&e.text.css("lineHeight",k);m.width&&m.height&&e.text.css(m);n!=="none"&&e.box.addClass("placeholder-box-"+n);return e},update:function(d,e){if(c[a.attr(d,"type")]||a.nodeName(d,"textarea")){if(a.nodeName(d,"input"))e=e.replace(b,"");var k=g.create(d);d.setAttribute("placeholder",e);k.text.text(e);l(d,false,e,k)}}}}();a.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(b,c){g.update(b,c)},getter:function(b){return b.getAttribute("placeholder")||
""}});var j={elementNames:["input","textarea"],setter:function(b,c,d){var e=b.getAttribute("placeholder");e&&"value"in b&&l(b,c,e);d()},getter:true};a.webshims.attr("value",j);var i=a.fn.val;a.fn.val=function(b){b!==undefined&&this.each(function(){this.nodeType===1&&j.setter(this,b,a.noop)});return i.apply(this,arguments)};a.webshims.addReady(function(b){a("input[placeholder], textarea[placeholder]",b).attr("placeholder",function(c,d){return d})})}})(jQuery);
