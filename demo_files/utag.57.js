//tealium universal tag - utag.57 ut4.0.201602031556, Copyright 2016 Tealium.com Inc. All Rights Reserved.
!function(){function createCookie(a,b,c){var d=new Date,e=c?d.getTime()+86400000*c:d.getTime(),f=[];d.setTime(e),f.push(a),f.push("="),f.push(b),f.push(c?"; expires="+d.toGMTString():""),f.push("; path=/"),document.cookie=f.join("");}function readCookie(a){for(var b=a+"=",c=document.cookie.split(";"),d=c.length,e="",f=null,g=d-1;g>=0;g--){for(e=c[g];" "===e.charAt(0);){e=e.slice(1);}if(0===e.indexOf(b)){f=e.slice(b.length);break;}}return f;}function eraseCookie(a){var b="",c=-1;a&&createCookie(a,b,c);}var requirejs,require,define;!function(a){function b(a,b){var c,d,e,f,g,h,i,j=b&&b.split("/"),k=m.map,l=k&&k["*"]||{};if(a&&"."===a.charAt(0)&&b){for(j=j.slice(0,j.length-1),a=j.concat(a.split("/")),g=0;i=a[g];g++){if("."===i){a.splice(g,1),g-=1;}else{if(".."===i){if(1===g&&(".."===a[2]||".."===a[0])){return!0;}g>0&&(a.splice(g-1,2),g-=2);}}}a=a.join("/");}if((j||l)&&k){for(c=a.split("/"),g=c.length;g>0;g-=1){if(d=c.slice(0,g).join("/"),j){for(h=j.length;h>0;h-=1){if(e=k[j.slice(0,h).join("/")],e&&(e=e[d])){f=e;break;}}}if(f=f||l[d]){c.splice(0,g,f),a=c.join("/");break;}}}return a;}function c(b,c){return function(){return j.apply(a,o.call(arguments,0).concat([b,c]));};}function d(a){return function(c){return b(c,a);};}function e(a){return function(b){k[a]=b;};}function f(b){if(l.hasOwnProperty(b)){var c=l[b];delete l[b],n[b]=!0,i.apply(a,c);}if(!k.hasOwnProperty(b)){throw new Error("No "+b);}return k[b];}function g(a,c){var e,g,h=a.indexOf("!");return-1!==h?(e=b(a.slice(0,h),c),a=a.slice(h+1),g=f(e),a=g&&g.normalize?g.normalize(a,d(c)):b(a,c)):a=b(a,c),{f:e?e+"!"+a:a,n:a,p:g};}function h(a){return function(){return m&&m.config&&m.config[a]||{};};}var i,j,k={},l={},m={},n={},o=[].slice;i=function(b,d,i,j){var m,o,p,q,r,s,t=[];if(j=j||b,"function"==typeof i){for(d=!d.length&&i.length?["require","exports","module"]:d,s=0;s<d.length;s++){if(r=g(d[s],j),p=r.f,"require"===p){t[s]=c(b);}else{if("exports"===p){t[s]=k[b]={},m=!0;}else{if("module"===p){o=t[s]={id:b,uri:"",exports:k[b],config:h(b)};}else{if(k.hasOwnProperty(p)||l.hasOwnProperty(p)){t[s]=f(p);}else{if(r.p){r.p.load(r.n,c(j,!0),e(p),{}),t[s]=k[p];}else{if(!n[p]){throw new Error(b+" missing "+p);}}}}}}}q=i.apply(k[b],t),b&&(o&&o.exports!==a&&o.exports!==k[b]?k[b]=o.exports:q===a&&m||(k[b]=q));}else{b&&(k[b]=i);}},requirejs=require=j=function(b,c,d,e){return"string"==typeof b?f(g(b,c).f):(b.splice||(m=b,c.splice?(b=c,c=d,d=null):b=a),c=c||function(){},e?i(a,b,c,d):setTimeout(function(){i(a,b,c,d);},15),j);},j.config=function(a){return m=a,j;},define=function(a,b,c){b.splice||(c=b,b=[]),l[a]=[a,b,c];},define.amd={jQuery:!0};}(),define("../vendor/almond",function(){}),"object"!=typeof JSON&&(JSON={}),function(){function f(a){return 10>a?"0"+a:a;}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+a+'"';}function str(a,b){var c,d,e,f,g,h=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i){return"null";}if(gap+=indent,g=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1){g[c]=str(c,i)||"null";}return e=0===g.length?"[]":gap?"[\n"+gap+g.join(",\n"+gap)+"\n"+h+"]":"["+g.join(",")+"]",gap=h,e;}if(rep&&"object"==typeof rep){for(f=rep.length,c=0;f>c;c+=1){"string"==typeof rep[c]&&(d=rep[c],e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));}}else{for(d in i){Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&g.push(quote(d)+(gap?": ":":")+e));}}return e=0===g.length?"{}":gap?"{\n"+gap+g.join(",\n"+gap)+"\n"+h+"}":"{"+g.join(",")+"}",gap=h,e;}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf();});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c){for(d=0;c>d;d+=1){indent+=" ";}}else{"string"==typeof c&&(indent=c);}if(rep=b,!b||"function"==typeof b||"object"==typeof b&&"number"==typeof b.length){return str("",{"":a});}throw new Error("JSON.stringify");}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e){for(c in e){Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);}}return reviver.call(a,b,e);}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;}throw new SyntaxError("JSON.parse");});}(),define("../vendor/json2",function(){}),define("../src/bootstrap",[],function(){var a=function(a,b){var c,d=b.split("."),e=a;c=d.length;for(var f=0;c>f;f++){"undefined"==typeof e[d[f]]&&(e[d[f]]={}),e=e[d[f]];}return e;};"undefined"==typeof BKTAG&&a(window,"BKTAG"),BKTAG.ns=a;var b={createFrame:function(a){var b=document.createElement("iframe");return b.setAttribute("name",a),b.setAttribute("id",a),b.setAttribute("title","bk"),b.style.border="0px",b.style.width="0px",b.style.height="0px","function"==typeof bk_frameLoad&&(b.onload=bk_frameLoad),b.src="javascript:void(0)",b;},checkFrame:function(a){var c="__bkframe";if("undefined"==typeof frames[c]||"undefined"==typeof document.getElementById(c)){var d=b.createFrame(c),e=document.getElementsByTagName("body")[0];e&&e.appendChild(d);}"function"==typeof a&&a();}};return b;}),define("../vendor/htmlparser",[],function(){var a=function(a){for(var b={},c=a.split(","),d=0;d<c.length;d++){b[c[d]]=!0;}return b;},b={leftTrim:function(a){return a.replace(/^\s+/,"");},startTag:/^<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/(\w+)[^>]*>/,attr:/(\w+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,empty:a("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),block:a("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,NOSCRIPT,object,ol,p,pre,script,SCRIPT,table,tbody,td,tfoot,th,thead,tr,ul"),inline:a("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,SCRIPT,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),closeSelf:a("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),fillAttrs:a("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),special:a("script,SCRIPT,style"),one:a("html,head,body,title"),structure:{link:"head",base:"head"},htmlParser:function(a,c){function d(a,d,f,g){if(b.block[d]){for(;i.last()&&b.inline[i.last()];){e("",i.last());}}if(b.closeSelf[d]&&i.last()==d&&e("",d),g=b.empty[d]||!!g,g||i.push(d),c.start){var h=[];f.replace(b.attr,function(a,c){var d=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:b.fillAttrs[c]?c:"";h.push({name:c,value:d,escaped:d.replace(/(^|[^\\])"/g,'$1\\"')});}),c.start&&c.start(d,h,g);}}function e(a,b){if(b){for(var d=i.length-1;d>=0&&i[d]!=b;d--){}}else{var d=0;}if(d>=0){for(var e=i.length-1;e>=d;e--){c.end&&c.end(i[e]);}i.length=d;}}var f,g,h,i=[],j=a;for(i.last=function(){return this[this.length-1];};a;){if(g=!0,a=b.leftTrim(a),i.last()&&b.special[i.last()]){var k=new RegExp("</"+i.last()+">","i"),f=a.search(k),l=a.substring(0,f);l.length>0&&(c.chars&&c.chars(l),a=a.replace(l,"")),a=a.replace(k,""),e("",i.last());}else{if(0==a.indexOf("<!--")?(f=a.indexOf("-->"),f>=0&&(c.comment&&c.comment(a.substring(4,f)),a=a.substring(f+3),g=!1)):0==a.indexOf("</")?(h=a.match(b.endTag),h&&(a=a.substring(h[0].length),h[0].replace(b.endTag,e),g=!1)):0==a.indexOf("<")&&(h=a.match(b.startTag),h&&(a=a.substring(h[0].length),h[0].replace(b.startTag,d),g=!1)),g){f=a.indexOf("<");var m=0>f?a:a.substring(0,f);a=0>f?"":a.substring(f),c.chars&&c.chars(m);}}if(a==j){throw"Parse Error: "+a;}j=a;}e();},htmlToDom:function(a,c){var d=[],e=c.documentElement||c.getOwnerDocument&&c.getOwnerDocument()||c;if(!e&&c.createElement&&function(){var a=c.createElement("html"),b=c.createElement("head");b.appendChild(c.createElement("title")),a.appendChild(b),a.appendChild(c.createElement("body")),c.appendChild(a);}(),c.getElementsByTagName){for(var f in b.one){b.one[f]=c.getElementsByTagName(f)[0];}}var g=b.one.body;b.htmlParser(a,{start:function(a,e,f){if(b.one[a]){return void(g=b.one[a]);}for(var h=c.createElement(a),i=0;i<e.length;i++){h.setAttribute(e[i].name,e[i].value);}b.structure[a]&&"boolean"!=typeof _one[b.structure[a]]?b.one[b.structure[a]].appendChild(h):g&&g.appendChild&&(window.addEventListener||"NOSCRIPT"!=g.tagName)&&g.appendChild(h),f||(d.push(h),g=h);},end:function(){d.length-=1,g=d.length>0?d[d.length-1]:b.one.body;},chars:function(a){if(window.addEventListener){var b=c.createTextNode(a);g.appendChild(b);}else{g.text=a;}},comment:function(){}});}};return b;}),define("../src/utils",["../src/bootstrap","../vendor/htmlparser"],function(a,b){var c={getKwds:function(){var a,b=document.getElementsByTagName("meta"),c=[],d=b.length;for(a=0;d>a;a++){b[a].name&&"keywords"===b[a].name.toLowerCase()&&""!==b[a].content&&c.push(b[a].content);}return c.join(",");},getMeta:function(a){for(var b=document.getElementsByTagName("meta"),c=b.length,d=0;c>d;d++){var e=b[d];if(e.name.toLowerCase()===a.toLowerCase()&&""!==e.content){return e.content;}}return null;},scriptWithOnload:function(a,b){var c=document.createElement("script");return c.src=a,c.onloadDone=!1,c.onload=function(){c.onloadDone||(c.onloadDone=!0,"function"==typeof b&&b());},c.onreadystatechange=function(){("loaded"===c.readyState||"complete"===c.readyState)&&!c.onloadDone&&(c.onloadDone=!0,"function"==typeof b&&b());},c;},isMobile:function(){var a=!1,b=["Mobile","Tablet","Handheld","Android","iPhone","Kindle","Silk","Nokia","Symbian","BlackBerry"];for(var c in b){if(-1!==navigator.userAgent.indexOf(b[c])){a=!0;break;}}return a;},isDebug:function(){var a=!1;return"undefined"!=typeof window.location&&"undefined"!=typeof window.location.search&&-1!==window.location.search.indexOf("debug=1")&&(a=!0),a;},addEvent:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,function(b){return c.call(a,b);});}};return window.BKTAG.htmlToDom=b.htmlToDom,window.BKTAG.util=c,c;}),define("../vendor/cookies",function(){});var hashers={java:function(a){for(var b=31,c=0,d=0,e=0;e<a.length;e++){d=b*d+a.charCodeAt(e)<<c;}return d;},javaHex:function(a){return Math.abs(hashers.java(a)).toString(16);}},indexes={1:"dtzpmk".split("")},encoders={indexed_comma:function(a){for(var b=[a],c=indexes[a],d=0;d<c.length;d++){var e=signifiers[c[d]][0];b.push(encodeURIComponent(e?e:""));}return b.join(",");}},signifiers={a:[navigator.userAgent,"userAgent"],e:[function(){return hashers.javaHex(navigator.userAgent);}(),"userAgent hashed"],d:[[screen.width,screen.height,screen.colorDepth].join(""),"Screen concat"],t:[(new Date).getTime(),"Time"],z:[(new Date).getTimezoneOffset(),"Timezone"],n:[function(){for(var a in navigator){var b=[];return"string"==typeof navigator[a]&&b.push(navigator[a]),b.join("");}}(),"Navigator"],p:[function(){for(var a=[],b=0,c=navigator.plugins;b<c.length;b++){a.push(c[b].name);}return hashers.javaHex(a.join(","));}(),"Plugins hashed"],pv:[function(){for(var a=0,b=0,c=navigator.plugins;b<c.length;b++){var d=c[b].description.match(/\d+(.\d+){1,3}/);d&&(a+=d[0]);}return a;}(),"Plugin version concat"],m:[function(){for(var a=[],b=0,c=navigator.mimeTypes;b<c.length;b++){a.push(c[b].description);}return hashers.javaHex(a.join(","));}(),"mimeTypes hashed"],l:[navigator.language,"language"],k:[navigator.cookieEnabled?1:0,"cookies"],ps:[navigator.productSub,"productSub"],u:[navigator.cpuClass,"cpuClass"],g:[navigator.browserLanguage,"browserLanguage"],s:[document.defaultCharset,"charset"]},numis={collect:function(a,b){var c=a||"indexed_comma",d=b||1;return encoders[c](d);}};define("../vendor/numis",function(){}),define("../src/core",["../src/bootstrap","../src/utils","../vendor/cookies","../vendor/numis"],function(a,b){var c=[],d=!1,e={site:"site_id",limit:"pixel_limit",excludeBkParams:"ignore_meta",excludeTitle:"exclude_title",excludeKeywords:"exclude_keywords",excludeReferrer:"exclude_referrer",excludeLocation:"exclude_location",partnerID:"partner_id",allowMultipleCalls:"allow_multiple_calls",suppressMultipleCalls:"suppress_multiple_calls",callback:"callback",useImage:"use_image",useMultipleIframes:"use_multiple_iframes",allData:"all_data",timeOut:"timeout",ignoreOutsideIframe:"ignore_outside_iframe",eventScheduling:"event_scheduling",suppressEventScheduling:"suppress_event_scheduling",suppressCacheBusting:"suppress_cache_busting",pixelUrl:"pixel_url",pixelSecure:"pixel_secure",useFirstParty:"use_first_party",suppressFirstParty:"suppress_first_party",sendStatidPayload:"send_statid_payload",suppressStatidPayload:"suppress_statid_payload",metaVars:"meta_vars",jsList:"js_list",paramList:"param_list",useMobile:"use_mobile",disableMobile:"disable_mobile",isDebug:"is_debug",limitGetLength:"limit_get_length"},f={readCookie:readCookie,createCookie:createCookie,eraseCookie:eraseCookie,_dest:null,addParam:function(a,b,d){return"undefined"!=typeof varMap&&varMap[b]&&(b=varMap[b]),c.push("undefined"!=typeof d?a+"="+encodeURIComponent(b+"="+d):a+"="+b),BKTAG;},addBkParam:function(a,b){if("string"==typeof a&&"string"==typeof b){f.addParam("phint","__bk_"+a,b);}else{for(var c in a){a.hasOwnProperty(c)&&"string"==typeof a[c]&&f.addParam("phint","__bk_"+c,a[c]);}}return BKTAG;},_reset:function(){d=!1,c=[];for(var a in e){if(e.hasOwnProperty(a)){var b="bk_"+e[a];window[b]=void 0;try{delete window[b];}catch(f){}}}return BKTAG;},params:function(){return c;},getGlobals:function(a){if(a.length){for(var b=0;b<a.length;b++){var c=a[b];"undefined"!=typeof window[c]&&""!==c&&""!==window[c]&&bk_addPageCtx(c,window[c]);}}else{for(var d in a){a.hasOwnProperty(d)&&"string"==typeof d&&("string"==typeof a[d]||"number"==typeof a[d]||"boolean"==typeof a[d])&&bk_addPageCtx(d,a[d]);}}},doTag:function(g,h,i,j,k,l,m,n,o){var p={site:g,limit:h,excludeBkParams:i,partnerID:j,allowMultipleCalls:k,callback:l,allData:m,timeOut:n,ignoreOutsideIframe:o};for(var q in e){e.hasOwnProperty(q)&&"undefined"!=typeof window["bk_"+e[q]]&&(p[q]=window["bk_"+e[q]]);}if("object"==typeof g){for(var r in e){e.hasOwnProperty(r)&&"undefined"!=typeof g[e[r]]&&(p[r]=g[e[r]]);}}if(!(p.suppressMultipleCalls===!0||"undefined"!=typeof d&&d&&p.allowMultipleCalls!==!0)){d=!0,void 0===p.timeOut&&(p.timeOut=1000),c.unshift("ret="+(p.callback?"js":"html"));var s="undefined"!=typeof p.partnerID&&null!==p.partnerID;s&&c.unshift("partner="+encodeURIComponent(p.partnerID));var t={2607:1,2834:1,2894:1,3316:1,3317:1,3318:1,3319:1,3321:1,3322:1,3323:1,3324:1,3325:1,3326:1,3327:1,3328:1,3329:1,3330:1,3331:1,3332:1,3333:1,3334:1,3338:1,3339:1,3340:1,3341:1,3344:1,3345:1,3346:1,3348:1};if(!p.excludeBkParams&&!p.excludeTitle&&""!==document.title&&f.addBkParam("t",document.title),!p.excludeBkParams&&!p.excludeKeywords&&f.addBkParam("k",b.getKwds()),!p.excludeBkParams&&!p.excludeReferrer&&"referrer"in document&&""!==document.referrer&&f.addBkParam("pr",document.referrer),!p.excludeBkParams&&!p.excludeLocation&&f.addBkParam("l",window.location.toString()),p.callback?f.addParam("jscb",encodeURIComponent(p.callback)):"undefined"!=typeof p.limit&&f.addParam("limit",encodeURIComponent(p.limit)),p.allData===!0&&f.addParam("data","all"),p.disableMobile!==!0&&p.suppressStatidPayload!==!0&&(b.isMobile()||p.sendStatidPayload)&&"undefined"!=typeof numis&&f.addParam("bknms",numis.collect()),p.suppressEventScheduling!==!0&&p.eventScheduling===!0&&b.addEvent("message",function(a){if("http://tags.bluekai.com"===a.origin){var b=document.getElementById("__bkframe"),c=function(a){return function(){b.contentWindow.postMessage(JSON.stringify({event:a}),"*"),b.contentWindow.postMessage(JSON.stringify({schedule:"run"}),"*");};},d=JSON.parse(a.data);if(d.status&&"loaded"===d.status&&b.contentWindow.postMessage(JSON.stringify({get:"events"}),"*"),d.scheduled){var e=JSON.parse(d.scheduled);for(var f in e){var g="window"===e[f]?window:document.getElementById(e[f]);g.addEventListener(f,c(f),!1);}}d.status&&"complete"===d.status&&b.contentWindow.postMessage(JSON.stringify({status:"ack"}),"*");}},!1),p.suppressFirstParty!==!0&&p.useFirstParty&&(readCookie("bkrid")||createCookie("bkrid",Math.floor(Math.random()*Math.pow(2,31)),180),readCookie("bkrid")&&f.addParam("bkrid",encodeURIComponent(readCookie("bkrid")))),(b.isDebug()||p.isDebug)&&f.addParam("debug","1"),!p.excludeBkParams&&"undefined"!=typeof p.paramList&&f.getGlobals(p.paramList),!p.excludeBkParams&&"undefined"!=typeof p.jsList&&f.getGlobals(p.jsList),!p.excludeBkParams&&"undefined"!=typeof p.metaVars){for(var u=0;u<p.metaVars.length;u++){var v=b.getMeta(p.metaVars[u]);null!==v&&f.addBkParam(p.metaVars[u],v);}}p.suppressCacheBusting!==!0&&f.addParam("r",parseInt(99999999*Math.random(),10));var w="https://stags.bluekai.com/",x="http://tags.bluekai.com/",y=("https:"===document.location.protocol?p.pixelSecure?p.pixelSecure:w:p.pixelUrl?p.pixelUrl:x)+(s?"psite":"site")+"/"+p.site,z=y+"?"+c.join("&");if(p.limitGetLength&&(z=z.substr(0,2000)),BKTAG._dest=f._dest=z,p.callback){if(p.useImage){var A=document.createElement("span");A.style.display="none";var B=document.getElementsByTagName("body")[0];B.appendChild(A);var C=document.createElement("img");C.src=f._dest,A.appendChild(C);}else{var D=document.createElement("script");D.type="text/javascript",D.src=f._dest,D.id="__bk_script__",t[""+g]&&setTimeout(function(){var a=document.getElementById("__bk_script__");a&&(a.removeNode?a.removeNode(!0):a.parentNode.removeChild(a));},p.timeOut),document.getElementsByTagName("head")[0].appendChild(D);}}else{if(a.checkFrame(function(){if(p.useMultipleIframes){var b=a.createFrame("__bkframe_"+p.site+"_"+(new Date).valueOf());b.className="__bkframe_site_"+p.site,b.src=z,document.getElementsByTagName("body")[0].appendChild(b);}else{if(frames&&frames.__bkframe){frames.__bkframe.location.replace(z);}else{var c=a.createFrame("__bkframe");document.getElementsByTagName("body")[0].appendChild(c),frames.__bkframe.location.replace(z);}}}),c.shift(),"undefined"!=typeof p.ignoreOutsideIframe&&p.ignoreOutsideIframe===!1){c.unshift("ret=jsht"),z=y+"?"+c.join("&"),z=z.substr(0,2000);var E=document.createElement("script");E.src=z,E.type="text/javascript",document.getElementsByTagName("body").item(0).appendChild(E);}}"function"==typeof h&&h(),c=[];}}};for(var g in f){f.hasOwnProperty(g)&&(window.BKTAG[g]=f[g]);}return"function"==typeof window.bk_async&&window.setTimeout(function(){bk_async();},0),f;}),define("../src/aliases",["../src/core"],function(){window.BKTAG.addCtxParam=function(a,b){return BKTAG.addParam("phint",a,b),BKTAG;},window.BKTAG.addBkParam=function(a,b){return BKTAG.addParam("phint","__bk_"+a,b),BKTAG;},window.BKTAG.addPageCtx=window.bk_addPageCtx=window.BKTAG.addUserCtx=window.bk_addUserCtx=function(a,b){return BKTAG.addParam("phint",a,b),BKTAG;},window.BKTAG.doJSTag=window.bk_doJSTag=function(a,b,c){BKTAG.doTag(a,b,!1,null,c);},window.BKTAG.doJSTag2=window.bk_doJSTag2=function(a,b){BKTAG.doTag(a,b);},window.BKTAG.doCarsJSTag=window.bk_doCarsJSTag=function(a,b){BKTAG.doTag(a,b,!0);},window.BKTAG.doPartnerAltTag=window.bk_doPartnerAltTag=function(a,b,c){("undefined"==typeof c||null===c)&&(c=0),BKTAG.doTag(a,b,!1,c);},window.BKTAG.doCallbackTag=window.bk_doCallbackTag=function(a,b,c,d){BKTAG.doTag(a,0,!1,null,c,b,d);},window.BKTAG.doCallbackTagWithTimeOut=window.bk_doCallbackTagWithTimeOut=function(a,b,c,d,e){BKTAG.doTag(a,0,!1,null,c,b,d,e);},window.BKTAG.sendData=function(a){BKTAG.doTag(a);};}),define("mobile",["../vendor/json2","../src/core","../src/aliases"],function(){}),require("mobile");}();BKTAG.version="3.0.20";try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;u.ev={'view':1};u.map={"dom.domain":"rhost","bk_path":"path","template_type":"ctype","channel":"channel","site_section1":"ch","site_section2":"sch","content_id":"aid","content_package_id":"pid","available_app_ids":"availableAppIds","bundle_id":"bundleId","subscriber_expiration_date":"expirationDate","has_continuous_service":"continuousService","has_donor":"donor","has_print_subscription":"hasPrintSubscription","is_active_subscriber":"subscriberIsActive","is_agent_subscription":"agent","is_bill_me":"billMe","is_giftee":"giftee","is_renewable":"renewable","login_status":"loggedInStatus","subscriber_id":"subscriberId","subscriber_type":"subscriberType","subscription_status":"subscriptionStatus","tcm_magcode":"magcode","tier_level":"tierLevel","treat_as_registered":"treatAsRegistered","consumer_magcode":"consumer_magCode","ticm_pcs_meter":"meterHeight"};u.extend=[function(a,b){try{if(1){try{b['bk_path']=b['dom.pathname'].split('/').slice(1).join(',')}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){bk_addPageCtx("p16",(typeof(s_time.prop16)!='undefined')?s_time.prop16:'');bk_addPageCtx("p11",(typeof(s_time.prop11)!='undefined')?s_time.prop11:'');bk_addPageCtx("e23",(typeof(s_time.eVar23)!='undefined')?s_time.eVar23:'');bk_addPageCtx("p12",(typeof(s_time.prop12)!='undefined')?s_time.prop12:'');bk_addPageCtx("p15",(typeof(s_time.prop15)!='undefined')?s_time.prop15:'');bk_addPageCtx("p20",(typeof(s_time.prop20)!='undefined')?s_time.prop20:'');bk_addPageCtx("p5",(typeof(s_time.prop5)!='undefined')?s_time.prop5:'');bk_addPageCtx("p7",(typeof(s_time.prop7)!='undefined')?s_time.prop7:'');bk_addPageCtx("e30",(typeof(s_time.eVar30)!='undefined')?s_time.eVar30:'');bk_addPageCtx("e31",(typeof(s_time.eVar31)!='undefined')?s_time.eVar31:'');bk_addPageCtx("e32",(typeof(s_time.eVar32)!='undefined')?s_time.eVar32:'');bk_addPageCtx("e33",(typeof(s_time.eVar33)!='undefined')?s_time.eVar33:'');bk_addPageCtx("e34",(typeof(s_time.eVar34)!='undefined')?s_time.eVar34:'');bk_addPageCtx("e38",(typeof(s_time.eVar38)!='undefined')?s_time.eVar38:'');bk_addPageCtx("events",(typeof(s_time.events)!='undefined')?s_time.events:'');bk_addPageCtx("pgname",(typeof(s_time.pageName)!='undefined')?s_time.pageName:'');bk_addPageCtx("e6",(typeof(s_time.eVar6)!='undefined')?s_time.eVar6:'');bk_addPageCtx("campaign",(typeof(s_time.campaign)!='undefined')?s_time.campaign:'');bk_addPageCtx("s_acct",(typeof(s_account)!='undefined')?s_account:'');bk_addPageCtx("p3",(typeof(s_time.prop3)!='undefined')?s_time.prop3:'');bk_addPageCtx("device",navigator.userAgent);}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"siteid":"13731","limit":"6"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("siteid")===0||e[f].indexOf("limit")===0){u.data[e[f]]=b[d];}else{bk_addPageCtx(e[f],b[d]);}}}}
bk_doJSTag(u.data.siteid,u.data.limit);}};utag.o[loader].loader.LOAD(id);}('57','timeinc.myrecipes.com'));}catch(error){utag.DB(error);}
