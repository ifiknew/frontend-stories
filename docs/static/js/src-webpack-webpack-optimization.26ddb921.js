(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/webpack/webpack optimization.mdx":function(e,t,b){"use strict";b.r(t),b.d(t,"default",function(){return i});var n=b("./node_modules/_@babel_runtime@7.4.3@@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=(b("./node_modules/_react@16.8.6@react/index.js"),b("./node_modules/_@mdx-js_react@1.0.6@@mdx-js/react/dist/index.es.js")),o={},a="wrapper";function i(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(c.b)(a,Object.assign({},o,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"\u57fa\u4e8ewebpack-4-\u7684\u914d\u7f6e\u4f18\u5316"},"\u57fa\u4e8ewebpack 4 \u7684\u914d\u7f6e\u4f18\u5316"),Object(c.b)("h2",{id:"background"},"Background"),Object(c.b)("p",null,"\u4ece\u6765\u6ca1\u60f3\u8fc7\u4f1a\u6709\u4e00\u592916G\u5185\u5b584\u6838\u5fc3\u4f1a\u5e26\u4e0d\u52a8\u4e00\u4e2a\u524d\u7aef\u9879\u76ee\u3002\u4e8b\u5b9e\u4e0a\u6211\u7684\u4e2a\u4eba\u60c5\u51b5\u662f\uff0c\u5de5\u4f5c\u4e2d\u6bcf\u6b21\u4fee\u6539\u4fdd\u5b58\u90fd\u9700\u8981\u518d\u6b21\u7f16\u8bd12\u5206\u949f\u4ee5\u4e0a\uff0c\u8fd9\u662f\u4e0d\u53ef\u5bb9\u5fcd\u7684\u3002\u4e8e\u662f\u8fdb\u884c\u4e86webpack4\u7684\u5347\u7ea7\u3002\uff08\u4e0d\u8fc7\u6211\u89c9\u5f97\u8981\u662f\u7269\u8d44\u90a3\u91cc\u613f\u610f\u7ed9\u6211\u91cd\u65b0\u914d\u4e00\u53f032G\u5185\u5b588\u6838\u5fc3\u7684\u7535\u8111\u4e5f\u662f\u6781\u597d\u7684\uff09"),Object(c.b)("h2",{id:"configuration"},"Configuration"),Object(c.b)("p",null,"\u5347\u7ea7\u5230webpack4\uff0c\u4e3b\u8981\u53c2\u7167\u4e86create-react-app\u5bf9\u4e8ewebpack4\u7684\u76f8\u5173\u914d\u7f6e\u8fdb\u884c\uff0c\u4ee5\u4e0b\u4f7f\u7528CRA\u6765\u4ee3\u6307\u3002\u4e00\u4e2a\u9898\u5916\u8bdd\u662f\u5f53\u6211\u5f00\u59cb\u8fdb\u884c\u4f18\u5316\u7684\u8fc7\u7a0b\u4e2d\u53d1\u751f\u4e86\u4e24\u4e2a\u5927\u4e8b\u4ef6\uff0c\u4e00\u662fCRA\u53d1\u5e03\u4e86\u7248\u672cv3\uff1b\u4e8c\u662fNodejs\u53d1\u5e03\u4e86v12.0\u3002CRA\u5728v2+\u7248\u672c\u7684\u5347\u7ea7\u4e2d\u4e3b\u8981\u5982\u4e0b\u7684\u53d8\u5316\u3002"),Object(c.b)("h3",{id:"config-file"},"Config File"),Object(c.b)("p",null,"\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0cconfig\u6587\u4ef6\u5206\u4e3adev\u548cpro\u4e24\u4e2a\u7248\u672c\u5206\u522b\u7ef4\u62a4\uff0c\u5728\u65b0\u7248\u672c\u4e2dconfig\u4e2d\u9ed8\u8ba4\u5bfc\u51fa\u7684\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u7b7e\u540d\u4e3a\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{}),"(env: 'develop' | 'production') => WebpackConfig\n")),Object(c.b)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u5c31\u662f\u4e00\u4e2a\u53ef\u4ee5\u4ea7\u751f\u4e24\u79cd\u73af\u5883\u4e0bwebpack config\u7684\u7b80\u5355\u5de5\u5382\u3002\u5728\u65e5\u5e38\u7684\u914d\u7f6e\u5de5\u4f5c\u4e2d\uff0c\u7ecf\u5e38\u4f1a\u62c5\u5fc3\u6539\u4e86\u4e00\u4e2a\u73af\u5883\u7684config\u5fd8\u4e86\u6539\u53e6\u5916\u4e00\u4e2a\uff0c\u73b0\u5728\u7684\u65b9\u5f0f\u80fd\u591f\u5f88\u597d\u7684\u907f\u514d\u8fd9\u70b9\uff0c\u51cf\u5c11\u5728\u914d\u7f6e\u65f6\u7684\u5173\u6ce8\u70b9\uff0c\u964d\u4f4e\u51fa\u9519\u7684\u6982\u7387\u3002\u76f8\u5e94\u5730\uff0c\u7531\u4e8econfig\u7684\u83b7\u53d6\u5f62\u5f0f\u53d1\u751f\u53d8\u5316\uff0c\u5728scripts\u6587\u4ef6\u5939\u4e0b\u7684start\u548cbuild\u811a\u672c\u4e5f\u8fdb\u884c\u4e86\u76f8\u5e94\u66f4\u6539\u3002"),Object(c.b)("h3",{id:"babel-with-ts-support"},"Babel with TS Support"),Object(c.b)("p",null,"\u5728\u65b0\u7248\u7684Babel\u4e2d\u52a0\u5165\u4e86\u5bf9ts\u7684\u652f\u6301\uff0c\u6240\u4ee5\u9879\u76ee\u5728\u5347\u7ea7\u65f6\u53ef\u4ee5\u4e22\u5f03\u6389ts-loader\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u76f4\u63a5\u4f7f\u7528babel-loader\u3002\u6ce8\u610f\u914d\u7f6e\u76f8\u5173\u7684preset\uff08\u53ef\u4ee5\u4f7f\u7528CRA\u63d0\u4f9b\u7684'react-app'\u8fd9\u4e2apreset\uff0c\u57fa\u672c\u56ca\u62ec\u4e86\u6240\u6709\u7684\u9700\u6c42\uff09\u3002\u9700\u8981\u6ce8\u610f\u7684\u662fbabel\u53ea\u9488\u5bf9\u5355\u6587\u4ef6\u8fdb\u884c\u8f6c\u6362\uff0c\u5e76\u6ca1\u6709\u5206\u6790\u6a21\u5757\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u5f62\u6210\u4e86\u4e8b\u5b9e\u4e0a\u7684isolatedModules\u3002\n\u5728\u4f7f\u7528babel\u5bf9\u9879\u76ee\u5185\u7684js\u6587\u4ef6\u505a\u8f6c\u6362\u7684\u540c\u65f6\uff0c\u5e94\u8be5\u5bf9\u4e00\u4e9b\u5355\u72ec\u7684\u6a21\u5757\u4e0d\u505a\u8f6c\u6362\u76f4\u63a5\u5f15\u5165\uff08\u5982\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684js\u6587\u4ef6\uff0c\u5916\u90e8\u7684js\u6a21\u5757\uff09\u3002\u5b83\u4eec\u4e4b\u95f4\u4f7f\u7528oneof\u6765\u8fdb\u884c\u914d\u7f6e\u9632\u6b62loader\u91cd\u590d\u4f7f\u7528\u3002"))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/webpack/webpack optimization.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=src-webpack-webpack-optimization.29065d9c635a94d4f566.js.map