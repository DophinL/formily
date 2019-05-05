(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{137:function(e,a,t){var n={"./bash":122,"./bash.js":122,"./css":123,"./css.js":123,"./htmlbars":124,"./htmlbars.js":124,"./javascript":125,"./javascript.js":125,"./scss":126,"./scss.js":126,"./typescript":127,"./typescript.js":127};function r(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=137},77:function(e,a,t){"use strict";var n=t(133),r=(t(134),t(135)),c=(t(136),function(){return n.createElement(n.Fragment,{},n.createElement("h1",{id:"formpath",className:"react-demo-h1"},"FormPath"),n.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),n.createElement("p",{className:"react-demo-p"},"专注于解决表单字段的路径匹配问题"),n.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),n.createElement(r,{code:"type FormPath {\n   match : (\n      pattern : String, //匹配模式字符串\n      matchRealPath : Boolean, //是否匹配真实路径，该属性是用于处理path为FormField时，是否匹配完整路径\n      filter : Function //过滤器，相当于是基于pattern所匹配的结果再进行一次过滤操作\n   )=>(\n          path : String | Array<String> | FormField\n      )=>Boolean,\n   transform:(\n      path : String | Array<String>,//要改变的路径\n      regexp : RegExp, //提取正则，该正则会在路径遍历过程中将某个路径节点按照该正则提取出来，然后以参数形式放到callback中\n      operator : Function //路径处理器，根据正则提取出来的路径节点，做一些转换处理，并返回最终路径\n   ) : Any\n}\n",justCode:!0,lang:"typescript"}),n.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),n.createElement(r,{code:"import {FormPath} from '@alife/uform'\n",justCode:!0,lang:"javascript"}),n.createElement("h2",{id:"pattern路径匹配语法",className:"react-demo-h2"},"Pattern路径匹配语法"),n.createElement("p",{className:"react-demo-p"},n.createElement("strong",{className:"react-demo-strong"},"全通配")),n.createElement(r,{code:'"*"\n',justCode:!0,lang:null}),n.createElement("p",{className:"react-demo-p"},n.createElement("strong",{className:"react-demo-strong"},"扩展匹配")),n.createElement(r,{code:'"aaa~" or "~" or "aaa~.bbb.cc"\n',justCode:!0,lang:null}),n.createElement("p",{className:"react-demo-p"},n.createElement("strong",{className:"react-demo-strong"},"部分通配")),n.createElement(r,{code:'"a.b.*.c.*"\n',justCode:!0,lang:null}),n.createElement("p",{className:"react-demo-p"},n.createElement("strong",{className:"react-demo-strong"},"分组通配")),n.createElement(r,{code:'"a.b.*(aa.bb.dd,cc,mm)"\nor \n"a.b.*(!aa.bb.dd,cc,mm)"\n',justCode:!0,lang:null}),n.createElement("p",{className:"react-demo-p"},n.createElement("strong",{className:"react-demo-strong"},"嵌套分组通配")),n.createElement(r,{code:'"a.b.*(aa.bb.*(aa.b,c),cc,mm)"\nor \n"a.b.*(!aa.bb.*(aa.b,c),cc,mm)"\n',justCode:!0,lang:null}),n.createElement("p",{className:"react-demo-p"},n.createElement("strong",{className:"react-demo-strong"},"范围通配")),n.createElement(r,{code:'"a.b.*[10:100]"\nor \n"a.b.*[10:]"\nor \n"a.b.*[:100]"\n',justCode:!0,lang:null}),n.createElement("p",{className:"react-demo-p"},n.createElement("strong",{className:"react-demo-strong"},"关键字通配")),n.createElement(r,{code:'"a.b.[[cc.uu()sss*\\\\[1222\\\\]]]"\n',justCode:!0,lang:null}),n.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),n.createElement(r,{code:"import {FormPath} from '@alife/uform'\n\nFormPath.match('aa')('aa') // true\nFormPath.match('*')('aa')  //true\nFormPath.match('aa.*')('aa') //false\nFormPath.match('aa.*')('aa.bb') // true\nFormPath.match('aa.*(bb,cc)')('aa.dd') //false\nFormPath.match('aa.*(!bb,cc)')('aa.dd') //true\n\nFormPath.transform('aa.2.bb.3.dd',/\\d+/,($1,$2)=>{\n   return `aa.${$1+1}.bb.${$2-1}.dd`\n}) // aa.3.bb.2.dd\n",justCode:!0,lang:"javascript"}))});c.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=c}}]);