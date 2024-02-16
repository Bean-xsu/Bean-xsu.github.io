(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{425:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"组件的自定义事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的自定义事件"}},[t._v("#")]),t._v(" 组件的自定义事件")]),t._v(" "),a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),a("p",[t._v("组件的自定义事件是组件间通信的一种方式，适用于："),a("font",{attrs:{color:"red"}},[t._v("子组件 ==> 父组件")])],1),t._v(" "),a("h2",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),a("p",[t._v("A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（"),a("font",{attrs:{color:"red"}},[t._v("事件的回调在A中")]),t._v("）")],1),t._v(" "),a("h2",{attrs:{id:"绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定"}},[t._v("#")]),t._v(" 绑定")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一种方式，在父组件中："),a("code",[t._v('<Demo @atguigu="test"></Demo>')]),t._v("或"),a("code",[t._v('<Demo v-on:atguigu="test"></Demo>')])])]),t._v(" "),a("li",[a("p",[t._v("第二种方式，在父组件中：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Demo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n......\nmounted(){\n\tthis.$refs.xxx.$on("atguigu",this.test)\n}\n')])])])]),t._v(" "),a("li",[a("p",[t._v("若想让自定义事件只触发一次，可以使用"),a("code",[t._v("once")]),t._v("修饰符，或"),a("code",[t._v("$once")]),t._v("方法。")])])]),t._v(" "),a("h2",{attrs:{id:"触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发"}},[t._v("#")]),t._v(" 触发")]),t._v(" "),a("p",[a("code",[t._v("this.$emit('atguigu',数据)")])]),t._v(" "),a("h2",{attrs:{id:"解绑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解绑"}},[t._v("#")]),t._v(" 解绑")]),t._v(" "),a("p",[a("code",[t._v("this.$off('atguigu')")])]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ol",[a("li",[t._v("组件上也可以绑定原生DOM事件，需要使用修饰符"),a("code",[t._v("native")])]),t._v(" "),a("li",[t._v("使用"),a("code",[t._v('this.$refs.xxx.$on("atguigu",回调)')]),t._v("绑定自定义事件时，回调"),a("font",{attrs:{color:"red"}},[t._v("要么配置在methods中，要么用箭头函数")]),t._v("，否则this指向会出问题！！！")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);