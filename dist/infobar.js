!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).infobar={})}(this,(function(e){"use strict";const t="/dist/web/infobar-web.js",n=globalThis.browser;e.includeScript=async function(e){let i,o;for(n&&n.runtime&&n.runtime.getURL?i=await(await fetch(n.runtime.getURL(t))).text():CidiaWebsiteDump.getFileContent&&(i=CidiaWebsiteDump.getFileContent(t));o!=i;)o=i,i=i.replace(/\/\*(.|\n)*?\*\//,"");i=i.replace(/\t+/g," ").replace(/\nthis\.[^(]*/gi,"\n").replace(/\n+/g,""),e.content+="<script>document.currentScript.remove();"+i+"<\/script>"},Object.defineProperty(e,"__esModule",{value:!0})}));
