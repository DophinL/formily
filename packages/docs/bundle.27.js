(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{142:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};l.get||l.set?Object.defineProperty(t,a,l):t[a]=e[a]}return t.default=e,t}},90:function(e,t,a){"use strict";var l=a(133),c=(a(134),a(135)),m=(a(136),function(e){var t={exports:{}};e(t,t.exports);var a=t.exports.__esModule&&t.exports.default||t.exports;return"function"==typeof a?a:function(){return l.createElement("div",{},"Code snippet should export a component!")}}(function(e,t){var l=a(142),c=a(10);t.__esModule=!0,t.default=function(){return r.default.createElement(n.default,{actions:d,effects:function(e){e("onFieldChange","aa").subscribe(function(e){d.setFieldState("bb",function(t){t.value=e.value})})}},r.default.createElement(n.Field,{type:"string",name:"aa"}),r.default.createElement(n.Field,{type:"string",name:"bb"}))};var m=c(a(9)),r=l(a(0)),n=(c(a(2)),l(a(115))),d=(0,n.createFormActions)();(0,n.registerFormField)("string",(0,n.connect)()(function(e){return r.default.createElement("input",(0,m.default)({},e,{value:e.value||""}))}))})),r=function(){return l.createElement(l.Fragment,{},l.createElement("h1",{id:"schemaform",className:"react-demo-h1"},"SchemaForm"),l.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),l.createElement("p",{className:"react-demo-p"},"基于@uform/react 的核心组件SchemaForm进一步扩展出来的SchemaForm组件，推荐生产环境下使用"),l.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),l.createElement(c,{code:"import {SchemaForm} from '@uform/next(antd)'\n\nor \n\nimport SchemaForm from '@uform/next(antd)'\n",justCode:!0,lang:"javascript"}),l.createElement("h2",{id:"原始api",className:"react-demo-h2"},"原始API"),l.createElement("table",{className:"react-demo-table"},l.createElement("thead",{className:"react-demo-thead"},l.createElement("tr",{className:"react-demo-tr"},l.createElement("th",{align:null,className:"react-demo-th"},"属性名称"),l.createElement("th",{align:null,className:"react-demo-th"},"属性描述"),l.createElement("th",{align:null,className:"react-demo-th"},"属性类型"),l.createElement("th",{align:null,className:"react-demo-th"},"默认值"))),l.createElement("tbody",{className:"react-demo-tbody"},l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"defaultValue"),l.createElement("td",{align:null,className:"react-demo-td"},"表单默认值"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"value"),l.createElement("td",{align:null,className:"react-demo-td"},"表单值，受控态使用"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"},"{}")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"initialValues"),l.createElement("td",{align:null,className:"react-demo-td"},"表单值，受控态使用"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"},"{}")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"locale"),l.createElement("td",{align:null,className:"react-demo-td"},"表单国际化文案"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"},"{}")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"schema"),l.createElement("td",{align:null,className:"react-demo-td"},"表单json schema，具体参考 ",l.createElement("a",{href:"#/MpI2Ij/1gSGSDf5",className:"react-demo-a"},"扩展规范")),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"},'{type:"object",properties:{}}')),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"onChange"),l.createElement("td",{align:null,className:"react-demo-td"},"表单变化事件回调"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Function(values : Object){}")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"onSubmit"),l.createElement("td",{align:null,className:"react-demo-td"},"表单提交事件回调"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Function(values : Object){}")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"onReset"),l.createElement("td",{align:null,className:"react-demo-td"},"表单重置事件回调"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Function(values : Object){}")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"onValidateFailed"),l.createElement("td",{align:null,className:"react-demo-td"},"表单校验失败事件回调"),l.createElement("td",{align:null,className:"react-demo-td"},"Function"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"editable"),l.createElement("td",{align:null,className:"react-demo-td"},"控制表单字段是否可编辑状态"),l.createElement("td",{align:null,className:"react-demo-td"},l.createElement("code",{className:"react-demo-code"},"Boolean | Function(name : String) : Boolean")),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"actions"),l.createElement("td",{align:null,className:"react-demo-td"},"需要握手的表单actions，只接收通过",l.createElement("a",{href:"#/aAUeUD/XEFAF7HoHV",className:"react-demo-a"},"createFormActions"),"创建出来的actions"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"effects"),l.createElement("td",{align:null,className:"react-demo-td"},"副作用处理函数"),l.createElement("td",{align:null,className:"react-demo-td"},"Function"),l.createElement("td",{align:null,className:"react-demo-td"})))),l.createElement("h2",{id:"副作用处理",className:"react-demo-h2"},"副作用处理"),l.createElement("blockquote",{className:"react-demo-blockquote"},l.createElement("p",{className:"react-demo-p"},"表单副作用，也就是由表单字段的内部事件所产生的联动，校验，异步逻辑，如何更好的管理和维护副作用逻辑，恰好就是rxjs的最大优势，所以，我们采用了rxjs来管理副作用逻辑")),l.createElement("p",{className:"react-demo-p"},"前面API介绍中有讲到effects，这个effects是一个回调函数，它也是一个非常强大的回调函数，它接收了一个selector函数作为参数，我们可以用selector来选择表单内的任意一个字段，对其做状态修改，即便存在异步逻辑，也是可以很方便的在各种异步环境下对字段的状态做修改，所以，我们的表单联动，是不限于时空的。下面可以看一个简单的例子："),l.createElement(c,{code:"import React, { Component } from 'react'\nimport ReactDOM from 'react-dom'\nimport SchemaForm, {\n  registerFormField,\n  Field,  \n  connect,\n  createFormActions\n} from '@uform/react'\n\nconst actions = createFormActions()\n\nregisterFormField(\n  'string',\n  connect()(props => <input {...props} value={props.value || ''} />)\n)\n\n\nReactDOM.render(\n    <SchemaForm actions={actions} effects={($)=>{\n       $('onFieldChange','aa').subscribe((fieldState)=>{\n         actions.setFieldState('bb',state=>{\n           state.value = fieldState.value\n         })\n       })\n    }}>\n       <Field type=\"string\" name=\"aa\"/>\n       <Field type=\"string\" name=\"bb\"/>\n    </SchemaForm>,\n    document.getElementById('root')\n)\n",justCode:!1,lang:"jsx"},l.createElement(m,{})),l.createElement("p",{className:"react-demo-p"},"上面的例子是实现aa在值改变的时候将bb的值设置为aa的值。"),l.createElement("h2",{id:"副作用事件",className:"react-demo-h2"},"副作用事件"),l.createElement("blockquote",{className:"react-demo-blockquote"},l.createElement("p",{className:"react-demo-p"},"在上面的例子中使用到了事件选择器，事件源主要是以下几种类型")),l.createElement(c,{code:'<SchemaForm\n    effects={($)=>{\n       $("onFieldChange").subscribe((fieldState)=>{})\n       $("onFormInit").subscribe((formState)=>{})\n       $("onFormMount").subscribe((formState)=>{})\n       $("onFormReset").subscribe((formState)=>{})\n       $("onFormSubmit").subscribe((formState)=>{})\n       $("onXXX").subscribe((xxx)=>{}) //自定义事件，主要通过dispatch函数来触发，后面都会提到哪里可以使用dispatch，比如Field组件的x-effect属性，FormConsumer里，FieldRenderProps里\n    }}\n/>\n',justCode:!0,lang:"javascript"}),l.createElement("h2",{id:"扩展api",className:"react-demo-h2"},"扩展API"),l.createElement("table",{className:"react-demo-table"},l.createElement("thead",{className:"react-demo-thead"},l.createElement("tr",{className:"react-demo-tr"},l.createElement("th",{align:null,className:"react-demo-th"},"属性名称"),l.createElement("th",{align:null,className:"react-demo-th"},"属性描述"),l.createElement("th",{align:null,className:"react-demo-th"},"属性类型"),l.createElement("th",{align:null,className:"react-demo-th"},"默认值"))),l.createElement("tbody",{className:"react-demo-tbody"},l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"inline"),l.createElement("td",{align:null,className:"react-demo-td"},"是否是单行布局"),l.createElement("td",{align:null,className:"react-demo-td"},"Boolean"),l.createElement("td",{align:null,className:"react-demo-td"},"false")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"size"),l.createElement("td",{align:null,className:"react-demo-td"},"表单尺寸 ",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"可选值:",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"'large'(大)",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"'medium'(中)",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"'small'(小)"),l.createElement("td",{align:null,className:"react-demo-td"},"String"),l.createElement("td",{align:null,className:"react-demo-td"},"'medium'")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"labelAlign"),l.createElement("td",{align:null,className:"react-demo-td"},"标签的位置",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"可选值:",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"'top'(上)",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"'left'(左)",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"'inset'(内)"),l.createElement("td",{align:null,className:"react-demo-td"},"String"),l.createElement("td",{align:null,className:"react-demo-td"},"'left'")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"labelTextAlign"),l.createElement("td",{align:null,className:"react-demo-td"},"标签的左右对齐方式",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"可选值:",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"'left'(左)",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"'right'(右)"),l.createElement("td",{align:null,className:"react-demo-td"},"String"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"autoAddColon"),l.createElement("td",{align:null,className:"react-demo-td"},"是否自动添加冒号"),l.createElement("td",{align:null,className:"react-demo-td"},"Boolean"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"labelCol"),l.createElement("td",{align:null,className:"react-demo-td"},"控制所有子节点的labelCol"),l.createElement("td",{align:null,className:"react-demo-td"},"Number"),l.createElement("td",{align:null,className:"react-demo-td"},"Object")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"wrapperCol"),l.createElement("td",{align:null,className:"react-demo-td"},"控制所有子节点wrapperCol"),l.createElement("td",{align:null,className:"react-demo-td"},"Number"),l.createElement("td",{align:null,className:"react-demo-td"},"Object")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"prefix"),l.createElement("td",{align:null,className:"react-demo-td"},"className前缀"),l.createElement("td",{align:null,className:"react-demo-td"},"String"),l.createElement("td",{align:null,className:"react-demo-td"},"'next-'")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"style"),l.createElement("td",{align:null,className:"react-demo-td"},"样式对象"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"className"),l.createElement("td",{align:null,className:"react-demo-td"},"className"),l.createElement("td",{align:null,className:"react-demo-td"},"String"),l.createElement("td",{align:null,className:"react-demo-td"})))),l.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),l.createElement(c,{code:"import React, { Component } from 'react'\nimport ReactDOM from 'react-dom'\nimport SchemaForm, {\n  FormButtonGroup,\n  Field,  \n  Submit\n} from '@uform/next(antd)'\n\n\nReactDOM.render(\n   <SchemaForm defaultValue={{aa:'123'}} onSubmit={values=>console.log(values)}>\n     <Field name=\"aa\" type=\"string\" title=\"AA\"/>\n     <FormButtonGroup>\n        <Submit>提交</Submit>\n     </FormButtonGroup>\n   </SchemaForm>\n,document.getElementById('root'))\n",justCode:!0,lang:"javascript"}))};r.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=r}}]);