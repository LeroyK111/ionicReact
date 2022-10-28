/**
 * @author Leroy
 * ! 使用mobx进行全局状态共享
 * ! State(状态) Actions(动作) Derivations(派生)
 * ! 其实本质上是利用了es6语法中Proxy+Reflect的数据代理
 * ! vue3使用它完成数据双向绑定
 */

import React, { createContext } from "react";
// 我们使用最原始API
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeAutoObservable, runInAction, flowResult, flow } from "mobx";
// 构建响应式组件
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { observer, useLocalObservable } from "mobx-react";
import { ResponseGenerator } from "../react-app-env";

export const myContext = createContext<any>(null);

// todo外置全局状态
function createDoubler(value: number) {
  return makeAutoObservable({
    value,
    vip: "会员",
    msg: {},
    obj: {
      a: "一层",
      b: {
        c: "二层",
      },
    },
    get double() {
      return this.value * 2;
    },
    increment() {
      this.value++;
      this.obj.b.c = "我被更改了" + String(this.value);
    },
    // 创建一个异步初始状态
    *req() {
      const response: ResponseGenerator = yield fetch("http://127.0.0.1:3333/");
      const data = response.json();
      this.msg = data;
    },
  });
}

// todo这样一来，我们就使用context包装了一个全局状态树
const Doubler = createDoubler(1);
await flowResult(Doubler.req());

const MyComponent = observer((props: any) => {
  // ?内置全局状态
  // const Doubler = useLocalObservable(() => ({
  //   value: 1,
  //   vip: "会员",
  //   get double() {
  //     return this.value * 2;
  //   },
  //   increment() {
  //     this.value++;
  //   },
  // }));

  return (
    <myContext.Provider value={Doubler}>{props.children}</myContext.Provider>
  );
});

export default MyComponent;
