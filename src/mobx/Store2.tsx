/**
 * @author Leroy
 * 直接包装法
 */

import { observable, action, runInAction, autorun } from "mobx";

const todosById = observable({
  "TODO-123": {
    title: "find a decent task management system",
    done: false,
  },
});

const tags = observable(["high prio", "medium prio", "low prio"]);

// ?这是直接包装法触发方法
const state = observable({ value: 0 });
const increment = action((state: any) => {
  state.value++;
  state.value++;
});

// ?调用触发器时，需要实例化
// increment(state)

// todo这个方法，则会立即调用触发器，
// runInAction(() => {
//   state.value++;
// });

// ?自动执行函数，当state改变时
autorun(() => {
  console.log(state.value);
});

const data = { todosById, tags, state, increment };

export default data;
