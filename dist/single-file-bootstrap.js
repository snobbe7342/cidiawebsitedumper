!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).CidiaWebsiteDumpBootstrap={})}(this,(function(e){"use strict";const t="single-file-load-image",s="single-file-image-loaded",n=globalThis.browser,o=(e,t,s)=>globalThis.addEventListener(e,t,s),a=e=>globalThis.dispatchEvent(e),i=globalThis.CustomEvent,r=globalThis.document,l=globalThis.Document;let d;if(d=window._CidiaWebsiteDump_fontFaces?window._CidiaWebsiteDump_fontFaces:window._CidiaWebsiteDump_fontFaces=new Map,r instanceof l&&n&&n.runtime&&n.runtime.getURL){o("single-file-new-font-face",(e=>{const t=e.detail,s=Object.assign({},t);delete s.src,d.set(JSON.stringify(s),t)})),o("single-file-delete-font",(e=>{const t=e.detail,s=Object.assign({},t);delete s.src,d.delete(JSON.stringify(s))})),o("single-file-clear-fonts",(()=>d=new Map));let e=r.createElement("script");e.src="data:,("+function(){"undefined"==typeof globalThis&&(window.globalThis=window);const e=globalThis.document,t=globalThis.console,s=e=>globalThis.dispatchEvent(e),n=globalThis.CustomEvent,o=globalThis.FileReader,a=globalThis.Blob,i=t&&t.warn&&((...e)=>t.warn(...e))||(()=>{}),r="single-file-new-font-face",l="single-file-delete-font",d="single-file-clear-fonts",c={family:"font-family",style:"font-style",weight:"font-weight",stretch:"font-stretch",unicodeRange:"unicode-range",variant:"font-variant",featureSettings:"font-feature-settings"};if(globalThis.FontFace){const t=globalThis.FontFace;let o;globalThis.FontFace=function(){return o||(i("CidiaWebsiteDump is hooking the FontFace constructor, document.fonts.delete and document.fonts.clear to handle dynamically loaded fonts."),o=!0),m(...arguments).then((e=>s(new n(r,{detail:e})))),new t(...arguments)},globalThis.FontFace.toString=function(){return"function FontFace() { [native code] }"};const a=e.fonts.delete;e.fonts.delete=function(t){return m(t.family).then((e=>s(new n(l,{detail:e})))),a.call(e.fonts,t)},e.fonts.delete.toString=function(){return"function delete() { [native code] }"};const c=e.fonts.clear;e.fonts.clear=function(){return s(new n(d)),c.call(e.fonts)},e.fonts.clear.toString=function(){return"function clear() { [native code] }"}}async function m(e,t,s){const n={};return n["font-family"]=e,n.src=t,s&&Object.keys(s).forEach((e=>{c[e]&&(n[c[e]]=s[e])})),new Promise((e=>{if(n.src instanceof ArrayBuffer){const t=new o;t.readAsDataURL(new a([n.src])),t.addEventListener("load",(()=>{n.src="url("+t.result+")",e(n)}))}else e(n)}))}}.toString()+")()",(r.documentElement||r).appendChild(e),e.remove(),e=r.createElement("script"),e.src=n.runtime.getURL("/dist/web/hooks/hooks-frames-web.js"),e.async=!1,(r.documentElement||r).appendChild(e),e.remove()}const c=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig");const m="single-file-on-before-capture",u="single-file-on-after-capture",g="data-single-file-removed-content",p="data-single-file-hidden-content",f="data-single-file-kept-content",h="data-single-file-hidden-frame",E="data-single-file-preserved-space-element",b="data-single-file-shadow-root-element",T="data-single-file-image",y="data-single-file-poster",w="data-single-file-canvas",I="data-single-file-import",A="data-single-file-input-value",N="data-single-file-lazy-loaded-src",v="data-single-file-stylesheet",S="data-single-file-disabled-noscript",R="data-single-file-async-script",F="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",C=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD"],P=/^'(.*?)'$/,_=/^"(.*?)"$/,x={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},O="single-file-ui-element",M=(e,t,s)=>globalThis.addEventListener(e,t,s);function L(e,t,s){let n;return e.querySelectorAll("noscript:not([data-single-file-disabled-noscript])").forEach((e=>{e.setAttribute(S,e.textContent),e.textContent=""})),function(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach((e=>{e.removeAttribute("http-equiv"),e.setAttribute("disabled-http-equiv","refresh")}))}(e),e.head&&e.head.querySelectorAll(F).forEach((e=>e.hidden=!0)),e.querySelectorAll("svg foreignObject").forEach((e=>{const t=e.querySelectorAll("html > head > "+F+", html > body > "+F);t.length&&(Array.from(e.childNodes).forEach((e=>e.remove())),t.forEach((t=>e.appendChild(t))))})),n=t&&e.documentElement?D(t,e,e.documentElement,s):{canvases:[],images:[],posters:[],usedFonts:[],shadowRoots:[],imports:[],markedElements:[]},{canvases:n.canvases,fonts:Array.from(d.values()),stylesheets:H(e),images:n.images,posters:n.posters,usedFonts:Array.from(n.usedFonts.values()),shadowRoots:n.shadowRoots,imports:n.imports,referrer:e.referrer,markedElements:n.markedElements}}function D(e,t,s,n,o={usedFonts:new Map,canvases:[],images:[],posters:[],shadowRoots:[],imports:[],markedElements:[]},a){return Array.from(s.childNodes).filter((t=>t instanceof e.HTMLElement||t instanceof e.SVGElement)).forEach((s=>{let i,r,l;if(!n.autoSaveExternalSave&&(n.removeHiddenElements||n.removeUnusedFonts||n.compressHTML)&&(l=e.getComputedStyle(s),s instanceof e.HTMLElement&&n.removeHiddenElements&&(r=(a||s.closest("html > head"))&&C.includes(s.tagName)||s.closest("details"),r||(i=a||function(e,t){let s=!1;if(t){const n=t.getPropertyValue("display"),o=t.getPropertyValue("opacity"),a=t.getPropertyValue("visibility");if(s="none"==n,!s&&("0"==o||"hidden"==a)&&e.getBoundingClientRect){const t=e.getBoundingClientRect();s=!t.width&&!t.height}}return Boolean(s)}(s,l),i&&(s.setAttribute(p,""),o.markedElements.push(s)))),!i)){if(n.compressHTML&&l){const e=l.getPropertyValue("white-space");e&&e.startsWith("pre")&&(s.setAttribute(E,""),o.markedElements.push(s))}n.removeUnusedFonts&&(k(l,n,o.usedFonts),k(e.getComputedStyle(s,":first-letter"),n,o.usedFonts),k(e.getComputedStyle(s,":before"),n,o.usedFonts),k(e.getComputedStyle(s,":after"),n,o.usedFonts))}!function(e,t,s,n,o,a,i){if("CANVAS"==s.tagName)try{o.canvases.push({dataURI:s.toDataURL("image/png","")}),s.setAttribute(w,o.canvases.length-1),o.markedElements.push(s)}catch(e){}if("IMG"==s.tagName){const t={currentSrc:a?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":n.loadDeferredImages&&s.getAttribute(N)||s.currentSrc};if(o.images.push(t),s.setAttribute(T,o.images.length-1),o.markedElements.push(s),s.removeAttribute(N),i=i||e.getComputedStyle(s)){t.size=function(e,t,s){let n=t.naturalWidth,o=t.naturalHeight;if(!n&&!o){let a,i,r,l,d,c,m,u,g=!1;if("content-box"==(s=s||e.getComputedStyle(t)).getPropertyValue("box-sizing")){const e=t.style.getPropertyValue("box-sizing"),s=t.style.getPropertyPriority("box-sizing"),n=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),g=t.clientWidth!=n,e?t.style.setProperty("box-sizing",e,s):t.style.removeProperty("box-sizing")}a=B("padding-left",s),i=B("padding-right",s),r=B("padding-top",s),l=B("padding-bottom",s),g?(d=B("border-left-width",s),c=B("border-right-width",s),m=B("border-top-width",s),u=B("border-bottom-width",s)):d=c=m=u=0,n=Math.max(0,t.clientWidth-a-i-d-c),o=Math.max(0,t.clientHeight-r-l-m-u)}return{pxWidth:n,pxHeight:o}}(e,s,i);const n=i.getPropertyValue("box-shadow"),o=i.getPropertyValue("background-image");n&&"none"!=n||o&&"none"!=o||!(t.size.pxWidth>1||t.size.pxHeight>1)||(t.replaceable=!0,t.backgroundColor=i.getPropertyValue("background-color"),t.objectFit=i.getPropertyValue("object-fit"),t.boxSizing=i.getPropertyValue("box-sizing"),t.objectPosition=i.getPropertyValue("object-position"))}}if("VIDEO"==s.tagName&&!s.poster){const e=t.createElement("canvas"),n=e.getContext("2d");e.width=s.clientWidth,e.height=s.clientHeight;try{n.drawImage(s,0,0,e.width,e.height),o.posters.push(e.toDataURL("image/png","")),s.setAttribute(y,o.posters.length-1),o.markedElements.push(s)}catch(e){}}"IFRAME"==s.tagName&&a&&n.removeHiddenElements&&(s.setAttribute(h,""),o.markedElements.push(s));"LINK"==s.tagName&&s.import&&s.import.documentElement&&(o.imports.push({content:z(s.import)}),s.setAttribute(I,o.imports.length-1),o.markedElements.push(s));"INPUT"==s.tagName&&("password"!=s.type&&(s.setAttribute(A,s.value),o.markedElements.push(s)),"radio"!=s.type&&"checkbox"!=s.type||(s.setAttribute(A,s.checked),o.markedElements.push(s)));"TEXTAREA"==s.tagName&&(s.setAttribute(A,s.value),o.markedElements.push(s));"SELECT"==s.tagName&&s.querySelectorAll("option").forEach((e=>{e.selected&&(e.setAttribute(A,""),o.markedElements.push(e))}));"SCRIPT"==s.tagName&&(s.async&&""!=s.getAttribute("async")&&"async"!=s.getAttribute("async")&&(s.setAttribute(R,""),o.markedElements.push(s)),s.textContent=s.textContent.replace(/<\/script>/gi,"<\\/script>"))}(e,t,s,n,o,i,l);const d=!(s instanceof e.SVGElement)&&q(s);if(d&&!s.classList.contains(O)){const a={};s.setAttribute(b,o.shadowRoots.length),o.markedElements.push(s),o.shadowRoots.push(a),D(e,t,d,n,o,i),a.content=d.innerHTML,a.delegatesFocus=d.delegatesFocus,a.mode=d.mode,d.adoptedStyleSheets&&d.adoptedStyleSheets.length&&(a.adoptedStyleSheets=Array.from(d.adoptedStyleSheets).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join("\n"))))}D(e,t,s,n,o,i),!n.autoSaveExternalSave&&n.removeHiddenElements&&a&&(r||""==s.getAttribute(f)?s.parentElement&&(s.parentElement.setAttribute(f,""),o.markedElements.push(s.parentElement)):i&&(s.setAttribute(g,""),o.markedElements.push(s)))})),o}function k(e,t,s){if(e){const n=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach((o=>{if(o=U(o),!t.loadedFonts||t.loadedFonts.find((e=>U(e.family)==o&&e.style==n))){const t=(a=e.getPropertyValue("font-weight"),x[a.toLowerCase().trim()]||a),i=e.getPropertyValue("font-variant")||"normal",r=[o,t,n,i];s.set(JSON.stringify(r),[o,t,n,i])}var a}))}}function q(e){const t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(!(t&&t.dom&&t.dom.openOrClosedShadowRoot))return e.shadowRoot;try{return t.dom.openOrClosedShadowRoot(e)}catch(t){return e.shadowRoot}}function U(e=""){return function(e){e=e.match(P)?e.replace(P,"$1"):e.replace(_,"$1");return e.trim()}((t=e.trim(),t.replace(c,((e,t,s)=>{const n="0x"+t-65536;return n!=n||s?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)})))).toLowerCase();var t}function V(e,t){if(e.querySelectorAll("[data-single-file-disabled-noscript]").forEach((e=>{e.textContent=e.getAttribute(S),e.removeAttribute(S)})),e.querySelectorAll("meta[disabled-http-equiv]").forEach((e=>{e.setAttribute("http-equiv",e.getAttribute("disabled-http-equiv")),e.removeAttribute("disabled-http-equiv")})),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach((e=>e.removeAttribute("hidden"))),!t){const s=[g,h,p,E,T,y,w,A,b,I,v,R];t=e.querySelectorAll(s.map((e=>"["+e+"]")).join(","))}t.forEach((e=>{e.removeAttribute(g),e.removeAttribute(p),e.removeAttribute(f),e.removeAttribute(h),e.removeAttribute(E),e.removeAttribute(T),e.removeAttribute(y),e.removeAttribute(w),e.removeAttribute(A),e.removeAttribute(b),e.removeAttribute(I),e.removeAttribute(v),e.removeAttribute(R)}))}function H(e){if(e){const t=[];return e.querySelectorAll("style").forEach(((s,n)=>{try{const o=e.createElement("style");o.textContent=s.textContent,e.body.appendChild(o);const a=o.sheet;o.remove(),a&&a.cssRules.length==s.sheet.cssRules.length||(s.setAttribute(v,n),t[n]=Array.from(s.sheet.cssRules).map((e=>e.cssText)).join("\n"))}catch(e){}})),t}}function B(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function z(e){const t=e.doctype;let s="";return t&&(s="<!DOCTYPE "+t.nodeName,t.publicId?(s+=' PUBLIC "'+t.publicId+'"',t.systemId&&(s+=' "'+t.systemId+'"')):t.systemId&&(s+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(s+=" ["+t.internalSubset+"]"),s+="> "),s+e.documentElement.outerHTML}const j=N,W=O,J="attributes",G=globalThis.browser,Y=globalThis.document,K=globalThis.MutationObserver,$=(e,t,s)=>globalThis.addEventListener(e,t,s),Q=(e,t,s)=>globalThis.removeEventListener(e,t,s),X=new Map;let Z;async function ee(e){if(Y.documentElement){X.clear();const n=Math.max(Y.documentElement.scrollHeight-1.5*Y.documentElement.clientHeight,0),o=Math.max(Y.documentElement.scrollWidth-1.5*Y.documentElement.clientWidth,0);if(globalThis.scrollY<=n&&globalThis.scrollX<=o)return function(e){return Z=0,new Promise((async n=>{let o;const r=new Set,l=new K((async t=>{if((t=t.filter((e=>e.type==J))).length){t.filter((e=>{if("src"==e.attributeName&&(e.target.setAttribute(j,e.target.src),e.target.addEventListener("load",c)),"src"==e.attributeName||"srcset"==e.attributeName||"SOURCE"==e.target.tagName)return!e.target.classList||!e.target.classList.contains(W)})).length&&(o=!0,await se(l,e,g),r.size||await te(l,e,g))}}));async function d(t){await oe("idleTimeout",(async()=>{o?Z<10&&(Z++,ie("idleTimeout"),await d(Math.max(500,t/2))):(ie("loadTimeout"),ie("maxTimeout"),ne(l,e,g))}),t)}function c(e){const t=e.target;t.removeAttribute(j),t.removeEventListener("load",c)}async function m(t){o=!0,await se(l,e,g),await te(l,e,g),t.detail&&r.add(t.detail)}async function u(t){await se(l,e,g),await te(l,e,g),r.delete(t.detail),r.size||await te(l,e,g)}function g(e){l.disconnect(),Q(t,m),Q(s,u),n(e)}await d(2*e.loadDeferredImagesMaxIdleTime),await se(l,e,g),l.observe(Y,{subtree:!0,childList:!0,attributes:!0}),$(t,m),$(s,u),function(e){e.loadDeferredImagesBlockCookies&&a(new i("single-file-block-cookies-start")),e.loadDeferredImagesBlockStorage&&a(new i("single-file-block-storage-start")),e.loadDeferredImagesKeepZoomLevel?a(new i("single-file-load-deferred-images-keep-zoom-level-start")):a(new i("single-file-load-deferred-images-start"))}(e)}))}(e)}}async function te(e,t,s){await oe("loadTimeout",(()=>ne(e,t,s)),t.loadDeferredImagesMaxIdleTime)}async function se(e,t,s){await oe("maxTimeout",(async()=>{await ie("loadTimeout"),await ne(e,t,s)}),10*t.loadDeferredImagesMaxIdleTime)}async function ne(e,t,s){await ie("idleTimeout"),function(e){e.loadDeferredImagesBlockCookies&&a(new i("single-file-block-cookies-end")),e.loadDeferredImagesBlockStorage&&a(new i("single-file-block-storage-end")),e.loadDeferredImagesKeepZoomLevel?a(new i("single-file-load-deferred-images-keep-zoom-level-end")):a(new i("single-file-load-deferred-images-end"))}(t),await oe("endTimeout",(async()=>{await ie("maxTimeout"),s()}),t.loadDeferredImagesMaxIdleTime/2),e.disconnect()}async function oe(e,t,s){if(G&&G.runtime&&G.runtime.sendMessage){if(!X.get(e)||!X.get(e).pending){const n={callback:t,pending:!0};X.set(e,n);try{await G.runtime.sendMessage({method:"CidiaWebsiteDump.lazyTimeout.setTimeout",type:e,delay:s})}catch(n){ae(e,t,s)}n.pending=!1}}else ae(e,t,s)}function ae(e,t,s){const n=X.get(e);n&&globalThis.clearTimeout(n),X.set(e,t),globalThis.setTimeout(t,s)}async function ie(e){if(G&&G.runtime&&G.runtime.sendMessage)try{await G.runtime.sendMessage({method:"CidiaWebsiteDump.lazyTimeout.clearTimeout",type:e})}catch(t){re(e)}else re(e)}function re(e){const t=X.get(e);X.delete(e),t&&globalThis.clearTimeout(t)}G&&G.runtime&&G.runtime.onMessage&&G.runtime.onMessage.addListener&&G.runtime.onMessage.addListener((e=>{if("CidiaWebsiteDump.lazyTimeout.onTimeout"==e.method){const t=X.get(e.type);if(t){X.delete(e.type);try{t.callback()}catch(t){re(e.type)}}}}));const le={ON_BEFORE_CAPTURE_EVENT_NAME:m,ON_AFTER_CAPTURE_EVENT_NAME:u,WIN_ID_ATTRIBUTE_NAME:"data-single-file-win-id",preProcessDoc:L,serialize:z,postProcessDoc:V,getShadowRoot:q},de="__frameTree__::",ce='iframe, frame, object[type="text/html"][data]',me="CidiaWebsiteDump.frameTree.initRequest",ue="CidiaWebsiteDump.frameTree.ackInitRequest",ge="CidiaWebsiteDump.frameTree.cleanupRequest",pe="CidiaWebsiteDump.frameTree.initResponse",fe=".",he=globalThis.window==globalThis.top,Ee=globalThis.browser,be=globalThis.top,Te=globalThis.MessageChannel,ye=globalThis.document,we=new Map;let Ie;var Ae,Ne,ve;function Se(){return globalThis.crypto.getRandomValues(new Uint32Array(32)).join("")}async function Re(e){const t=e.sessionId,s=globalThis._CidiaWebsiteDump_waitForUserScript;he||(Ie=globalThis.frameId=e.windowId),Pe(ye,e.options,Ie,t),he||(e.options.userScriptEnabled&&s&&await s(le.ON_BEFORE_CAPTURE_EVENT_NAME),Me({frames:[De(ye,globalThis,Ie,e.options)],sessionId:t,requestedFrameId:ye.documentElement.dataset.requestedFrameId&&Ie}),e.options.userScriptEnabled&&s&&await s(le.ON_AFTER_CAPTURE_EVENT_NAME),delete ye.documentElement.dataset.requestedFrameId)}function Fe(e){const t=e.sessionId;Oe(ke(ye),e.windowId,t)}function Ce(e){e.frames.forEach((t=>_e("responseTimeouts",e.sessionId,t.windowId)));const t=we.get(e.sessionId);if(t){e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach((e=>{let s=t.frames.find((t=>e.windowId==t.windowId));s||(s={windowId:e.windowId},t.frames.push(s)),s.processed||(s.content=e.content,s.baseURI=e.baseURI,s.title=e.title,s.canvases=e.canvases,s.fonts=e.fonts,s.stylesheets=e.stylesheets,s.images=e.images,s.posters=e.posters,s.usedFonts=e.usedFonts,s.shadowRoots=e.shadowRoots,s.imports=e.imports,s.processed=e.processed)}));t.frames.filter((e=>!e.processed)).length||(t.frames=t.frames.sort(((e,t)=>t.windowId.split(fe).length-e.windowId.split(fe).length)),t.resolve&&(t.requestedFrameId&&t.frames.forEach((e=>{e.windowId==t.requestedFrameId&&(e.requestedFrame=!0)})),t.resolve(t.frames)))}}function Pe(e,t,s,n){const o=ke(e);!function(e,t,s,n,o){const a=[];let i;we.get(o)?i=we.get(o).requestTimeouts:(i={},we.set(o,{requestTimeouts:i}));t.forEach(((e,t)=>{const s=n+fe+t;e.setAttribute(le.WIN_ID_ATTRIBUTE_NAME,s),a.push({windowId:s})})),Me({frames:a,sessionId:o,requestedFrameId:e.documentElement.dataset.requestedFrameId&&n}),t.forEach(((e,t)=>{const a=n+fe+t;try{Le(e.contentWindow,{method:me,windowId:a,sessionId:o,options:s})}catch(e){}i[a]=globalThis.setTimeout((()=>Me({frames:[{windowId:a,processed:!0}],sessionId:o})),750)})),delete e.documentElement.dataset.requestedFrameId}(e,o,t,s,n),o.length&&function(e,t,s,n,o){const a=[];t.forEach(((e,t)=>{const i=n+fe+t;let r;try{r=e.contentDocument}catch(e){}if(r)try{const t=e.contentWindow;t.stop(),_e("requestTimeouts",o,i),Pe(r,s,i,o),a.push(De(r,t,i,s))}catch(e){a.push({windowId:i,processed:!0})}})),Me({frames:a,sessionId:o,requestedFrameId:e.documentElement.dataset.requestedFrameId&&n}),delete e.documentElement.dataset.requestedFrameId}(e,o,t,s,n)}function _e(e,t,s){const n=we.get(t);if(n&&n[e]){const t=n[e][s];t&&(globalThis.clearTimeout(t),delete n[e][s])}}function xe(e,t){const s=we.get(e);s&&s.responseTimeouts&&(s.responseTimeouts[t]=globalThis.setTimeout((()=>Me({frames:[{windowId:t,processed:!0}],sessionId:e})),1e4))}function Oe(e,t,s){e.forEach(((e,n)=>{const o=t+fe+n;e.removeAttribute(le.WIN_ID_ATTRIBUTE_NAME);try{Le(e.contentWindow,{method:ge,windowId:o,sessionId:s})}catch(e){}})),e.forEach(((e,n)=>{const o=t+fe+n;let a;try{a=e.contentDocument}catch(e){}if(a)try{Oe(ke(a),o,s)}catch(e){}}))}function Me(e){e.method=pe;try{be.CidiaWebsiteDump.processors.frameTree.initResponse(e)}catch(t){Le(be,e,!0)}}function Le(e,t,s){if(e==be&&Ee&&Ee.runtime&&Ee.runtime.sendMessage)Ee.runtime.sendMessage(t);else if(s){const s=new Te;e.postMessage(de+JSON.stringify({method:t.method,sessionId:t.sessionId}),"*",[s.port2]),s.port1.postMessage(t)}else e.postMessage(de+JSON.stringify(t),"*")}function De(e,t,s,n){const o=le.preProcessDoc(e,t,n),a=le.serialize(e);le.postProcessDoc(e,o.markedElements);return{windowId:s,content:a,baseURI:e.baseURI.split("#")[0],title:e.title,canvases:o.canvases,fonts:o.fonts,stylesheets:o.stylesheets,images:o.images,posters:o.posters,usedFonts:o.usedFonts,shadowRoots:o.shadowRoots,imports:o.imports,processed:!0}}function ke(e){let t=Array.from(e.querySelectorAll(ce));return e.querySelectorAll("*").forEach((e=>{const s=le.getShadowRoot(e);s&&(t=t.concat(...s.querySelectorAll(ce)))})),t}he&&(Ie="0",Ee&&Ee.runtime&&Ee.runtime.onMessage&&Ee.runtime.onMessage.addListener&&Ee.runtime.onMessage.addListener((e=>e.method==pe?(Ce(e),Promise.resolve({})):e.method==ue?(_e("requestTimeouts",e.sessionId,e.windowId),xe(e.sessionId,e.windowId),Promise.resolve({})):void 0))),Ae="message",Ne=async e=>{if("string"==typeof e.data&&e.data.startsWith(de)){e.preventDefault(),e.stopPropagation();const t=JSON.parse(e.data.substring(de.length));t.method==me?(e.source&&Le(e.source,{method:ue,windowId:t.windowId,sessionId:t.sessionId}),he||(globalThis.stop(),t.options.loadDeferredImages&&ee(t.options),await Re(t))):t.method==ue?(_e("requestTimeouts",t.sessionId,t.windowId),xe(t.sessionId,t.windowId)):t.method==ge?Fe(t):t.method==pe&&we.get(t.sessionId)&&(e.ports[0].onmessage=e=>Ce(e.data))}},ve=!0,globalThis.addEventListener(Ae,Ne,ve);const qe=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],Ue=[{tagName:"head",accept:e=>!e.childNodes.length||1==e.childNodes[0].nodeType},{tagName:"body",accept:e=>!e.childNodes.length}],Ve=[{tagName:"html",accept:e=>!e||8!=e.nodeType},{tagName:"head",accept:e=>!e||8!=e.nodeType&&(3!=e.nodeType||!ze(e.textContent))},{tagName:"body",accept:e=>!e||8!=e.nodeType},{tagName:"li",accept:(e,t)=>!e&&t.parentElement&&("UL"==t.parentElement.tagName||"OL"==t.parentElement.tagName)||e&&["LI"].includes(e.tagName)},{tagName:"dt",accept:e=>!e||["DT","DD"].includes(e.tagName)},{tagName:"p",accept:e=>e&&["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DETAILS","DIV","DL","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","PRE","SECTION","TABLE","UL"].includes(e.tagName)},{tagName:"dd",accept:e=>!e||["DT","DD"].includes(e.tagName)},{tagName:"rt",accept:e=>!e||["RT","RP"].includes(e.tagName)},{tagName:"rp",accept:e=>!e||["RT","RP"].includes(e.tagName)},{tagName:"optgroup",accept:e=>!e||["OPTGROUP"].includes(e.tagName)},{tagName:"option",accept:e=>!e||["OPTION","OPTGROUP"].includes(e.tagName)},{tagName:"colgroup",accept:e=>!e||8!=e.nodeType&&(3!=e.nodeType||!ze(e.textContent))},{tagName:"caption",accept:e=>!e||8!=e.nodeType&&(3!=e.nodeType||!ze(e.textContent))},{tagName:"thead",accept:e=>!e||["TBODY","TFOOT"].includes(e.tagName)},{tagName:"tbody",accept:e=>!e||["TBODY","TFOOT"].includes(e.tagName)},{tagName:"tfoot",accept:e=>!e},{tagName:"tr",accept:e=>!e||["TR"].includes(e.tagName)},{tagName:"td",accept:e=>!e||["TD","TH"].includes(e.tagName)},{tagName:"th",accept:e=>!e||["TD","TH"].includes(e.tagName)}],He=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"];function Be(e,t,s){return 3==e.nodeType?function(e){const t=e.parentNode;let s;t&&1==t.nodeType&&(s=t.tagName.toLowerCase());return!s||He.includes(s)?"script"==s?e.textContent.replace(/<\//gi,"<\\/").replace(/\/>/gi,"\\/>"):e.textContent:e.textContent.replace(/&/g,"&amp;").replace(/\u00a0/g,"&nbsp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}(e):8==e.nodeType?"\x3c!--"+e.textContent+"--\x3e":1==e.nodeType?function(e,t,s){const n=e.tagName.toLowerCase(),o=t&&Ue.find((t=>n==t.tagName&&t.accept(e)));let a="";o&&!e.attributes.length||(a="<"+n,Array.from(e.attributes).forEach((s=>a+=function(e,t,s){const n=e.name;let o="";if(!n.match(/["'>/=]/)){let a,i=e.value;s&&"class"==n&&(i=Array.from(t.classList).map((e=>e.trim())).join(" ")),i=i.replace(/&/g,"&amp;").replace(/\u00a0/g,"&nbsp;"),i.includes('"')&&(i.includes("'")||!s?i=i.replace(/"/g,"&quot;"):a=!0);const r=!s||!i.match(/^[^ \t\n\f\r'"`=<>]+$/);o+=" ",e.namespace?"http://www.w3.org/XML/1998/namespace"==e.namespaceURI?o+="xml:"+n:"http://www.w3.org/2000/xmlns/"==e.namespaceURI?("xmlns"!==n&&(o+="xmlns:"),o+=n):"http://www.w3.org/1999/xlink"==e.namespaceURI?o+="xlink:"+n:o+=n:o+=n,""!=i&&(o+="=",r&&(o+=a?"'":'"'),o+=i,r&&(o+=a?"'":'"'))}return o}(s,e,t))),a+=">");"TEMPLATE"!=e.tagName||e.childNodes.length?Array.from(e.childNodes).forEach((e=>a+=Be(e,t,s||"svg"==n))):a+=e.innerHTML;const i=t&&Ve.find((t=>n==t.tagName&&t.accept(e.nextSibling,e)));(s||!i&&!qe.includes(n))&&(a+="</"+n+">");return a}(e,t,s):void 0}function ze(e){return Boolean(e.match(/^[ \t\n\f\r]/))}const je={frameTree:Object.freeze({__proto__:null,getAsync:function(e){const t=Se();return e=JSON.parse(JSON.stringify(e)),new Promise((s=>{we.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{},resolve:e=>{e.sessionId=t,s(e)}}),Re({windowId:Ie,sessionId:t,options:e})}))},getSync:function(e){const t=Se();e=JSON.parse(JSON.stringify(e)),we.set(t,{frames:[],requestTimeouts:{},responseTimeouts:{}}),function(e){const t=e.sessionId,s=globalThis._CidiaWebsiteDump_waitForUserScript;he||(Ie=globalThis.frameId=e.windowId);Pe(ye,e.options,Ie,t),he||(e.options.userScriptEnabled&&s&&s(le.ON_BEFORE_CAPTURE_EVENT_NAME),Me({frames:[De(ye,globalThis,Ie,e.options)],sessionId:t,requestedFrameId:ye.documentElement.dataset.requestedFrameId&&Ie}),e.options.userScriptEnabled&&s&&s(le.ON_AFTER_CAPTURE_EVENT_NAME),delete ye.documentElement.dataset.requestedFrameId)}({windowId:Ie,sessionId:t,options:e});const s=we.get(t).frames;return s.sessionId=t,s},cleanup:function(e){we.delete(e),Fe({windowId:Ie,sessionId:e,options:{sessionId:e}})},initResponse:Ce,TIMEOUT_INIT_REQUEST_MESSAGE:750})},We={COMMENT_HEADER:"Page saved with CidiaWebsiteDump",COMMENT_HEADER_LEGACY:"Archive processed by CidiaWebsiteDump",ON_BEFORE_CAPTURE_EVENT_NAME:m,ON_AFTER_CAPTURE_EVENT_NAME:u,preProcessDoc:L,postProcessDoc:V,serialize:(e,t)=>function(e,t){const s=e.doctype;let n="";return s&&(n="<!DOCTYPE "+s.nodeName,s.publicId?(n+=' PUBLIC "'+s.publicId+'"',s.systemId&&(n+=' "'+s.systemId+'"')):s.systemId&&(n+=' SYSTEM "'+s.systemId+'"'),s.internalSubset&&(n+=" ["+s.internalSubset+"]"),n+="> "),n+Be(e.documentElement,t)}(e,t),getShadowRoot:q};M("single-file-user-script-init",(()=>globalThis._CidiaWebsiteDump_waitForUserScript=async e=>{const t=new CustomEvent(e+"-request",{cancelable:!0}),s=new Promise((t=>M(e+"-response",t)));(e=>{globalThis.dispatchEvent(e)})(t),t.defaultPrevented&&await s})),e.helper=We,e.processors=je,Object.defineProperty(e,"__esModule",{value:!0})}));