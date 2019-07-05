```
npx create-react-app react-todos --scripts-version=react-scripts-ts
```

class => className
https://reactjs.org/docs/dom-elements.html#classname

label => htmlFor
https://reactjs.org/docs/accessibility.html#labeling

input => input />
https://reactjs.org/docs/introducing-jsx.html#specifying-children-with-jsx

"react-ts-with-scss": "3.0.1"
no-webpack

React 如何添加多个className
https://segmentfault.com/q/1010000005664656

checked={boolean}
https://reactjs.org/docs/dom-elements.html#checked
https://codepen.io/dsabalete/pen/jAzLpA?editors=0010

defaultChecked 只构建一次

export default error component
/node_modules/@types/jest-diff/index.d.ts' only in casing.

Import sources within a group must be alphabetized 
"ordered-imports": [false],
"object-literal-sort-keys": [false]
https://github.com/Microsoft/TypeScript-React-Starter/issues/159

getting-an-input-value-when-form-is-submitted-react
https://www.freecodecamp.org/forum/t/getting-an-input-value-when-form-is-submitted-react/161870

react form
https://reactjs.org/docs/forms.html


https://github.com/cypress-io/cypress/issues/1087

https://github.com/wmonk/create-react-app-typescript/issues/370

ref
https://reactjs.org/docs/accessibility.html#accessible-forms

三种this指向组件方式

save css error
 
编译时改文件名 ts: bug

export default 任意命名 组件 组件使用

React discourage event delegation
click only once
https://blog.cloudboost.io/why-react-discourage-event-delegation-2b5fe3f52bea

good way to set state
https://www.robinwieruch.de/react-state-array-add-update-remove/
https://itnext.io/updating-properties-of-an-object-in-react-state-af6260d8e9f5

type interface
https://itnext.io/how-to-properly-define-state-in-react-components-47544eb4c15d

Q: React 如何保证组件独立? eg: `TodosList` 里面的多个 `TodosItem`
A: by key.

How to properly define state type
https://itnext.io/how-to-properly-define-state-in-react-components-47544eb4c15d
https://github.com/fi3ework/blog/tree/master/react-typescript-cheatsheet-cn

state init in constructor
http://varnull.cn/set-state-in-react-component-life-cycle/

函数传参 不建议`lambda`表达式
https://github.com/palantir/tslint-react/issues/96

setState
updater 函数中接收的 state 和 props 都保证为最新。updater 的返回值会与 state 进行**浅合并**。
https://zh-hans.reactjs.org/docs/react-component.html#setstate

once Click vs double Click

我们为什么要写`super(props);`
```
  constructor(props :any) {
    // 🔴 这时候还不能使用 `this`
    // 在 JavaScript 中，super 指代父类的构造函数。ref: https://juejin.im/post/5c04fea5f265da6133565696
    super(props);
    // ✅ 现在可以使用 `this` 了
    this.handleClick = this.handleClick.bind(this);
  }
```

### typescript
`npx create-react-app my-app --typescript`
https://facebook.github.io/create-react-app/docs/adding-typescript

### redux
`npm install -S redux react-redux @types/react-redux`
https://github.com/microsoft/TypeScript-React-Starter#installing-redux

### redux state to localstorage
https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
