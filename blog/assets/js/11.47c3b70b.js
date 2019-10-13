(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{189:function(i,e,t){"use strict";t.r(e);var v=t(0),a=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"css总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css总结","aria-hidden":"true"}},[i._v("#")]),i._v(" CSS总结")]),i._v(" "),t("h2",{attrs:{id:"q1：如何理解盒模型？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q1：如何理解盒模型？","aria-hidden":"true"}},[i._v("#")]),i._v(" Q1：如何理解盒模型？")]),i._v(" "),t("ul",[t("li",[i._v("CSS盒模型（Box Model）本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充和盒子实际内容；")]),i._v(" "),t("li",[i._v("盒模型包含两种不同模型：\n"),t("ol",[t("li",[i._v("W3C盒子模型（标准盒模型）——CSS设置的width和height属性是content内容的宽高，盒子的总宽高=width/height+padding+border+margin；")]),i._v(" "),t("li",[i._v("IE盒子模型（怪异盒模型）——CSS设置的width属性和height属性是内容，内边距和边框的总和，盒子的总宽高=width/height+margin=内容+padding+border+margin；")])])]),i._v(" "),t("li",[i._v("指定盒子模型种类的属性："),t("code",[i._v("box-sizing: content-box/border-box")]),i._v("；分别用于设置标准盒模型和怪异盒模型。")])]),i._v(" "),t("h2",{attrs:{id:"q2：如何理解bfc？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q2：如何理解bfc？","aria-hidden":"true"}},[i._v("#")]),i._v(" Q2：如何理解BFC？")]),i._v(" "),t("ul",[t("li",[i._v("BFC——块级格式化上下文，即web页面可视化css渲染的一部分，块盒子的布局过程发生的区域，也是浮动元素和其他元素交互的区域；类似形成了一个独立的容器，容器内部的布局和外部不相干；")]),i._v(" "),t("li",[i._v("如何创建格式化上下文：根元素，浮动元素，绝对定位元素，行内块元素，"),t("code",[i._v("overflow")]),i._v("不是"),t("code",[i._v("visible")]),i._v("的元素，弹性元素"),t("code",[i._v("flex")]),i._v("，网格元素"),t("code",[i._v("grid")])]),i._v(" "),t("li",[i._v("BFC的作用：\n"),t("ol",[t("li",[i._v("清除浮动影响：一个盒子包含内容和一个浮动盒子，在没有设置BFC的情况下，盒子的高度由内容的高度决定，当给父容器设置"),t("code",[i._v("overflow: auto;")]),i._v("，父元素形成了BFC区域，区域的高度由内容和浮动子元素共同决定；")]),i._v(" "),t("li",[i._v("解决垂直方向上的外边距重叠问题；")]),i._v(" "),t("li",[i._v("自适应两列布局（"),t("code",[i._v("float")]),i._v(" + "),t("code",[i._v("overflow")]),i._v("）")])])])]),i._v(" "),t("h2",{attrs:{id:"q3：自适应两列布局方案："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q3：自适应两列布局方案：","aria-hidden":"true"}},[i._v("#")]),i._v(" Q3：自适应两列布局方案：")]),i._v(" "),t("ol",[t("li",[i._v("float + margin")]),i._v(" "),t("li",[i._v("calc()")]),i._v(" "),t("li",[i._v("float + overflow:hidden")]),i._v(" "),t("li",[i._v("flex布局")])]),i._v(" "),t("h2",{attrs:{id:"q4：如何理解层叠上下文？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q4：如何理解层叠上下文？","aria-hidden":"true"}},[i._v("#")]),i._v(" Q4：如何理解层叠上下文？")]),i._v(" "),t("ul",[t("li",[i._v("层叠上下文类似于"),t("code",[i._v("BFC")]),i._v("的一种布局区域，这个区域内主要涉及到元素的一个层叠顺序，即元素在页面上展示的层级划分；在这个区域中，DOM流后面的元素会覆盖前面的元素；")]),i._v(" "),t("li",[i._v("基本层叠顺序：层叠上下文(background/border) < 负z-index元素 < block块状水平盒子 < float浮动盒子 < inline/inline-block水平盒子 < z-index:auto/0或者不依赖z-index确定顺序的层叠上下文  < 正z-index元素")]),i._v(" "),t("li",[i._v("如何创建层叠上下文？\n"),t("ol",[t("li",[i._v("根元素html——根层叠上下文")]),i._v(" "),t("li",[i._v("定位元素和z-index不是auto的元素")]),i._v(" "),t("li",[i._v("z-index不是auto的flex项(父元素是display:flex|inline-flex)")]),i._v(" "),t("li",[i._v("包含transform!=none/opacity!=1/fliter!=none/-webkit-overflow-scrolling:touch等css属性")])])])]),i._v(" "),t("h2",{attrs:{id:"q5：响应式布局的方案有哪些？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q5：响应式布局的方案有哪些？","aria-hidden":"true"}},[i._v("#")]),i._v(" Q5：响应式布局的方案有哪些？")]),i._v(" "),t("ol",[t("li",[i._v("固定尺寸加媒体查询；")]),i._v(" "),t("li",[i._v("百分比布局；")]),i._v(" "),t("li",[i._v("rem布局；")])]),i._v(" "),t("h3",{attrs:{id:"百分比布局相对于rem布局的优缺点？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#百分比布局相对于rem布局的优缺点？","aria-hidden":"true"}},[i._v("#")]),i._v(" 百分比布局相对于rem布局的优缺点？")]),i._v(" "),t("ul",[t("li",[i._v("优点：用法简单，不需要js的计算；没有兼容性；")]),i._v(" "),t("li",[i._v("缺点：计算麻烦，缺乏扩展性。")])]),i._v(" "),t("h3",{attrs:{id:"rem的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rem的实现原理","aria-hidden":"true"}},[i._v("#")]),i._v(" rem的实现原理")]),i._v(" "),t("ul",[t("li",[i._v("根据设计图的尺寸以及转化的比例，以及设备的尺寸计算出根节点"),t("code",[i._v("html")]),i._v("的字体大小，由于属性具有继承性，所以子元素的尺寸就可以根据根节点的大小进行计算，计算公式为"),t("code",[i._v("换算比例/(设计稿的尺寸/设备尺寸)")]),i._v("；")])]),i._v(" "),t("h2",{attrs:{id:"q6：如何理解弹性盒布局？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q6：如何理解弹性盒布局？","aria-hidden":"true"}},[i._v("#")]),i._v(" Q6：如何理解弹性盒布局？")]),i._v(" "),t("ul",[t("li",[i._v("弹性盒布局就是flex布局，通过设置"),t("code",[i._v("display:flex;")]),i._v("定义了一个弹性容器，里面包含了弹性子元素，弹性盒布局规定了弹性子元素在容器内的布局方式，而子元素内部和容器外部的元素不受此属性影响")])]),i._v(" "),t("h2",{attrs:{id:"q7：link和-import的区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q7：link和-import的区别？","aria-hidden":"true"}},[i._v("#")]),i._v(" Q7：link和@import的区别？")]),i._v(" "),t("ol",[t("li",[i._v("link是"),t("code",[i._v("XHTML")]),i._v("的标签，@import是CSS中style标签内引入外部css的API")]),i._v(" "),t("li",[i._v("link是在html加载后就开始加载进入，@import是在页面加载完成之后才会加载；")]),i._v(" "),t("li",[i._v("用JS操作引入外部样式表只能通过link标签；")])])])}],!1,null,null,null);e.default=a.exports}}]);