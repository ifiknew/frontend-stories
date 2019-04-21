!function(e){function n(n){for(var r,o,i=n[0],c=n[1],a=n[2],d=n[3]||[],s=0,p=[];s<i.length;s++)o=i[s],A[o]&&p.push(A[o][0]),A[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(T&&T(n),d.forEach(function(e){if(void 0===A[e]){A[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",z.nc&&n.setAttribute("nonce",z.nc),n.rel="prefetch",n.as="script",n.href=S(e),document.head.appendChild(n)}});p.length;)p.shift()();return H.push.apply(H,a||[]),t()}function t(){for(var e,n=0;n<H.length;n++){for(var t=H[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==A[i]&&(r=!1)}r&&(H.splice(n--,1),e=z(z.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!x[e]||!k[e])return;for(var t in k[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(m[t]=n[t]);0===--w&&0===v&&P()}(e,n),r&&r(e,n)};var o,i=!0,c="ffdbb22e8088b8ffb922",a=1e4,d={},s=[],p=[];function u(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:E,status:function(e){if(!e)return f;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:d[e]};return o=void 0,n}var l=[],f="idle";function h(e){f=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var b,m,g,w=0,v=0,y={},k={},x={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(n=a,n=n||1e4,new Promise(function(e,t){if("undefined"===typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=z.p+""+c+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(i){return t(i)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(i){return void t(i)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;k={},y={},x=e.c,g=e.h,h("prepare");var n=new Promise(function(e,n){b={resolve:e,reject:n}});for(var t in m={},A)j(t);return"prepare"===f&&0===v&&0===w&&P(),n});var n}function j(e){x[e]?(k[e]=!0,w++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=z.p+""+e+"."+c+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):y[e]=!0}function P(){h("ready");var e=b;if(b=null,e)if(i)Promise.resolve().then(function(){return E(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&n.push(O(t));e.resolve(n)}}function E(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,o,i,a;function p(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,a=o.chain;if((i=D[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var d=0;d<i.parents.length;d++){var s=i.parents[d],p=D[s];if(p){if(p.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([s]),moduleId:c,parentId:s};-1===n.indexOf(s)&&(p.hot._acceptedDependencies[c]?(t[s]||(t[s]=[]),u(t[s],[c])):(delete t[s],n.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var l={},b=[],w={},v=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var y in m)if(Object.prototype.hasOwnProperty.call(m,y)){var k;a=O(y);var _=!1,j=!1,P=!1,E="";switch((k=m[y]?p(a):{type:"disposed",moduleId:y}).chain&&(E="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":n.onDeclined&&n.onDeclined(k),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+k.moduleId+E));break;case"declined":n.onDeclined&&n.onDeclined(k),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+E));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(k),n.ignoreUnaccepted||(_=new Error("Aborted because "+a+" is not accepted"+E));break;case"accepted":n.onAccepted&&n.onAccepted(k),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(k),P=!0;break;default:throw new Error("Unexception type "+k.type)}if(_)return h("abort"),Promise.reject(_);if(j)for(a in w[a]=m[a],u(b,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,a)&&(l[a]||(l[a]=[]),u(l[a],k.outdatedDependencies[a]));P&&(u(b,[k.moduleId]),w[a]=v)}var H,S=[];for(r=0;r<b.length;r++)a=b[r],D[a]&&D[a].hot._selfAccepted&&S.push({module:a,errorHandler:D[a].hot._selfAccepted});h("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete A[e]}(e)});for(var I,M,C=b.slice();C.length>0;)if(a=C.pop(),i=D[a]){var T={},q=i.hot._disposeHandlers;for(o=0;o<q.length;o++)(t=q[o])(T);for(d[a]=T,i.hot.active=!1,delete D[a],delete l[a],o=0;o<i.children.length;o++){var U=D[i.children[o]];U&&((H=U.parents.indexOf(a))>=0&&U.parents.splice(H,1))}}for(a in l)if(Object.prototype.hasOwnProperty.call(l,a)&&(i=D[a]))for(M=l[a],o=0;o<M.length;o++)I=M[o],(H=i.children.indexOf(I))>=0&&i.children.splice(H,1);for(a in h("apply"),c=g,w)Object.prototype.hasOwnProperty.call(w,a)&&(e[a]=w[a]);var W=null;for(a in l)if(Object.prototype.hasOwnProperty.call(l,a)&&(i=D[a])){M=l[a];var R=[];for(r=0;r<M.length;r++)if(I=M[r],t=i.hot._acceptedDependencies[I]){if(-1!==R.indexOf(t))continue;R.push(t)}for(r=0;r<R.length;r++){t=R[r];try{t(M)}catch(L){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:a,dependencyId:M[r],error:L}),n.ignoreErrored||W||(W=L)}}}for(r=0;r<S.length;r++){var J=S[r];a=J.module,s=[a];try{z(a)}catch(L){if("function"===typeof J.errorHandler)try{J.errorHandler(L)}catch(Z){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:Z,originalError:L}),n.ignoreErrored||W||(W=Z),W||(W=L)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:a,error:L}),n.ignoreErrored||W||(W=L)}}return W?(h("fail"),Promise.reject(W)):(h("idle"),new Promise(function(e){e(b)}))}var D={},A={1:0},H=[];function S(e){return z.p+"static/js/"+({2:"src-webpack-github-page-spa-404-issue",3:"src-webpack-plugin-copy-webpack-plugin",4:"src-webpack-webpack-optimization"}[e]||e)+"."+{2:"7e5981d3",3:"9bc09f55",4:"b5e52644"}[e]+".js"}function z(n){if(D[n])return D[n].exports;var t=D[n]={i:n,l:!1,exports:{},hot:u(n),parents:(p=s,s=[],p),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=D[e];if(!n)return z;var t=function(t){return n.hot.active?(D[t]?-1===D[t].parents.indexOf(e)&&D[t].parents.push(e):(s=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),s=[]),z(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return z[e]},set:function(n){z[e]=n}}};for(var i in z)Object.prototype.hasOwnProperty.call(z,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,r(i));return t.e=function(e){return"ready"===f&&h("prepare"),v++,z.e(e).then(n,function(e){throw n(),e});function n(){v--,"prepare"===f&&(y[e]||j(e),0===v&&0===w&&P())}},t.t=function(e,n){return 1&n&&(e=t(e)),z.t(e,-2&n)},t}(n)),t.l=!0,t.exports}z.e=function(e){var n=[],t=A[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=A[e]=[n,r]});n.push(t[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,z.nc&&i.setAttribute("nonce",z.nc),i.src=S(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous"),o=function(n){i.onerror=i.onload=null,clearTimeout(c);var t=A[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}A[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},z.m=e,z.c=D,z.d=function(e,n,t){z.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},z.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},z.t=function(e,n){if(1&n&&(e=z(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(z.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)z.d(t,r,function(n){return e[n]}.bind(null,r));return t},z.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return z.d(n,"a",n),n},z.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},z.p="/frontend-stories/",z.oe=function(e){throw console.error(e),e},z.h=function(){return c};var I=window.webpackJsonp=window.webpackJsonp||[],M=I.push.bind(I);I.push=n,I=I.slice();for(var C=0;C<I.length;C++)n(I[C]);var T=M;n([[],{},0,[0,2,3,4]]),H.push([0,0]),t()}({"./.docz/app/db.json":function(e){e.exports={config:{title:"Frontend Stories",description:"My personal frontend stories, about work, issues and ideas.",menu:[],version:"0.0.1",repository:"https://github.com/ifiknew/frontend-stories",native:!1,codeSandbox:!0,themeConfig:{},separator:"-",dest:"/docs",indexHtml:"/Users/liliuyun/git/frontend-stories/template/index.ejs"},props:[],entries:[{key:"src/webpack/github page SPA 404 issue.mdx",value:{menu:"webpack",createAt:"2019-04-21T00:00:00.000Z",id:"e8a55bb3e63f1c0c8982892056fa326b",filepath:"src/webpack/github page SPA 404 issue.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/webpack/github page SPA 404 issue.mdx",slug:"src-webpack-github-page-spa-404-issue",route:"/frontend-stories/src-webpack-github-page-spa-404-issue",name:"Github page spa 404 issue",headings:[{slug:"github-pages-\u5355\u9875\u5e94\u7528\u95ee\u9898",depth:1,value:"github pages \u5355\u9875\u5e94\u7528\u95ee\u9898"},{slug:"background",depth:2,value:"Background"},{slug:"solution",depth:2,value:"Solution"},{slug:"redirect",depth:3,value:"redirect"},{slug:"snapshot",depth:3,value:"snapshot"},{slug:"multiple-indexhtml",depth:3,value:"multiple index.html"},{slug:"reference",depth:2,value:"Reference"}]}},{key:"src/webpack/webpack optimization.mdx",value:{menu:"webpack",createAt:"2019-04-20T00:00:00.000Z",id:"08a82ef1beeea0d899ef189223948239",filepath:"src/webpack/webpack optimization.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/webpack/webpack optimization.mdx",slug:"src-webpack-webpack-optimization",route:"/frontend-stories/src-webpack-webpack-optimization",name:"Webpack optimization",headings:[{slug:"\u57fa\u4e8ewebpack-4-\u7684\u914d\u7f6e\u4f18\u5316",depth:1,value:"\u57fa\u4e8ewebpack 4 \u7684\u914d\u7f6e\u4f18\u5316"}]}},{key:"src/webpack/plugin/CopyWebpackPlugin.mdx",value:{menu:"webpack/plugin",createAt:"2019-04-21T00:00:00.000Z",id:"032affdc00c31ed4997c582378a2bc84",filepath:"src/webpack/plugin/CopyWebpackPlugin.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/webpack/plugin/CopyWebpackPlugin.mdx",slug:"src-webpack-plugin-copy-webpack-plugin",route:"/frontend-stories/src-webpack-plugin-copy-webpack-plugin",name:"Copy webpack plugin",headings:[]}}]}},"./.docz/app/index.jsx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/_react@16.8.6@react/index.js"),o=t.n(r),i=t("./node_modules/_react-dom@16.8.6@react-dom/index.js"),c=t.n(i),a=t("./node_modules/_docz@1.0.4@docz/dist/index.esm.js"),d=t("./node_modules/_docz-theme-default@1.0.4@docz-theme-default/dist/index.esm.js"),s={"src/webpack/github page SPA 404 issue.mdx":function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"./src/webpack/github page SPA 404 issue.mdx"))},"src/webpack/webpack optimization.mdx":function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"./src/webpack/webpack optimization.mdx"))},"src/webpack/plugin/CopyWebpackPlugin.mdx":function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"./src/webpack/plugin/CopyWebpackPlugin.mdx"))}},p=t("./.docz/app/db.json"),u=function(){return o.a.createElement(d.a,{linkComponent:a.b,db:p},o.a.createElement(a.c,{imports:s}))},l=[],f=[],h=function(){return f.forEach(function(e){return e&&e()})},b=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;l.forEach(function(e){return e&&e()}),c.a.render(o.a.createElement(e,null),b,h)}(u)},0:function(e,n,t){e.exports=t("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.ffdbb22e8088b8ffb922.js.map