(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{635:function(e,t,a){"use strict";a.r(t);var s=a(9),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue3-学习总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-学习总结"}},[e._v("#")]),e._v(" Vue3 学习总结")]),e._v(" "),a("h2",{attrs:{id:"vue3-比-vue2-的优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-比-vue2-的优势"}},[e._v("#")]),e._v(" Vue3 比 Vue2 的优势")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820090548268.png"),alt:"优势"}}),e._v(" "),a("h2",{attrs:{id:"vue3-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-生命周期"}},[e._v("#")]),e._v(" Vue3 生命周期")]),e._v(" "),a("h4",{attrs:{id:"options-api-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-api-生命周期"}},[e._v("#")]),e._v(" Options API 生命周期")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820090841611.png"),alt:"优势"}}),e._v(" "),a("h4",{attrs:{id:"composition-api-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composition-api-生命周期"}},[e._v("#")]),e._v(" Composition API 生命周期")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820091525508.png"),alt:"composition"}}),e._v(" "),a("p",[e._v("在 Composition API 中，使用  setup () 函数代替了  beforeCreate 和 created，其余的生命周期需要前置一个on，如 onBeforeMount，同时需要进行引入。")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820091810560.png"),alt:"composition"}}),e._v(" "),a("h2",{attrs:{id:"composition-api-和-options-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composition-api-和-options-api"}},[e._v("#")]),e._v(" Composition API 和 Options API")]),e._v(" "),a("h4",{attrs:{id:"composition-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composition-api"}},[e._v("#")]),e._v(" Composition API")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820092638673.png"),alt:"区别"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820093532829.png"),alt:"区别"}}),e._v(" "),a("h2",{attrs:{id:"如何理解-ref-toref-和-torefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-ref-toref-和-torefs"}},[e._v("#")]),e._v(" 如何理解 ref toRef 和 toRefs")]),e._v(" "),a("h4",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[e._v("#")]),e._v(" ref")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820094143196.png"),alt:"ref"}}),e._v(" "),a("p",[e._v("ref 可以用于响应式数据，它可以将基本类型数据转变为响应式数据。")]),e._v(" "),a("p",[e._v("复杂类型如对象、数组这种则需要通过 reactive 来转换。")]),e._v(" "),a("p",[e._v("同时， ref也被用来给元素或子组件注册引用信息， 引用信息将会注册在父组件的 $refs 对象上，如果是在普通的DOM元素上使用，引用指向的就是 DOM 元素，如果是在子组件上，引用就指向组件的实例。")]),e._v(" "),a("p",[e._v("具体详见https://cloud.tencent.com/developer/article/1479575")]),e._v(" "),a("h4",{attrs:{id:"toref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toref"}},[e._v("#")]),e._v(" toRef")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820095647539.png"),alt:"toRef"}}),e._v(" "),a("p",[e._v("写法如下：")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820095833041.png"),alt:"toRef"}}),e._v(" "),a("p",[e._v("总的来说，toRef 用于在一个响应式对象中，其中某个属性单独拿出实现响应式。")]),e._v(" "),a("h4",{attrs:{id:"torefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#torefs"}},[e._v("#")]),e._v(" toRefs")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820100344192.png"),alt:"toRefs"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820100941876.png"),alt:"toRefs"}}),e._v(" "),a("p",[e._v("这样写的好处是在模板中使用时，可以直接引用变量而不需要在前面添加对应的对象名，如state.age")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820101032223.png"),alt:"toRefs"}}),e._v(" "),a("p",[e._v("在 composition API 中，toRefs 有一些极佳的使用方式")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820101351196.png"),alt:"toRefs"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820101524124.png"),alt:"toRefs"}}),e._v(" "),a("h4",{attrs:{id:"进阶-深入理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶-深入理解"}},[e._v("#")]),e._v(" 进阶，深入理解")]),e._v(" "),a("h5",{attrs:{id:"为何需要用-ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为何需要用-ref"}},[e._v("#")]),e._v(" 为何需要用 ref ？")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820102333055.png"),alt:"ref"}}),e._v(" "),a("h5",{attrs:{id:"为何需要-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为何需要-value"}},[e._v("#")]),e._v(" 为何需要 .value")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820103530879.png"),alt:"value"}}),e._v(" "),a("h5",{attrs:{id:"为何需要-toref-和-torefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为何需要-toref-和-torefs"}},[e._v("#")]),e._v(" 为何需要 toRef 和 toRefs")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820110945794.png"),alt:"ref"}}),e._v(" "),a("h2",{attrs:{id:"vue3-升级的重要功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-升级的重要功能"}},[e._v("#")]),e._v(" Vue3 升级的重要功能")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820111257627.png"),alt:"upgrade"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820111519934.png"),alt:"upgrade"}}),e._v(" "),a("h4",{attrs:{id:"createapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createapp"}},[e._v("#")]),e._v(" createApp")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820111614599.png"),alt:"upgrade"}}),e._v(" "),a("h4",{attrs:{id:"emits-声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emits-声明"}},[e._v("#")]),e._v(" emits (声明)")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820112004570.png"),alt:"upgrade"}}),e._v(" "),a("p",[e._v("父组件向子组件传递一个事件，子组件需要通过 emits 声明一下该事件，然后在 setup函数中调用该事件，与 Vue2 的 $emit 类似。")]),e._v(" "),a("h4",{attrs:{id:"多事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多事件处理"}},[e._v("#")]),e._v(" 多事件处理")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820112418969.png"),alt:"upgrade"}}),e._v(" "),a("p",[e._v("比较简单，就是在methods中可以定义多个事件")]),e._v(" "),a("h4",{attrs:{id:"fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[e._v("#")]),e._v(" Fragment")]),e._v(" "),a("p",[e._v("Vue2 中最外层必须包裹单一根节点，Vue3不再需要。")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820112534020.png"),alt:"upgrade"}}),e._v(" "),a("h4",{attrs:{id:"移除-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除-sync"}},[e._v("#")]),e._v(" 移除 .sync")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820112603519.png"),alt:"upgrade"}}),e._v(" "),a("h4",{attrs:{id:"异步组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步组件"}},[e._v("#")]),e._v(" 异步组件")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820113150790.png"),alt:"upgrade"}}),e._v(" "),a("h4",{attrs:{id:"移除-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除-filter"}},[e._v("#")]),e._v(" 移除 filter")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820113249139.png"),alt:"upgrade"}}),e._v(" "),a("h4",{attrs:{id:"teleport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#teleport"}},[e._v("#")]),e._v(" Teleport")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820113522453.png"),alt:"upgrade"}}),e._v(" "),a("p",[e._v("Teleport 可以将组件放在外面，上图中便将 Teleport 中的内容放置在了 body 中")]),e._v(" "),a("h4",{attrs:{id:"suspense"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suspense"}},[e._v("#")]),e._v(" Suspense")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820113655074.png"),alt:"upgrade"}}),e._v(" "),a("p",[e._v("在加载 Test1 的内容时，先显示 #fallback 中的内容，即先显示 Loading...")]),e._v(" "),a("p",[e._v("等到 Test1 中的内容加载完毕后再替换为 Test1")]),e._v(" "),a("h4",{attrs:{id:"composition-api-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composition-api-2"}},[e._v("#")]),e._v(" Composition API")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820114113271.png"),alt:"upgrade"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820164103142.png"),alt:"upgrade"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820213814368.png"),alt:"upgrade"}}),e._v(" "),a("h2",{attrs:{id:"vue3如何实现响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3如何实现响应式"}},[e._v("#")]),e._v(" Vue3如何实现响应式")]),e._v(" "),a("p",[e._v("在 Vue2 中的响应式基于 Object.defineProperty，但其具有一些缺点。如：")]),e._v(" "),a("ul",[a("li",[e._v("深度监听需要递归到底")]),e._v(" "),a("li",[e._v("无法监听新增属性/删除属性（需要使用Vue.set/Vue.delete）")]),e._v(" "),a("li",[e._v("无法原生监听数组，需要特殊处理")])]),e._v(" "),a("p",[e._v("因此 Vue3 采用了 ES6 中的 Proxy 来实现响应式。")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820164809867.png"),alt:"Proxy"}}),e._v(" "),a("p",[e._v("Proxy 可以做到原生监听数组，不再需要重新定义数组原型")]),e._v(" "),a("h3",{attrs:{id:"proxy-基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-基本使用"}},[e._v("#")]),e._v(" Proxy 基本使用")]),e._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[e._v("const data = {\n    name: 'zhangsan',\n    age: 20,\n}\n// const data = ['a', 'b', 'c']\n\nconst proxyData = new Proxy(data, {\n    get(target, key, receiver) {\n        // 只处理本身（非原型的）属性\n        const ownKeys = Reflect.ownKeys(target)\n        if (ownKeys.includes(key)) {\n            console.log('get', key) // 监听\n        }\n\n        const result = Reflect.get(target, key, receiver)\n        // console.log(`result=${result}`)\t\n        return result // 返回结果\n    },\n    set(target, key, val, receiver) {\n        // 重复的数据，不处理\n        if (val === target[key]) {\n            return true\n        }\n\n        const result = Reflect.set(target, key, val, receiver)\n        console.log('set', key, val)\n        // console.log('result', result) // true\n        return result // 是否设置成功\n    },\n    deleteProperty(target, key) {\n        const result = Reflect.deleteProperty(target, key)\n        console.log('delete property', key)\n        // console.log('result', result) // true\n        return result // 是否删除成功\n    }\n})\n")])])]),a("p",[e._v("每一个 Reflect 需与 Proxy 对应， Proxy 作为代理，Reflect 作为反射。")]),e._v(" "),a("h3",{attrs:{id:"reflect-作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflect-作用"}},[e._v("#")]),e._v(" Reflect 作用")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820175205847.png"),alt:"Reflect"}}),e._v(" "),a("h3",{attrs:{id:"用-proxy-实现响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-proxy-实现响应式"}},[e._v("#")]),e._v(" 用 Proxy 实现响应式")]),e._v(" "),a("p",[e._v("与 Vue2 不同，Vue2 的响应式一旦监听了某一对象，会一次性递归完成，得到对象中的所有层级。")]),e._v(" "),a("p",[e._v("Vue3 的响应式只会在需要的层级触发响应式。")]),e._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[e._v("// 创建响应式\nfunction reactive(target = {}) {\n    if (typeof target !== 'object' || target == null) {\n        // 不是对象或数组，则返回\n        return target\n    }\n\n    // 代理配置\n    const proxyConf = {\n        get(target, key, receiver) {\n            // 只处理本身（非原型的）属性\n            const ownKeys = Reflect.ownKeys(target)\n            if (ownKeys.includes(key)) {\n                console.log('get', key) // 监听\n            }\n    \n            const result = Reflect.get(target, key, receiver)\n        \n            // 深度监听\n            // 性能如何提升的？\n            return reactive(result)\n        },\n        set(target, key, val, receiver) {\n            // 重复的数据，不处理\n            if (val === target[key]) {\n                return true\n            }\n    \n            const ownKeys = Reflect.ownKeys(target)\n            if (ownKeys.includes(key)) {\n                console.log('已有的 key', key)\n            } else {\n                console.log('新增的 key', key)\n            }\n\n            const result = Reflect.set(target, key, val, receiver)\n            console.log('set', key, val)\n            // console.log('result', result) // true\n            return result // 是否设置成功\n        },\n        deleteProperty(target, key) {\n            const result = Reflect.deleteProperty(target, key)\n            console.log('delete property', key)\n            // console.log('result', result) // true\n            return result // 是否删除成功\n        }\n    }\n\n    // 生成代理对象\n    const observed = new Proxy(target, proxyConf)\n    return observed\n}\n\n// 测试数据\nconst data = {\n    name: 'zhangsan',\n    age: 20,\n    info: {\n        city: 'beijing',\n        a: {\t\t//在这里输入 proxyData.info.a，则会得到 Proxy{b: {…}}的结果\n            b: {\n                c: {\n                    d: {\n                        e: 100\n                    }\n                }\n            }\n        }\n    }\n}\n\nconst proxyData = reactive(data)\n")])])]),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820200757752.png"),alt:"Proxy"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820200840664.png"),alt:"Proxy"}}),e._v(" "),a("h2",{attrs:{id:"watch-和-watcheffect-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch-和-watcheffect-的区别"}},[e._v("#")]),e._v(" watch 和 watchEffect 的区别")]),e._v(" "),a("p",[e._v("watch需要配置第三个参数来实现初始化之前监听以及深度监听。")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820203943614.png"),alt:"Proxy"}}),e._v(" "),a("p",[e._v("watchEffect 会在初始化后执行一次，且只会监听写在该函数中的内容。")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820203822400.png"),alt:"Proxy"}}),e._v(" "),a("h2",{attrs:{id:"setup-中如何获取组件实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-中如何获取组件实例"}},[e._v("#")]),e._v(" setup 中如何获取组件实例")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820204132828.png"),alt:"setup"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820204420486.png"),alt:"setup"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820204430913.png"),alt:"setup"}}),e._v(" "),a("h2",{attrs:{id:"编译优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译优化"}},[e._v("#")]),e._v(" 编译优化")]),e._v(" "),a("h3",{attrs:{id:"patchflag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patchflag"}},[e._v("#")]),e._v(" PatchFlag")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820205616977.png"),alt:"PatchFlag"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820210817108.png"),alt:"PatchFlag"}}),e._v(" "),a("h3",{attrs:{id:"hoiststatic-和-cachehandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hoiststatic-和-cachehandler"}},[e._v("#")]),e._v(" hoistStatic 和 CacheHandler")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820214201188.png"),alt:"区别"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820214148550.png"),alt:"区别"}}),e._v(" "),a("h3",{attrs:{id:"ssr-和-tree-shaking-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssr-和-tree-shaking-优化"}},[e._v("#")]),e._v(" SSR 和 Tree-shaking 优化")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820211925568.png"),alt:"优化"}}),e._v(" "),a("img",{attrs:{src:e.$withBase("/img/Vue/Vue3/image-20210820211947903.png"),alt:"优化"}}),e._v(" "),a("p",[e._v("Tree-shaking会按需引入，用到才引入")])])}),[],!1,null,null,null);t.default=r.exports}}]);