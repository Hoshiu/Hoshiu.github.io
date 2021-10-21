(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{631:function(t,e,a){"use strict";a.r(e);var s=a(9),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-基本使用"}},[t._v("#")]),t._v(" React 基本使用")]),t._v(" "),a("h2",{attrs:{id:"jsx-基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-基本使用"}},[t._v("#")]),t._v(" JSX 基本使用")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821083315509.png"),alt:"JSX"}}),t._v(" "),a("blockquote",[a("p",[t._v("​    // 1. event 是 SyntheticEvent ，模拟出来 DOM 事件所有能力")]),t._v(" "),a("p",[t._v("​    // 2. event.nativeEvent 是原生事件对象")]),t._v(" "),a("p",[t._v("​    // 3. "),a("strong",[t._v("在 React 16中，所有的事件，都被挂载到 document 上。但在 React 17后，事件绑定到 root 组件上")])]),t._v(" "),a("p",[t._v("​\t// 4. 在 Vue 中,event 是原生的的，且事件被挂载到当前元素。")]),t._v(" "),a("p",[t._v("​    // 4. 和 DOM 事件不一样，和 Vue 事件也不一样")])]),t._v(" "),a("h2",{attrs:{id:"组件通讯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件通讯"}},[t._v("#")]),t._v(" 组件通讯")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821093012866.png"),alt:"组件通讯"}}),t._v(" "),a("h2",{attrs:{id:"setstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setstate"}},[t._v("#")]),t._v(" setState")]),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import React from 'react'\n\n// 函数组件（后面会讲），默认没有 state\nclass StateDemo extends React.Component {\n    constructor(props) {\n        super(props)\n\n        // 第一，state 要在构造函数中定义\n        this.state = {\n            count: 0\n        }\n    }\n    render() {\n        return <div>\n            <p>{this.state.count}</p>\n            <button onClick={this.increase}>累加</button>\n        </div>\n    }\n    increase = () => {\n        // // 第二，不要直接修改 state ，使用不可变值 ----------------------------\n        // // this.state.count++ // 错误\n        // this.setState({\n        //     count: this.state.count + 1 // SCU\n        // })\n        // 操作数组、对象的的常用形式\n\n        // 第三，setState 可能是异步更新（有可能是同步更新） ----------------------------\n        \n        // this.setState({\n        //     count: this.state.count + 1\n        // }, () => {\n        //     // 联想 Vue $nextTick - DOM\n        //     console.log('count by callback', this.state.count) // 回调函数中可以拿到最新的 state\n        // })\n        // console.log('count', this.state.count) // 异步的，拿不到最新值\n\n        // // setTimeout 中 setState 是同步的\n        // setTimeout(() => {\n        //     this.setState({\n        //         count: this.state.count + 1\n        //     })\n        //     console.log('count in setTimeout', this.state.count)\n        // }, 0)\n\n        // 自己定义的 DOM 事件，setState 是同步的。再 componentDidMount 中\n\n        // 第四，state 异步更新的话，更新前会被合并 ----------------------------\n        \n        // // 传入对象，会被合并（类似 Object.assign ）。执行结果只一次 +1\n        // this.setState({\n        //     count: this.state.count + 1\n        // })\n        // this.setState({\n        //     count: this.state.count + 1\n        // })\n        // this.setState({\n        //     count: this.state.count + 1\n        // })\n        \n        // 传入函数，不会被合并。执行结果是 +3\n        this.setState((prevState, props) => {\n            return {\n                count: prevState.count + 1\n            }\n        })\n        this.setState((prevState, props) => {\n            return {\n                count: prevState.count + 1\n            }\n        })\n        this.setState((prevState, props) => {\n            return {\n                count: prevState.count + 1\n            }\n        })\n    }\n    // bodyClickHandler = () => {\n    //     this.setState({\n    //         count: this.state.count + 1\n    //     })\n    //     console.log('count in body event', this.state.count)\n    // }\n    // componentDidMount() {\n    //     // 自己定义的 DOM 事件，setState 是同步的\n    //     document.body.addEventListener('click', this.bodyClickHandler)\n    // }\n    // componentWillUnmount() {\n    //     // 及时销毁自定义 DOM 事件\n    //     document.body.removeEventListener('click', this.bodyClickHandler)\n    //     // clearTimeout\n    // }\n}\n\nexport default StateDemo\n\n// -------------------------- 我是分割线 -----------------------------\n\n// // 不可变值（函数式编程，纯函数） - 数组\n// const list5Copy = this.state.list5.slice()\n// list5Copy.splice(2, 0, 'a') // 中间插入/删除\n// this.setState({\n//     list1: this.state.list1.concat(100), // 追加\n//     list2: [...this.state.list2, 100], // 追加\n//     list3: this.state.list3.slice(0, 3), // 截取\n//     list4: this.state.list4.filter(item => item > 100), // 筛选\n//     list5: list5Copy // 其他操作\n// })\n// // 注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值\n\n// // 不可变值 - 对象\n// this.setState({\n//     obj1: Object.assign({}, this.state.obj1, {a: 100}),\n//     obj2: {...this.state.obj2, a: 100}\n// })\n// // 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值\n")])])]),a("p",[t._v("setState 在直接使用过程中是一个异步操作，在 setTimeout 及自定义 dom 事件中是同步操作。")]),t._v(" "),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821102844862.png"),alt:"生命周期"}}),t._v(" "),a("h2",{attrs:{id:"react-高级特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-高级特性"}},[t._v("#")]),t._v(" React 高级特性")]),t._v(" "),a("h3",{attrs:{id:"函数组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数组件"}},[t._v("#")]),t._v(" 函数组件")]),t._v(" "),a("p",[t._v("当 class 组件里只接收一个 props 渲染结果时，没有 state 等其他逻辑，这时可以通过函数组件代替。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821114322554.png"),alt:"函数组件代码"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821114436951.png"),alt:"函数组件"}}),t._v(" "),a("h3",{attrs:{id:"受控组件-vs-非受控组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#受控组件-vs-非受控组件"}},[t._v("#")]),t._v(" 受控组件 vs 非受控组件")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821114456601.png"),alt:"introduce"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821114529217.png"),alt:"introduce"}}),t._v(" "),a("h3",{attrs:{id:"portals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#portals"}},[t._v("#")]),t._v(" Portals")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821150926765.png"),alt:"Portals"}}),t._v(" "),a("h3",{attrs:{id:"react-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-context"}},[t._v("#")]),t._v(" React Context")]),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import React from 'react'\n\n// 创建 Context 填入默认值（任何一个 js 变量）\nconst ThemeContext = React.createContext('light')\n\n// 底层组件 - 函数是组件\nfunction ThemeLink (props) {\n    // const theme = this.context // 会报错。函数式组件没有实例，即没有 this\n\n    // 函数式组件可以使用 Consumer\n    return <ThemeContext.Consumer>\n        { value => <p>link's theme is {value}</p> }\n    </ThemeContext.Consumer>\n}\n\n// 底层组件 - class 组件\nclass ThemedButton extends React.Component {\n    // 指定 contextType 读取当前的 theme context。\n    // static contextType = ThemeContext // 也可以用 ThemedButton.contextType = ThemeContext\n    render() {\n        const theme = this.context // React 会往上找到最近的 theme Provider，然后使用它的值。\n        return <div>\n            <p>button's theme is {theme}</p>\n        </div>\n    }\n}\nThemedButton.contextType = ThemeContext // 指定 contextType 读取当前的 theme context。\n\n// 中间的组件再也不必指明往下传递 theme 了。\nfunction Toolbar(props) {\n    return (\n        <div>\n            <ThemedButton />\n            <ThemeLink />\n        </div>\n    )\n}\n\nclass App extends React.Component {\n    constructor(props) {\n        super(props)\n        this.state = {\n            theme: 'light'\n        }\n    }\n    render() {\n        return <ThemeContext.Provider value={this.state.theme}>\n            <Toolbar />\n            <hr/>\n            <button onClick={this.changeTheme}>change theme</button>\n        </ThemeContext.Provider>\n    }\n    changeTheme = () => {\n        this.setState({\n            theme: this.state.theme === 'light' ? 'dark' : 'light'\n        })\n    }\n}\n\nexport default App\n")])])]),a("p",[t._v("Context 会用在最外层定义的类似于主题、语言这些公共信息的一些逻辑不复杂的向下传递的数据。")]),t._v(" "),a("h3",{attrs:{id:"异步加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步加载"}},[t._v("#")]),t._v(" 异步加载")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821152805454.png"),alt:"异步加载"}}),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import React from 'react'\n\nconst ContextDemo = React.lazy(() => import('./ContextDemo'))\n\nclass App extends React.Component {\n    constructor(props) {\n        super(props)\n    }\n    render() {\n        return <div>\n            <p>引入一个动态组件</p>\n            <hr />\n            <React.Suspense fallback={<div>Loading...</div>}>\t\t//等待组件加载完毕\n                <ContextDemo/>\n            </React.Suspense>\n        </div>\n\n        // 1. 强制刷新，可看到 loading （看不到就限制一下 chrome 网速）\n        // 2. 看 network 的 js 加载\n    }\n}\n\nexport default App\n")])])]),a("h3",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("h4",{attrs:{id:"shouldcomponentupdate-scu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-scu"}},[t._v("#")]),t._v(" ShouldComponentUpdate（SCU）")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821153755880.png"),alt:"性能优化"}}),t._v(" "),a("p",[t._v("在 React 的默认情况下，父组件更新会导致子组件无条件更新。且由于 SCU 默认返回true，会导致一旦触发组件的渲染，会导致对应的所有组件更新，因此有时需要进行上图的优化。")]),t._v(" "),a("h3",{attrs:{id:"purecomponent-纯组件-和-memo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purecomponent-纯组件-和-memo"}},[t._v("#")]),t._v(" PureComponent （纯组件）和 memo")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821160242068.png"),alt:"纯组件"}}),t._v(" "),a("h3",{attrs:{id:"immutable-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immutable-js"}},[t._v("#")]),t._v(" immutable.js")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821160810422.png"),alt:"immutable"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821160756035.png"),alt:"immutable"}}),t._v(" "),a("h2",{attrs:{id:"react-高阶组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-高阶组件"}},[t._v("#")]),t._v(" React 高阶组件")]),t._v(" "),a("h3",{attrs:{id:"关于组建公共逻辑的抽离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于组建公共逻辑的抽离"}},[t._v("#")]),t._v(" 关于组建公共逻辑的抽离")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821161418160.png"),alt:"抽离公共逻辑"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821161514013.png"),alt:"抽离公共逻辑"}}),t._v(" "),a("p",[t._v("Render Props")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821163358748.png"),alt:"Render"}}),t._v(" "),a("h3",{attrs:{id:"redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821164753768.png"),alt:"Redux"}}),t._v(" "),a("h4",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("Redux")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821170652873.png"),alt:"Redux"}}),t._v(" "),a("p",[t._v("创建一个公共数据集 store，store 通过 reducer 来查看数据，同时通过 Provider 将包裹在里面的所有组件获得 store 中的内容。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821174044080.png"),alt:"代码块"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821175624648.png"),alt:"代码块"}}),t._v(" "),a("p",[t._v("同时，创建一个 reducer并返回一个函数，state中存放项目中存放的数据")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821174414443.png"),alt:"代码块"}}),t._v(" "),a("p",[t._v("当组件中需要修改 store 中的值时，需要通过 dispatch 派发 action")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821174557980.png"),alt:"代码块"}}),t._v(" "),a("p",[t._v("之后在 reducer 中修改如下")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821174818261.png"),alt:"代码块"}}),t._v(" "),a("p",[t._v("在组件中通过 subscribe 订阅 store，当 store 中的数据发生改变时，里面的内容会被自动执行。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821174956998.png"),alt:"代码块"}}),t._v(" "),a("p",[t._v("若想消费 Redux 的能力，需要将定义好的组件通过 connect 包裹一次")]),t._v(" "),a("p",[t._v("通过 mapStateTorops 和 mapDispatchToProps 完成一些操作后，将其传入对应组件。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821171505447.png"),alt:"代码块"}}),t._v(" "),a("h4",{attrs:{id:"redux-工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-工作流程"}},[t._v("#")]),t._v(" Redux 工作流程")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821165534725.png"),alt:"redux"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821170146145.png"),alt:"代码块"}}),t._v(" "),a("p",[t._v("action 本身是同步操作，在做异步操作时，需要引入 redux-thunk 的中间件，将return 的值改为函数")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821175835384.png"),alt:"代码块"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821180008245.png"),alt:"代码块"}}),t._v(" "),a("h2",{attrs:{id:"react-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-原理"}},[t._v("#")]),t._v(" React 原理")]),t._v(" "),a("h3",{attrs:{id:"vdom-和-diff-是实现-react-的核心技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vdom-和-diff-是实现-react-的核心技术"}},[t._v("#")]),t._v(" vdom 和 diff 是实现 React 的核心技术")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821205628052.png"),alt:"dom"}}),t._v(" "),a("h3",{attrs:{id:"jsx本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx本质"}},[t._v("#")]),t._v(" JSX本质")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821205653368.png"),alt:"JSX"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821211202721.png"),alt:"JSX"}}),t._v(" "),a("h3",{attrs:{id:"合成事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合成事件"}},[t._v("#")]),t._v(" 合成事件")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821211913969.png"),alt:"合成事件"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821211934998.png"),alt:"合成事件"}}),t._v(" "),a("h3",{attrs:{id:"setstate-和-batchupdate-机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setstate-和-batchupdate-机制"}},[t._v("#")]),t._v(" setState 和 batchUpdate 机制")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821212535356.png"),alt:"合成事件"}}),t._v(" "),a("p",[t._v("setState 在直接使用过程中是一个异步操作，在 setTimeout 及自定义 dom 事件中是同步操作。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821212700727.png"),alt:"合成事件"}}),t._v(" "),a("p",[t._v("setState 是异步操作还是同步操作，取决于 batchUpdate 是否命中")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821213046839.png"),alt:"合成事件"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821213131937.png"),alt:"合成事件"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821213210751.png"),alt:"合成事件"}}),t._v(" "),a("h3",{attrs:{id:"组件渲染和更新过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件渲染和更新过程"}},[t._v("#")]),t._v(" 组件渲染和更新过程")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821214351324.png"),alt:"合成事件"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821214446578.png"),alt:"合成事件"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821214544543.png"),alt:"合成事件"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821214725582.png"),alt:"合成事件"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/React/image-20210821214821924.png"),alt:"合成事件"}})])}),[],!1,null,null,null);e.default=n.exports}}]);