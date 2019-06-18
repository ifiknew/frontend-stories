!function(e){function t(t){for(var n,i,o=t[0],c=t[1],s=t[2],a=t[3]||[],d=0,p=[];d<o.length;d++)i=o[d],D[i]&&p.push(D[i][0]),D[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(U&&U(t),a.forEach(function(e){if(void 0===D[e]){D[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",A.nc&&t.setAttribute("nonce",A.nc),t.rel="prefetch",t.as="script",t.href=T(e),document.head.appendChild(t)}});p.length;)p.shift()();return C.push.apply(C,s||[]),r()}function r(){for(var e,t=0;t<C.length;t++){for(var r=C[t],n=!0,i=1;i<r.length;i++){var o=r[i];0!==D[o]&&(n=!1)}n&&(C.splice(t--,1),e=A(A.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!x[e]||!k[e])return;for(var r in k[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(m[r]=t[r]);0===--v&&0===y&&_()}(e,t),n&&n(e,t)};var i,o=!0,c="babacc9c1c7f7e9aedce",s=1e4,a={},d=[],p=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:P,apply:E,status:function(e){if(!e)return h;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:a[e]};return i=void 0,t}var l=[],h="idle";function f(e){h=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var g,m,b,v=0,y=0,w={},k={},x={};function j(e){return+e+""===e?+e:e}function P(e){if("idle"!==h)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=s,t=t||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,i=A.p+""+c+".hot-update.json";n.open("GET",i,!0),n.timeout=t,n.send(null)}catch(o){return r(o)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(o){return void r(o)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;k={},w={},x=e.c,b=e.h,f("prepare");var t=new Promise(function(e,t){g={resolve:e,reject:t}});for(var r in m={},D)O(r);return"prepare"===h&&0===y&&0===v&&_(),t});var t}function O(e){x[e]?(k[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+c+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):w[e]=!0}function _(){f("ready");var e=g;if(g=null,e)if(o)Promise.resolve().then(function(){return E(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&t.push(j(r));e.resolve(t)}}function E(t){if("ready"!==h)throw new Error("apply() is only allowed in ready status");var r,n,i,o,s;function p(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var i=n.pop(),c=i.id,s=i.chain;if((o=S[c])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:c};if(o.hot._main)return{type:"unaccepted",chain:s,moduleId:c};for(var a=0;a<o.parents.length;a++){var d=o.parents[a],p=S[d];if(p){if(p.hot._declinedDependencies[c])return{type:"declined",chain:s.concat([d]),moduleId:c,parentId:d};-1===t.indexOf(d)&&(p.hot._acceptedDependencies[c]?(r[d]||(r[d]=[]),u(r[d],[c])):(delete r[d],t.push(d),n.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var l={},g=[],v={},y=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var w in m)if(Object.prototype.hasOwnProperty.call(m,w)){var k;s=j(w);var P=!1,O=!1,_=!1,E="";switch((k=m[w]?p(s):{type:"disposed",moduleId:w}).chain&&(E="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+k.moduleId+E));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+E));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(P=new Error("Aborted because "+s+" is not accepted"+E));break;case"accepted":t.onAccepted&&t.onAccepted(k),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),_=!0;break;default:throw new Error("Unexception type "+k.type)}if(P)return f("abort"),Promise.reject(P);if(O)for(s in v[s]=m[s],u(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,s)&&(l[s]||(l[s]=[]),u(l[s],k.outdatedDependencies[s]));_&&(u(g,[k.moduleId]),v[s]=y)}var C,T=[];for(n=0;n<g.length;n++)s=g[n],S[s]&&S[s].hot._selfAccepted&&T.push({module:s,errorHandler:S[s].hot._selfAccepted});f("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete D[e]}(e)});for(var I,H,z=g.slice();z.length>0;)if(s=z.pop(),o=S[s]){var U={},M=o.hot._disposeHandlers;for(i=0;i<M.length;i++)(r=M[i])(U);for(a[s]=U,o.hot.active=!1,delete S[s],delete l[s],i=0;i<o.children.length;i++){var q=S[o.children[i]];q&&((C=q.parents.indexOf(s))>=0&&q.parents.splice(C,1))}}for(s in l)if(Object.prototype.hasOwnProperty.call(l,s)&&(o=S[s]))for(H=l[s],i=0;i<H.length;i++)I=H[i],(C=o.children.indexOf(I))>=0&&o.children.splice(C,1);for(s in f("apply"),c=b,v)Object.prototype.hasOwnProperty.call(v,s)&&(e[s]=v[s]);var W=null;for(s in l)if(Object.prototype.hasOwnProperty.call(l,s)&&(o=S[s])){H=l[s];var B=[];for(n=0;n<H.length;n++)if(I=H[n],r=o.hot._acceptedDependencies[I]){if(-1!==B.indexOf(r))continue;B.push(r)}for(n=0;n<B.length;n++){r=B[n];try{r(H)}catch(R){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:H[n],error:R}),t.ignoreErrored||W||(W=R)}}}for(n=0;n<T.length;n++){var L=T[n];s=L.module,d=[s];try{A(s)}catch(R){if("function"===typeof L.errorHandler)try{L.errorHandler(R)}catch(F){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:F,originalError:R}),t.ignoreErrored||W||(W=F),W||(W=R)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:R}),t.ignoreErrored||W||(W=R)}}return W?(f("fail"),Promise.reject(W)):(f("idle"),new Promise(function(e){e(g)}))}var S={},D={1:0},C=[];function T(e){return A.p+"static/js/"+({2:"src-github-github-projects",3:"src-nodejs-to-develop-a-cli",4:"src-others-todo-list",5:"src-others-tools",6:"src-typescript-an-experience-with-react-docgen-typescript",7:"src-typescript-dependency-injection",8:"src-typescript-typescript-architectural-overview",9:"src-webpack-github-page-spa-404-issue",10:"src-webpack-plugin-copy-webpack-plugin",11:"src-webpack-webpack-optimization"}[e]||e)+"."+{2:"96887c6a",3:"060533ad",4:"4e2025a6",5:"744186d4",6:"ccf3d2c9",7:"2ebfd199",8:"11739d61",9:"18e3d82a",10:"2a75ac09",11:"194d72e9"}[e]+".js"}function A(t){if(S[t])return S[t].exports;var r=S[t]={i:t,l:!1,exports:{},hot:u(t),parents:(p=d,d=[],p),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=S[e];if(!t)return A;var r=function(r){return t.hot.active?(S[r]?-1===S[r].parents.indexOf(e)&&S[r].parents.push(e):(d=[e],i=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),d=[]),A(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,n(o));return r.e=function(e){return"ready"===h&&f("prepare"),y++,A.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===h&&(w[e]||O(e),0===y&&0===v&&_())}},r.t=function(e,t){return 1&t&&(e=r(e)),A.t(e,-2&t)},r}(t)),r.l=!0,r.exports}A.e=function(e){var t=[],r=D[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=D[e]=[t,n]});t.push(r[2]=n);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,A.nc&&o.setAttribute("nonce",A.nc),o.src=T(e),0!==o.src.indexOf(window.location.origin+"/")&&(o.crossOrigin="anonymous"),i=function(t){o.onerror=o.onload=null,clearTimeout(c);var r=D[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,r[1](s)}D[e]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:o})},12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(t)},A.m=e,A.c=S,A.d=function(e,t,r){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(A.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)A.d(r,n,function(t){return e[t]}.bind(null,n));return r},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/frontend-stories/",A.oe=function(e){throw console.error(e),e},A.h=function(){return c};var I=window.webpackJsonp=window.webpackJsonp||[],H=I.push.bind(I);I.push=t,I=I.slice();for(var z=0;z<I.length;z++)t(I[z]);var U=H;t([[],{},0,[0,2,3,4,5,6,7,8,9,10,11]]),C.push([0,0]),r()}({"./.docz/app/db.json":function(e){e.exports={config:{title:"Frontend Stories",description:"My personal frontend stories, about work, issues and ideas.",menu:[],version:"0.0.1",repository:"https://github.com/ifiknew/frontend-stories",native:!1,codeSandbox:!0,themeConfig:{},separator:"-",dest:"/docs",indexHtml:"/Users/liliuyun/git/frontend-stories/template/index.ejs"},props:[],entries:[{key:"src/github/github projects.mdx",value:{menu:"github",id:"65ca531267c078bf1da9c2a06e59ec37",filepath:"src/github/github projects.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/github/github projects.mdx",slug:"src-github-github-projects",route:"/frontend-stories/src-github-github-projects",name:"Github projects",headings:[]}},{key:"src/nodejs/to develop a cli.mdx",value:{menu:"nodejs",id:"e00b3d96d2a208304b2593e7ebf61b38",filepath:"src/nodejs/to develop a cli.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/nodejs/to develop a cli.mdx",slug:"src-nodejs-to-develop-a-cli",route:"/frontend-stories/src-nodejs-to-develop-a-cli",name:"To develop a cli",headings:[{slug:"apis",depth:2,value:"APIs"}]}},{key:"src/others/todo list.mdx",value:{menu:"others",id:"f048a8fffccd4e66e87ecd850318efb7",filepath:"src/others/todo list.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/others/todo list.mdx",slug:"src-others-todo-list",route:"/frontend-stories/src-others-todo-list",name:"Todo list",headings:[]}},{key:"src/others/tools.mdx",value:{menu:"others",id:"c7f9aa0b1569835c9879a6b6d9bd492e",filepath:"src/others/tools.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/others/tools.mdx",slug:"src-others-tools",route:"/frontend-stories/src-others-tools",name:"Tools",headings:[{slug:"tools",depth:1,value:"tools"},{slug:"editor---vs-code",depth:3,value:"Editor - VS Code"},{slug:"terminal---iterm--zsh",depth:3,value:"Terminal - iTerm & zsh"},{slug:"env",depth:3,value:"Env"},{slug:"database",depth:3,value:"Database"},{slug:"others",depth:3,value:"Others"},{slug:"entertainment",depth:3,value:"Entertainment"}]}},{key:"src/typescript/an experience with react-docgen-typescript.mdx",value:{menu:"typescript",id:"2ed3a1c4e9f55e634c757128a2dd22a4",filepath:"src/typescript/an experience with react-docgen-typescript.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/typescript/an experience with react-docgen-typescript.mdx",slug:"src-typescript-an-experience-with-react-docgen-typescript",route:"/frontend-stories/src-typescript-an-experience-with-react-docgen-typescript",name:"An experience with react docgen typescript",headings:[{slug:"\u8bb0\u5f55\u4e00\u6b21react-docgen-typescript\u7ecf\u5386",depth:1,value:"\u8bb0\u5f55\u4e00\u6b21react-docgen-typescript\u7ecf\u5386"},{slug:"background",depth:2,value:"Background"},{slug:"understanding-parsewithprogramprovider",depth:2,value:"Understanding parseWithProgramProvider"},{slug:"typescript-api",depth:2,value:"Typescript API"},{slug:"understanding-getcomponentinfo",depth:2,value:"Understanding getComponentInfo"},{slug:"understanding-extractpropsfromtypeifstatelesscomponent",depth:2,value:"Understanding extractPropsFromTypeIfStatelessComponent"},{slug:"understanding-extractpropsfromtypeifstatefulcomponent",depth:2,value:"Understanding extractPropsFromTypeIfStatefulComponent"},{slug:"understanding-typescript",depth:2,value:"Understanding typescript"},{slug:"conclusion",depth:2,value:"Conclusion"}]}},{key:"src/typescript/dependency injection.mdx",value:{menu:"typescript",id:"53a35b27a2197e69019d46001098899c",filepath:"src/typescript/dependency injection.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/typescript/dependency injection.mdx",slug:"src-typescript-dependency-injection",route:"/frontend-stories/src-typescript-dependency-injection",name:"Dependency injection",headings:[{slug:"typescript\u4f9d\u8d56\u6ce8\u5165",depth:1,value:"Typescript\u4f9d\u8d56\u6ce8\u5165"},{slug:"background",depth:2,value:"Background"},{slug:"theory",depth:2,value:"Theory"},{slug:"problem",depth:2,value:"Problem"},{slug:"solution",depth:2,value:"Solution"},{slug:"in-the-deep",depth:2,value:"In the deep"}]}},{key:"src/typescript/typescript architectural overview.mdx",value:{menu:"typescript",id:"3e39d8587954ab74bddc24ecc3d962fb",filepath:"src/typescript/typescript architectural overview.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/typescript/typescript architectural overview.mdx",slug:"src-typescript-typescript-architectural-overview",route:"/frontend-stories/src-typescript-typescript-architectural-overview",name:"Typescript architectural overview",headings:[{slug:"typescript\u67b6\u6784\u6982\u89c8",depth:1,value:"Typescript\u67b6\u6784\u6982\u89c8"},{slug:"background",depth:2,value:"Background"},{slug:"layers",depth:2,value:"Layers"},{slug:"core-typescript-compiler",depth:4,value:"Core TypeScript Compiler"},{slug:"standalone-typescript-compiler",depth:4,value:"Standalone TypeScript Compiler"},{slug:"language-service",depth:4,value:"Language Service"},{slug:"data-structures",depth:2,value:"Data Structures"},{slug:"program",depth:4,value:"Program"}]}},{key:"src/webpack/github page SPA 404 issue.mdx",value:{menu:"webpack",id:"e8a55bb3e63f1c0c8982892056fa326b",filepath:"src/webpack/github page SPA 404 issue.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/webpack/github page SPA 404 issue.mdx",slug:"src-webpack-github-page-spa-404-issue",route:"/frontend-stories/src-webpack-github-page-spa-404-issue",name:"Github page spa 404 issue",headings:[{slug:"github-pages-\u5355\u9875\u5e94\u7528\u95ee\u9898",depth:1,value:"github pages \u5355\u9875\u5e94\u7528\u95ee\u9898"},{slug:"background",depth:2,value:"Background"},{slug:"solution",depth:2,value:"Solution"},{slug:"redirect",depth:3,value:"redirect"},{slug:"snapshot",depth:3,value:"snapshot"},{slug:"multiple-indexhtml",depth:3,value:"multiple index.html"},{slug:"reference",depth:2,value:"Reference"}]}},{key:"src/webpack/webpack optimization.mdx",value:{menu:"webpack",id:"08a82ef1beeea0d899ef189223948239",filepath:"src/webpack/webpack optimization.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/webpack/webpack optimization.mdx",slug:"src-webpack-webpack-optimization",route:"/frontend-stories/src-webpack-webpack-optimization",name:"Webpack optimization",headings:[{slug:"\u57fa\u4e8ewebpack-4-\u7684\u914d\u7f6e\u4f18\u5316",depth:1,value:"\u57fa\u4e8ewebpack 4 \u7684\u914d\u7f6e\u4f18\u5316"},{slug:"background",depth:2,value:"Background"},{slug:"configuration",depth:2,value:"Configuration"},{slug:"config-file",depth:3,value:"Config File"},{slug:"babel-with-ts-support",depth:3,value:"Babel with TS Support"},{slug:"terser",depth:3,value:"Terser"},{slug:"splitchunkplugincore",depth:3,value:"SplitChunkPlugin(core)"}]}},{key:"src/webpack/plugin/CopyWebpackPlugin.mdx",value:{menu:"webpack/plugin",id:"032affdc00c31ed4997c582378a2bc84",filepath:"src/webpack/plugin/CopyWebpackPlugin.mdx",link:"https://github.com/ifiknew/frontend-stories/edit/master/src/webpack/plugin/CopyWebpackPlugin.mdx",slug:"src-webpack-plugin-copy-webpack-plugin",route:"/frontend-stories/src-webpack-plugin-copy-webpack-plugin",name:"Copy webpack plugin",headings:[{slug:"copywebpackplugin-\u7528\u6cd5",depth:1,value:"CopyWebpackPlugin \u7528\u6cd5"},{slug:"signature",depth:2,value:"Signature"},{slug:"usage",depth:2,value:"Usage"}]}}]}},"./.docz/app/index.jsx":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/_react@16.8.6@react/index.js"),i=r.n(n),o=r("./node_modules/_react-dom@16.8.6@react-dom/index.js"),c=r.n(o),s=r("./node_modules/_docz@1.0.4@docz/dist/index.esm.js"),a=r("./node_modules/_docz-theme-default@1.0.4@docz-theme-default/dist/index.esm.js"),d={"src/github/github projects.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./src/github/github projects.mdx"))},"src/nodejs/to develop a cli.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./src/nodejs/to develop a cli.mdx"))},"src/others/todo list.mdx":function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"./src/others/todo list.mdx"))},"src/others/tools.mdx":function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"./src/others/tools.mdx"))},"src/typescript/an experience with react-docgen-typescript.mdx":function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"./src/typescript/an experience with react-docgen-typescript.mdx"))},"src/typescript/dependency injection.mdx":function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"./src/typescript/dependency injection.mdx"))},"src/typescript/typescript architectural overview.mdx":function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"./src/typescript/typescript architectural overview.mdx"))},"src/webpack/github page SPA 404 issue.mdx":function(){return Promise.all([r.e(0),r.e(9)]).then(r.bind(null,"./src/webpack/github page SPA 404 issue.mdx"))},"src/webpack/webpack optimization.mdx":function(){return Promise.all([r.e(0),r.e(11)]).then(r.bind(null,"./src/webpack/webpack optimization.mdx"))},"src/webpack/plugin/CopyWebpackPlugin.mdx":function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,"./src/webpack/plugin/CopyWebpackPlugin.mdx"))}},p=r("./.docz/app/db.json"),u=function(){return i.a.createElement(a.a,{linkComponent:s.b,db:p},i.a.createElement(s.c,{imports:d}))},l=[],h=[],f=function(){return h.forEach(function(e){return e&&e()})},g=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;l.forEach(function(e){return e&&e()}),c.a.render(i.a.createElement(e,null),g,f)}(u)},0:function(e,t,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.babacc9c1c7f7e9aedce.js.map