(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{172:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"《第十一章——dom扩展》"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《第十一章——dom扩展》","aria-hidden":"true"}},[t._v("#")]),t._v(" 《第十一章——Dom扩展》")]),t._v(" "),a("h2",{attrs:{id:"选择符api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择符api","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择符API")]),t._v(" "),a("ul",[a("li",[t._v("根据CSS选择符匹配文档中的DOM元素，包含两种：")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("querySelector")]),t._v("接收一个参数为CSS选择符（标签，类名，id），一般是通过Element类型调用该方法，查找的是对应元素的后代元素，返回的是第一个匹配的后代元素,没有找到的话就直接返回"),a("code",[t._v("null")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#canvas'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("querySelectorAll")]),t._v("接收的参数同"),a("code",[t._v("querySelector")]),t._v("一样，不同的是它返回的是所有符合条件的"),a("code",[t._v("NodeList")]),t._v("的实例，是一个数组。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找body下面的所有div")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p strong'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找p下面的所有strong")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"与类相关的扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与类相关的扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" 与类相关的扩展")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("getElementsByClassName()")]),t._v("接收一个参数，包含一个或者多个类名的字符串，返回的是匹配的"),a("code",[t._v("NodeList")]),t._v("类型。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'className haha'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找匹配'className'和'haha'的元素")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("classList")]),t._v("属性，dom元素的专有属性，表示类名集合，包含下面四种方法:")]),t._v(" "),a("li",[a("code",[t._v("add")]),t._v("：添加类名；")]),t._v(" "),a("li",[a("code",[t._v("contains")]),t._v("：是否包含指定参数的类名，如果包含返回true，否则返回false；")]),t._v(" "),a("li",[a("code",[t._v("remove")]),t._v("：移除类名；")]),t._v(" "),a("li",[a("code",[t._v("toggle")]),t._v("：类名集合中包含就删除并返回false，没有就添加并返回true。")])]),t._v(" "),a("h2",{attrs:{id:"htmldocument扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmldocument扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLDocument扩展")]),t._v(" "),a("ol",[a("li",[t._v("document.head")]),t._v(" "),a("li",[t._v("document.charset")]),t._v(" "),a("li",[t._v("H5规定可以为元素添加非标准的属性，在元素标签内添加"),a("code",[t._v("data-")]),t._v("，为元素添加语义信息，常常用于"),a("code",[t._v("图片懒加载技术")]),t._v("，将对应的图片的请求地址先放到"),a("code",[t._v("自定义的data-src")]),t._v("属性中，等到滚动到对应的图片位置时，将"),a("code",[t._v("src")]),t._v("属性的值填充即可加载对应的图片。")])]),t._v(" "),a("h2",{attrs:{id:"插入标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入标记","aria-hidden":"true"}},[t._v("#")]),t._v(" 插入标记")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("innerHTML")]),t._v("用于读写调用元素的所有子节点的HTML标记。")]),t._v(" "),a("li",[a("code",[t._v("outerHTML")]),t._v("用于读写该调用元素和所有子节点的HTML标记。")]),t._v(" "),a("li",[a("code",[t._v("scrollIntoView")]),t._v("用于将对应的元素滚动到视窗之内，参数可以为空，或者为true/false，用法如下")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollIntoView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true底部平齐，false顶部平齐")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}],!1,null,null,null);s.default=n.exports}}]);