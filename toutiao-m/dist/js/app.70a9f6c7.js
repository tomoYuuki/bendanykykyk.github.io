(function(e){function n(n){for(var c,r,o=n[0],i=n[1],h=n[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(n);while(f.length)f.shift()();return u.push.apply(u,h||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d2095e7":"16bc36e1","chunk-2d21b85f":"d92a4b9f","chunk-309fe00d":"90c00b15","chunk-40958cfe":"4a407e11","chunk-1f2e2811":"6ac8a3f8","chunk-229a0a86":"84880feb","chunk-5902e05e":"b0630d2e","chunk-64611dbd":"c79ef04c","chunk-19eb9437":"ec0d9c84","chunk-4dbac41a":"254460fc","chunk-7641e278":"6f462b76","chunk-9016d810":"496d43d6","chunk-ca54548a":"bdad2fb3","chunk-ca3cc5ba":"10683a83"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-309fe00d":1,"chunk-40958cfe":1,"chunk-1f2e2811":1,"chunk-229a0a86":1,"chunk-5902e05e":1,"chunk-64611dbd":1,"chunk-19eb9437":1,"chunk-4dbac41a":1,"chunk-7641e278":1,"chunk-9016d810":1,"chunk-ca54548a":1,"chunk-ca3cc5ba":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d2095e7":"31d6cfe0","chunk-2d21b85f":"31d6cfe0","chunk-309fe00d":"2b71b086","chunk-40958cfe":"8cb83aa0","chunk-1f2e2811":"682cb133","chunk-229a0a86":"b29c20e7","chunk-5902e05e":"839fcbf8","chunk-64611dbd":"ea7ee585","chunk-19eb9437":"641cfc92","chunk-4dbac41a":"e0fe701c","chunk-7641e278":"4afae26f","chunk-9016d810":"c555fb7d","chunk-ca54548a":"d9e880fa","chunk-ca3cc5ba":"d21d73cd"}[e]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var h=u[o],d=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(d===c||d===a))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){h=f[o],d=h.getAttribute("data-href");if(d===c||d===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],l.parentNode.removeChild(l),t(u)},l.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var h,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var f=new Error;h=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}a[e]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:d})}),12e4);d.onerror=d.onload=h,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],d=h.push.bind(h);h.push=n,h=h.slice();for(var f=0;f<h.length;f++)n(h[f]);var l=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";t("c975"),t("a434");var c=t("2b0e"),r=t("2f62"),a=t("5d2d");c["a"].use(r["a"]);var u="toutiao-user";n["a"]=new r["a"].Store({state:{user:Object(a["a"])(u)||"",cachedPages:["TabBar"]},mutations:{setUser:function(e,n){e.user=n,e.user&&Object(a["c"])(u,e.user)},removeCachePage:function(e,n){var t=e.cachedPages.indexOf(n);-1!==t&&e.cachedPages.splice(t,1)},addCachePage:function(e,n){e.cachedPages.push(n)}},actions:{},modules:{}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[t("router-view")],1)],1)},a=[],u={name:"App",components:{}},o=u,i=t("2877"),h=Object(i["a"])(o,r,a,!1,null,null,null),d=h.exports,f=(t("d3b7"),t("e17f"),t("2241")),l=t("8c4f"),s=t("4360");c["a"].use(l["a"]);var p=function(){return Promise.all([t.e("chunk-40958cfe"),t.e("chunk-229a0a86")]).then(t.bind(null,"ede4"))},b=function(){return t.e("chunk-ca3cc5ba").then(t.bind(null,"d9ce"))},m=function(){return Promise.all([t.e("chunk-40958cfe"),t.e("chunk-64611dbd"),t.e("chunk-4dbac41a"),t.e("chunk-7641e278")]).then(t.bind(null,"b3d7"))},k=function(){return Promise.all([t.e("chunk-40958cfe"),t.e("chunk-1f2e2811")]).then(t.bind(null,"3b42"))},v=function(){return t.e("chunk-2d2095e7").then(t.bind(null,"a981"))},g=function(){return t.e("chunk-2d21b85f").then(t.bind(null,"bfaf"))},y=function(){return Promise.all([t.e("chunk-40958cfe"),t.e("chunk-64611dbd"),t.e("chunk-19eb9437")]).then(t.bind(null,"794b"))},w=function(){return Promise.all([t.e("chunk-40958cfe"),t.e("chunk-5902e05e")]).then(t.bind(null,"6ab7"))},P=function(){return Promise.all([t.e("chunk-40958cfe"),t.e("chunk-ca54548a")]).then(t.bind(null,"c7d6"))},O=function(){return t.e("chunk-309fe00d").then(t.bind(null,"ca20"))},S=function(){return Promise.all([t.e("chunk-40958cfe"),t.e("chunk-64611dbd"),t.e("chunk-4dbac41a"),t.e("chunk-9016d810")]).then(t.bind(null,"fa8d"))},j=[{path:"/login",name:"Login",component:p},{path:"/",component:b,children:[{path:"",name:"Home",component:m},{path:"/profile",name:"Profile",component:k},{path:"/qa",name:"Qa",component:v},{path:"/video",name:"Video",component:g}]},{path:"/search",component:y},{path:"/detail/:articleId",component:w},{path:"/my",component:P},{path:"/chat",component:O},{path:"/chat",component:O},{path:"/userList/:type?",component:S,props:!0,meta:{requiresAuth:!0}}],_=new l["a"]({mode:"history",base:"/",routes:j}),E=l["a"].prototype.push;l["a"].prototype.push=function(e,n,t){return n||t?E.call(this,e,n,t):E.call(this,e).catch((function(e){return e}))},_.beforeEach((function(e,n,t){return"/login"!==e.path&&e.meta.requiresAuth?s["a"].state.user?t():void f["a"].confirm({title:"该功能需要登录，确认登录吗？"}).then((function(){t({path:"/login",query:{redirect:n.path}})})).catch((function(e){console.log(e)})):t()}));var x=_,A=(t("cd22"),t("5cfb"),t("5a0c")),C=t.n(A);t("a471");var T=t("4208");C.a.locale("zh-cn"),C.a.extend(T),c["a"].prototype.$day=C.a;var L=t("2ef0"),N=t.n(L);c["a"].prototype._=N.a;t("e4cb");c["a"].config.productionTip=!1,new c["a"]({router:x,store:s["a"],render:function(e){return e(d)}}).$mount("#app")},"5d2d":function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return a}));var c=function(e){var n=window.localStorage.getItem(e);try{return JSON.parse(n)}catch(t){return n}},r=function(e,n){try{window.localStorage.setItem(e,JSON.stringify(n))}catch(t){window.localStorage.setItem(e,n)}},a=function(e){try{window.localStorage.removeItem(e)}catch(n){return null}}},cd22:function(e,n,t){}});
//# sourceMappingURL=app.70a9f6c7.js.map