import Vue from "vue";

export type Todo = {
  key: number;
  todo: string;
};

const store = Vue.observable({
  todoList: [] as Todo[]
});

export const mutations = {
  addTodo() {
    store.todoList.push({
      key: new Date().getTime(),
      todo: ""
    });
  },
  removeTodo(index: number) {
    store.todoList.splice(index, 1);
  },
  updateTodo(index: number, value: string) {
    store.todoList[index].todo = value;
  }
};

export default store as Readonly<typeof store>;
