(()=>{"use strict";var e,t,r,o,f,a={},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return a[e].call(r.exports,r,r.exports,c),r.exports}c.m=a,e=[],c.O=(t,r,o,f)=>{if(!r){var a=1/0;for(b=0;b<e.length;b++){r=e[b][0],o=e[b][1],f=e[b][2];for(var n=!0,d=0;d<r.length;d++)(!1&f||a>=f)&&Object.keys(c.O).every((e=>c.O[e](r[d])))?r.splice(d--,1):(n=!1,f<a&&(a=f));if(n){e.splice(b--,1);var i=o();void 0!==i&&(t=i)}}return t}f=f||0;for(var b=e.length;b>0&&e[b-1][2]>f;b--)e[b]=e[b-1];e[b]=[r,o,f]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var f=Object.create(null);c.r(f);var a={};t=t||[null,r({}),r([]),r(r)];for(var n=2&o&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(f,a),f},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({53:"935f2afb",60:"cfc5688a",173:"4edc808e",215:"0d81edf3",237:"1df93b7f",241:"e1f722d5",322:"562f4b5b",499:"12293d88",501:"817ab540",510:"63eeef7f",514:"1be78505",542:"bc507c32",608:"f9c4eafd",615:"cc50d505",661:"fd9012aa",669:"830d65d7",674:"2483520e",740:"b38cc357",762:"16a5c3c4",817:"14eb3368",918:"17896441",959:"f7d3136f"}[e]||e)+"."+{53:"23f38826",60:"484108aa",173:"661e549d",215:"a2a6c33a",217:"e052d12f",237:"87700dfe",241:"1ec67d0c",322:"9d85e23c",499:"68e88298",501:"9dfbdacd",510:"eadd64d8",514:"fb160154",542:"f4d1c04f",608:"2085b2e2",615:"b3d0e515",661:"298d75ac",669:"44192613",674:"972f91e1",740:"04606a92",762:"3491a03f",817:"1e0350cd",918:"d6b6c951",959:"2bcdbaf5",972:"0779c894"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},f="oppo-docs-ts:",c.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var n,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+r){n=u;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack",f+r),n.src=e),o[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var f=o[e];if(delete o[e],n.parentNode&&n.parentNode.removeChild(n),f&&f.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),d&&document.head.appendChild(n)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",c.gca=function(e){return e={17896441:"918","935f2afb":"53",cfc5688a:"60","4edc808e":"173","0d81edf3":"215","1df93b7f":"237",e1f722d5:"241","562f4b5b":"322","12293d88":"499","817ab540":"501","63eeef7f":"510","1be78505":"514",bc507c32:"542",f9c4eafd:"608",cc50d505:"615",fd9012aa:"661","830d65d7":"669","2483520e":"674",b38cc357:"740","16a5c3c4":"762","14eb3368":"817",f7d3136f:"959"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var f=new Promise(((r,f)=>o=e[t]=[r,f]));r.push(o[2]=f);var a=c.p+c.u(t),n=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var f=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+f+": "+a+")",n.name="ChunkLoadError",n.type=f,n.request=a,o[1](n)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var o,f,a=r[0],n=r[1],d=r[2],i=0;if(a.some((t=>0!==e[t]))){for(o in n)c.o(n,o)&&(c.m[o]=n[o]);if(d)var b=d(c)}for(t&&t(r);i<a.length;i++)f=a[i],c.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return c.O(b)},r=self.webpackChunkoppo_docs_ts=self.webpackChunkoppo_docs_ts||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();