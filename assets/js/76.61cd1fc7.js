(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{394:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基于注解方式实现bean管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于注解方式实现bean管理"}},[t._v("#")]),t._v(" 基于注解方式实现Bean管理")]),t._v(" "),s("h2",{attrs:{id:"什么是注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是注解"}},[t._v("#")]),t._v(" 什么是注解？")]),t._v(" "),s("ul",[s("li",[t._v("注解是代码里的特殊标记。格式：@注解名称(属性名称=属性值,属性名称=属性值...)")]),t._v(" "),s("li",[t._v("使用注解，注解可以作用在类上面，方法上面，属性上面。")]),t._v(" "),s("li",[t._v("使用注解的目的：简化xml配置")])]),t._v(" "),s("h2",{attrs:{id:"spring的bean管理中为创建对象提供的注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring的bean管理中为创建对象提供的注解"}},[t._v("#")]),t._v(" Spring的Bean管理中为创建对象提供的注解")]),t._v(" "),s("ul",[s("li",[t._v("@Component(一般建议用于传递对象)")]),t._v(" "),s("li",[t._v("@Service(一般建议用于业务逻辑层或者Service层)")]),t._v(" "),s("li",[t._v("@Controller(一般建议用于外部层)")]),t._v(" "),s("li",[t._v("@Repository(一般建议用于Dao层)")])]),t._v(" "),s("h5",[t._v("注意")]),t._v(" "),s("p",[t._v("上面四个注解功能是一样的，都可用来创建bean实例。")]),t._v(" "),s("h2",{attrs:{id:"基于注解方式实现对象创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于注解方式实现对象创建"}},[t._v("#")]),t._v(" 基于注解方式实现对象创建")]),t._v(" "),s("h3",{attrs:{id:"_1-引入依赖-当前项目已经引入了spring依赖-这里就不赘述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入依赖-当前项目已经引入了spring依赖-这里就不赘述"}},[t._v("#")]),t._v(" 1.引入依赖(当前项目已经引入了spring依赖，这里就不赘述)")]),t._v(" "),s("p",[t._v("使用context标签开启组件扫描")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("base-package")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("spring5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h5",[t._v("注意")]),t._v(" "),s("ul",[s("li",[t._v("如果要扫描多个包，多个包要用逗号隔开")]),t._v(" "),s("li",[t._v("扫描包上层目录")])]),t._v(" "),s("h3",{attrs:{id:"_2-创建一个类userservice-并加上注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建一个类userservice-并加上注解"}},[t._v("#")]),t._v(" 2.创建一个类UserService,并加上注解")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("spring5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//@Component(value = "userService")')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userService"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//相当于<bean id="userService" calss="..."/>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service add......"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('在类上面加入注解@Service(value = "userService")')]),t._v(" "),s("p",[t._v("相当于在配置文件中加上了 "),s("bean",{attrs:{id:"userService",calss:"spring5.service"}})],1),t._v(" "),s("p",[t._v("3.在测试类中创建一个testService方法进行测试")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClassPathXmlApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bean1.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" userService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userService"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        userService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("运行该方法后得到如下结果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220510130950011.png",alt:"image-20220510130950011"}})]),t._v(" "),s("p",[t._v("可以看到注解已经被扫描出来，并且创建了对象")]),t._v(" "),s("h3",{attrs:{id:"_4-在context标签中加入细节配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-在context标签中加入细节配置"}},[t._v("#")]),t._v(" 4.在context标签中加入细节配置")]),t._v(" "),s("p",[t._v("use-default-filters:(有true和false两个值)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("true，默认值，表示使用spring默认的filter。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当取值为true时，可以配置不需要扫描的内容")]),t._v(" "),s("p",[t._v("context:exclude-filter：表示不需要扫描哪些内容")])])])]),t._v(" "),s("li",[s("p",[t._v("false，表示使用自己配置的filter，需要自己配置规则。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当取值为false时，需要配置指明需要扫描的内容")]),t._v(" "),s("p",[t._v("context:include-filter：表示需要扫描哪些内容")])])])])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 示例1 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("base-package")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("spring5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("use-default-filters")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--context:include-filter：表示需要扫描哪些内容--\x3e")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("include-filter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("expression")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.stereotype.Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 示例2 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("base-package")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("spring5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--context:exclude-filter：表示不需要扫描哪些内容--\x3e")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("exclude-filter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("expression")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.springframework.stereotype.Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("component-scan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"spring的bean管理中为属性注入提供的注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring的bean管理中为属性注入提供的注解"}},[t._v("#")]),t._v(" Spring的Bean管理中为属性注入提供的注解")]),t._v(" "),s("ul",[s("li",[t._v("@Autowired:表示根据属性类型进行自动注入")]),t._v(" "),s("li",[t._v("@Qualifier:表示根据属性名称进行注入")]),t._v(" "),s("li",[t._v("@Resourse:可以根据属性类型进行注入，也可以根据实现名称进行注入")]),t._v(" "),s("li",[t._v("@Value:注入普通类型属性，如字符串等")])]),t._v(" "),s("h2",{attrs:{id:"在userservice里注入userdao属性-以-autowired为例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在userservice里注入userdao属性-以-autowired为例"}},[t._v("#")]),t._v(" 在UserService里注入UserDao属性(以@Autowired为例)")]),t._v(" "),s("h3",{attrs:{id:"_1-创建一个userdao接口-再用userdaoimpl类实现该接口-并在service和dao类上添加创建对象注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个userdao接口-再用userdaoimpl类实现该接口-并在service和dao类上添加创建对象注解"}},[t._v("#")]),t._v(" 1.创建一个UserDao接口，再用UserDaoImpl类实现该接口,并在service和dao类上添加创建对象注解")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("spring5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDao")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("spring5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Repository")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDaoImpl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dao add......"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-在service注入dao对象-在service类添加dao类型属性-在属性上使用注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在service注入dao对象-在service类添加dao类型属性-在属性上使用注解"}},[t._v("#")]),t._v(" 2.在service注入dao对象，在service类添加dao类型属性，在属性上使用注解")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("spring5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Autowired")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("spring5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDao")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//@Component(value = "userService")')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//@Service(value = "userService") //相当于<bean id="userService" calss="..."/>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDao")]),t._v(" userDao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service add......"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        userDao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h5",[t._v("注意")]),t._v("\n- 不需要添加set方法\n- 需要添加注入属性注\n"),s("h3",{attrs:{id:"_4-再次运行testservice方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-再次运行testservice方法"}},[t._v("#")]),t._v(" 4.再次运行testService方法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220510143631911.png",alt:"image-20220510143631911"}})]),t._v(" "),s("p",[t._v("可以看到dao已经被注入到了service里面")]),t._v(" "),s("h3",{attrs:{id:"_5-qualifier注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-qualifier注解"}},[t._v("#")]),t._v(" 5.@Qualifier注解")]),t._v(" "),s("p",[t._v("@Qualifier需要与@Autowired一起使用，并且放在其下面")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220510144240751.png",alt:"image-20220510144240751"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220510144256729.png",alt:"image-20220510144256729"}})]),t._v(" "),s("h3",{attrs:{id:"_6-resourse注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-resourse注解"}},[t._v("#")]),t._v(" 6.@Resourse注解")]),t._v(" "),s("p",[t._v('@Resourse直接用表示根据类型注入，@Resourse(name="xxx")则表示根据名称注入。')]),t._v(" "),s("h5",[t._v("注意")]),t._v(" "),s("p",[t._v("Resourse并不是Spring里的类，而是Java拓展包javax里的类")]),t._v(" "),s("p",[t._v("spring不建议用@Resourse注解")]),t._v(" "),s("h3",{attrs:{id:"_7-value注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-value注解"}},[t._v("#")]),t._v(" 7.@Value注解")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Hiyiin/picture/Typora/image-20220510145217940.png",alt:"image-20220510145217940"}})]),t._v(" "),s("p",[t._v("可以看到上面实现了一个String类型的注入")]),t._v(" "),s("h2",{attrs:{id:"完全注解开发-该方法可用于装杯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完全注解开发-该方法可用于装杯"}},[t._v("#")]),t._v(" 完全注解开发(该方法可用于装杯)")]),t._v(" "),s("p",[t._v("就是不用任何配置文件实现开发，在Spring中只需了解，实际开发中基于Springboot进行做到，另外springboot也是基于spring的二次开发。实现如下：")]),t._v(" "),s("p",[t._v("(1)创建配置类，代替xml配置文件，并将bean1.xml中的自动扫描给注释掉")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("spring5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComponentScan")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//作为配置类，代替xml配置文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ComponentScan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basePackages "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//该条配置等价与     <context:component-scan base-package="spring5"></context:component-scan>')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h5",[t._v("注意")]),t._v(" "),s("p",[t._v("此时运行之前的testService()方法可以发现该测试方法已经失效,原因就是之前的测试方法是读取bean1.xml的配置文件里的配置，而此文件的自动扫描已经被注释掉了。")]),t._v(" "),s("p",[t._v("(2)在测试类中创建一个testService1()方法，使其在配置类中读取配置")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("testService1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationContext")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnnotationConfigApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" userService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userService"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        userService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("(3)运行该方法后可以发现与之前的运行结果一致。")])])}),[],!1,null,null,null);s.default=e.exports}}]);