(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/webpack/github page SPA 404 issue.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var r=a("./node_modules/_@babel_runtime@7.4.3@@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(a("./node_modules/_react@16.8.6@react/index.js"),a("./node_modules/_@mdx-js_react@1.0.6@@mdx-js/react/dist/index.es.js")),b={},s="wrapper";function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(s,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"github-pages-\u5355\u9875\u5e94\u7528\u95ee\u9898"},"github pages \u5355\u9875\u5e94\u7528\u95ee\u9898"),Object(n.b)("h2",{id:"background"},"Background"),Object(n.b)("p",null,"\u6700\u8fd1\u60f3\u7528docz\u6765\u7ba1\u7406markdowns\u5e76\u5728github.io\u4e0a\u90e8\u7f72\uff0c\n\u57fa\u672c\u6b65\u9aa4\u6ca1\u6709\u4efb\u4f55\u95ee\u9898:",Object(n.b)("br",{parentName:"p"}),"\n","1. \u65b0\u5efagithub\u4ed3\u5e93",Object(n.b)("br",{parentName:"p"}),"\n","2. \u5f80master\u5206\u652f\u63a8\u9001\u9759\u6001\u8d44\u6e90\uff0c\u5982html\uff0cjs\uff0ccss\uff0c\u5982\u679c\u4e0d\u5e0c\u671b\u76f4\u63a5\u4f7f\u7528\u6839\u76ee\u5f55\u6765\u90e8\u7f72\uff0c\u5219\u65b0\u5efa/docs\u76ee\u5f55\u5e76\u79fb\u5165\u8fd9\u4e9b\u9759\u6001\u8d44\u6e90",Object(n.b)("br",{parentName:"p"}),"\n","3. \u5728github\u4ed3\u5e93\u7684setting\u9875\u4e2d\u8bbe\u7f6e\u4f7f\u7528master\u5206\u652f\u7684/docs\u76ee\u5f55\u5c55\u793agithub pages  "),Object(n.b)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u9875\u9762\u663e\u793a\u4e86\uff0c\u70b9\u51fb\u8df3\u8f6c\u4e5f\u6ca1\u6709\u51fa\u73b0\u4efb\u4f55\u95ee\u9898\u3002\u7136\u800c\uff0c\u5929\u6709\u4e0d\u6d4b\u98ce\u4e91\uff0c\u5237\u65b0\u9875\u9762\u5c31404\u4e86\u3002\n\u539f\u7406\u5f88\u7b80\u5355\uff0cgithub pages\u5bf9\u4e8e\u6211\u4eec\u90e8\u7f72\u7684\u8d44\u6e90\u6765\u8bf4\u76f8\u5f53\u4e8e\u4e00\u4e2a\u6587\u4ef6\u670d\u52a1\u5668\uff0c\n\u5047\u8bbe\u6211\u4eec\u8bbf\u95ee\u7684\u8def\u5f84\u662f/repo/dir\uff0c\u7531\u4e8e\u6211\u4eec\u7684html\u6587\u4ef6\u53ea\u8f93\u51fa\u5728\u4e86/repo/index.html\uff0c\u5728\u5bfb\u627e/repo/dir/index.html\u7684\u65f6\u5019Not Found\u4e86\u3002\u901a\u5e38\u6211\u4eec\u5728\u8f93\u51faSPA\u7684\u65f6\u5019\u4f1a\u4f7f\u7528get('*', callback)\u6765\u5c06\u6240\u6709\u7684\u8def\u5f84\u6620\u5c04\u5230\u540c\u6837\u7684\u9759\u6001\u8d44\u6e90\u6587\u4ef6\uff0c\u7136\u800c\u5728github pages\u4e0d\u80fd\u505a\u8fd9\u79cd\u64cd\u4f5c\u3002"),Object(n.b)("h2",{id:"solution"},"Solution"),Object(n.b)("p",null,"\u80fd\u8003\u8651\u4e00\u4e9b\u65b9\u6848\u5982\u4e0b:  "),Object(n.b)("h3",{id:"redirect"},"redirect"),Object(n.b)("p",null,"\u91c7\u7528404.html\u91cd\u5b9a\u5411\u7684\u65b9\u6848\u3002\u8fd9\u79cd\u65b9\u6848\u53ef\u80fd\u6709\u591a\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4f46\u662f\u6838\u5fc3\u601d\u60f3\u662f\u4e00\u81f4\u7684\u3002\u5728404\u9875\u9762\u8bb0\u5f55\u5f53\u524d\u7684url\uff08\u4f8b\u5982\u91c7\u7528H5 storage\u65b9\u6848\uff09\uff0c\u8df3\u8f6c\u5230\u6839\u76ee\u5f55\uff08\u53e6\u4e00\u79cd\u53ef\u884c\u7684\u65b9\u6848\u662f\u7528search params\u7684\u65b9\u5f0f\u6765\u8bb0\u5f55\uff09\u3002\u6839\u76ee\u5f55\u7684index.html\u9875\u9762\u83b7\u53d6\u8bb0\u5f55\u7684url\u5e76\u91c7\u7528history API\u8fdb\u884c\u8df3\u8f6c\u3002\u5728\u8fd9\u79cd\u601d\u8def\u4e0b\u7ed9\u51fa\u7684\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff1a  "),Object(n.b)("p",null,"\u81ea\u5b9a\u4e49404.html,\u8981\u6c42head\u5305\u542b\u5982\u4e0b\u5185\u5bb9"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),'<script>\n  sessionStorage.redirect = location.href;\n<\/script>\n<meta http-equiv="refresh" content="0;URL=\'/REPO_NAME\'"></meta>\n')),Object(n.b)("p",null,"\u8868\u793a\u5728\u8fdb\u5165\u9875\u9762\u540e\u76840\u79d2\u65f6\u8fdb\u884c\u5237\u65b0\uff0c\u65b0\u7684url\u662f/REPO_NAME",Object(n.b)("br",{parentName:"p"}),"\n","\u5728index.html\u7684head\u4e2d\u5305\u542b\u5982\u4e0b\u5185\u5bb9"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{}),"<script>\n  (function(){\n    var redirect = sessionStorage.redirect;\n    delete sessionStorage.redirect;\n    if (redirect && redirect != location.href) {\n      history.replaceState(null, null, redirect);\n    }\n  })();\n<\/script>\n")),Object(n.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u51fd\u6570\uff0c\u83b7\u53d6\u521a\u624d\u5728404\u9875\u9762\u4fdd\u5b58\u7684url\u5e76\u4f7f\u7528history API \u8fdb\u884c\u8df3\u8f6c\uff08\u73b0\u5728\u7684SPA\u5e38\u7528\u7684\u65b9\u6cd5\uff09"),Object(n.b)("h3",{id:"snapshot"},"snapshot"),Object(n.b)("p",null,"\u4f7f\u7528\u5feb\u7167\u6280\u672f\u751f\u6210\u9875\u9762\u7684\u65b9\u6848\u3002\u7531\u4e8egithub pages\u4e2d\u6211\u4eec\u6ca1\u529e\u6cd5\u4f7f\u7528SSR\u6765\u8fdb\u884cSEO\uff0c\u4f46\u662f\u4f7f\u7528\u5feb\u7167\u6280\u672f\u4e5f\u53ef\u4ee5\u652f\u6301SEO\uff0c\u7f3a\u70b9\u662f\u9700\u8981\u5f15\u5165\u5176\u4ed6\u7684\u5916\u90e8\u6269\u5c55\u3002\u8fd9\u91cc\u63d0\u4f9b\u4e00\u79cd\u65b9\u6848\u662f",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/esalter-va/webpack-static-site-generator"}),"StaticSiteGenerator"),"\u3002\u8be5plugin\u7684\u4f5c\u8005\u4e5f\u9610\u8ff0\u4e86\u8be5\u65b9\u6848\u7684\u57fa\u672c\u539f\u7406\uff1a"),Object(n.b)("blockquote",null,Object(n.b)("ol",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ol"},"Serves the specified output directory using express"),Object(n.b)("li",{parentName:"ol"},"Loads each provided route using Nightmare"),Object(n.b)("li",{parentName:"ol"},"Saves the HTML of each route to the filesystem"))),Object(n.b)("h3",{id:"multiple-indexhtml"},"multiple index.html"),Object(n.b)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u6848\u5c31\u662f\u628a\u6240\u6709\u53ef\u80fd\u7684\u8def\u7531\u7528CopyWebpackPlugin\u7684\u65b9\u5f0f\u5c06index.html\u6587\u4ef6\u590d\u5236\u5230\u5404\u4e2a\u4f4d\u7f6e\u4e86\u3002\u4e2a\u4eba\u89c9\u5f97\u5982\u679c\u90fd\u662fSPA\u4e0d\u8003\u8651SEO\u7684\u8bdd\uff0credirect\u65b9\u6848\u4f1a\u6bd4\u8fd9\u4e2a\u65b9\u6848\u8212\u670d\u4e00\u70b9\u3002"),Object(n.b)("h2",{id:"reference"},"Reference"),Object(n.b)("p",null,Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/rafrex/spa-github-pages"}),"https://github.com/rafrex/spa-github-pages"),Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://www.backalleycoder.com/2016/05/13/sghpa-the-single-page-app-hack-for-github-pages/"}),"http://www.backalleycoder.com/2016/05/13/sghpa-the-single-page-app-hack-for-github-pages/"),Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://dev.to/_evansalter/github-pages-and-single-page-apps"}),"https://dev.to/_evansalter/github-pages-and-single-page-apps"),Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/esalter-va/webpack-static-site-generator"}),"https://github.com/esalter-va/webpack-static-site-generator"),"  "))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/webpack/github page SPA 404 issue.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=src-webpack-github-page-spa-404-issue.ffdbb22e8088b8ffb922.js.map