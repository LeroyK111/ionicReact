/**
 * @author Leroy
 * ! 使用mobx进行全局状态共享
 * ! State(状态) Actions(动作) Derivations(派生)
 * ! 其实本质上是利用了es6语法中Proxy+Reflect的数据代理
 * ! vue3使用它完成数据双向绑定
 */

import React, { createContext } from "react";
// 我们使用最原始API
import { makeAutoObservable, runInAction } from "mobx";
// 构建响应式组件
import { observer } from "mobx-react";
// 导入axios
import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Store1 from "./Store1";

export const myContext = createContext<any>(null);

// ?外置全局状态
function createDoubler(value: number) {
  return makeAutoObservable({
    vip: "会员",
    msg: {},
    value,
    test: {},
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

    // !直接异步转同步
    async req() {
      const res = await axios.get("http://192.168.1.26:3333");
      runInAction(() => {
        this.msg = res.data;
      });
    },

    // !本身就可以实现异步更新
    run() {
      fetch("http://192.168.1.26:3333/api", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          runInAction(() => {
            this.test = data;
          });
        });
    },
  });
}

// todo 这样一来，我们就使用context包装了一个全局状态树
const Doubler = createDoubler(1);

// todo 如果有多个状态，我们还需要合并这些状态和方法，可以...直接合并里面所有的方法和属性（不可有重名）
// const Doubler = {...createDoubler(1), ...new Store1(1)}
// todo 直接传入对象，然后根据命名空间使用方法和属性（这个允许重名）
// const Doubler = {Store: createDoubler(1), Store1: new Store1(1)}

// todo 如果初始状态需要请求获得，则我们还需要先action触发一下
Doubler.req();
Doubler.run();

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
