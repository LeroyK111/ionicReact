/**
 * @author Leroy
 * !class类包装法
 * !
 */

import {
  makeObservable,
  observable,
  computed,
  action,
  flow,
  autorun,
} from "mobx";

class Store1 {
  value;

  constructor(value: any) {
    this.value = value;

    // 老方法，包装
    makeObservable(this, {
      value: observable,
      // 老方法, 包装计算属性
      double: computed,
      increment: action,
      // 锁定方法，可以更安全的调用
      lockAction: action.bound,
    });
    this.value = value;

    // 自动推断，属性包装形式
    // makeAutoObservable(this)
  }

  // 老方法，计算属性
  get double() {
    return this.value * 2;
  }

  lockAction() {
    this.value += 2;
  }

  // 老方法，动作
  increment() {
    this.value++;
  }
}

export default Store1;
