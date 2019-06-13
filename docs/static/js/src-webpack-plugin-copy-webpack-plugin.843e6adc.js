(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/webpack/plugin/CopyWebpackPlugin.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return a});var o=t("./node_modules/_@babel_runtime@7.4.3@@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/_react@16.8.6@react/index.js"),t("./node_modules/_@mdx-js_react@1.0.6@@mdx-js/react/dist/index.es.js")),s={},i="wrapper";function a(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(i,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"copywebpackplugin-\u7528\u6cd5"},"CopyWebpackPlugin \u7528\u6cd5"),Object(r.b)("h2",{id:"signature"},"Signature"),Object(r.b)("p",null,"CopyWebpackPlugin\u7684\u6784\u9020\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"module.exports = {\n  plugins: [new CopyPlugin(patterns, options)],\n}\n")),Object(r.b)("p",null,"patterns\u7528\u6765\u5b9a\u5236\u6587\u4ef6\u62f7\u8d1d\u548c\u8f6c\u6362\u7684\u89c4\u5219\uff0c\u4ee5\u4e0b\u5217\u51fa\u4e00\u4e9b\u5e38\u89c1\u7684\u9009\u9879"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"interface Patterns {\n  from: string | object, // \u6587\u4ef6\u6765\u6e90\uff0c\u53ef\u4ee5\u662f\u8def\u5f84\u6216\u8005glob\uff0c\u5b98\u65b9\u7684glob\u793a\u4f8b\u4e3a{ glob: '**/*', dot: false },\n  to: string, // \u8f93\u51fa\u8def\u5f84\n  toType: 'dir' | 'file' | 'template', // \u5176\u4e2dtemplate\u8868\u793ato\u9700\u8981\u7531\u4e00\u5b9a\u7684\u89c4\u5219\u751f\u6210\uff0c\u4f8b\u5982'dest/[name].[hash].[ext]'\n  ignore: Array<string>, // \u5ffd\u7565\u7684\u6587\u4ef6\u6b63\u5219,\n  transform: (source: string, path: string) => string | Promise<string>, // \u62f7\u8d1d\u65f6\u5c06\u6587\u4ef6\u8fdb\u884c\u8f6c\u6362\uff0c\u4f8b\u5982\u6587\u4ef6\u538b\u7f29\n}\n")),Object(r.b)("p",null,"options\u4e0d\u592a\u5e38\u7528\uff0c\u8fd9\u91cc\u5ffd\u7565\u3002"),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"\u8fd9\u4e2aplugin\u7684\u4e3b\u8981\u4f5c\u7528\u5c31\u662f\u7528\u6765\u62f7\u8d1d\u6587\u4ef6\u7684\u3002\u6240\u4ee5\u5e38\u89c1\u7684\u4e00\u79cd\u4f7f\u7528\u573a\u666f\u662f\u5728\u90e8\u7f72\u524d\u628anode_modules\u91cc\u7684umd\u4ee3\u7801\u6587\u4ef6\u62f7\u8d1d\u5230\u9759\u6001\u76ee\u5f55\u8f93\u51fa\uff0c\u5e76\u4e14\u4f7f\u7528\u914d\u7f6eexternal\u7684\u65b9\u5f0f\u5f15\u5165\u3002\u5728\u8282\u7701webpack\u6253\u5305\u65f6\u95f4\u7684\u540c\u65f6\u80fd\u7a33\u5b9a\u505a\u5230\u5206\u5305\u548c\u4f7f\u7528\u7f13\u5b58\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u901a\u5e38\u8fd9\u4e9b\u4ee3\u7801\u6587\u4ef6\u4e0d\u5e26\u7248\u672c\u53f7\uff0c\u9700\u8981\u81ea\u884c\u6807\u8bb0\u8fd9\u4e9b\u6587\u4ef6\u7684\u7248\u672c\u53f7\uff0c\u4ee5\u907f\u514d\u5728umd\u5305\u7248\u672c\u66f4\u65b0\u540e\u7528\u6237\u4ecd\u7136\u4f7f\u7528\u7684\u662f\u65e7\u7248\u672c\u7684\u6587\u4ef6\u5f3a\u7f13\u5b58\u3002\u53e6\u4e00\u79cd\u4f7f\u7528\u573a\u666f\u662f\u628a\u4e00\u4e9b\u8d44\u6e90\u6587\u4ef6\u62f7\u8d1d\u5230\u8f93\u51fa\u76ee\u5f55\uff0c\u4f8b\u5982icon\uff0cimage\u7b49\u6587\u4ef6\uff0c\u5728\u4ee3\u7801\u91cc\u53ea\u8981\u5199\u9759\u6001\u7684\u6587\u4ef6\u76ee\u5f55\u5c31\u53ef\u4ee5\u4e86\uff0c\u4e0d\u5fc5\u8981\u4f7f\u7528file-loader\uff08\u4ecd\u7136\u9700\u8981\u6ce8\u610f\u5f3a\u7f13\u5b58\u95ee\u9898\uff09\u3002"))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/webpack/plugin/CopyWebpackPlugin.mdx"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=src-webpack-plugin-copy-webpack-plugin.be10d02afae40097b328.js.map