import Vue from "vue";

type Todo = {
  key: number;
  todo: string;
};

const store = Vue.observable({
  todoList: [] as Todo[],
  nextTodoText: "",
  todoCount: 0
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
  updateNextTodoText(nextTodoText: string) {
    store.nextTodoText = nextTodoText;
  },
  updateTodoCount(todoCount: number) {
    store.todoCount = todoCount;
  }
};

export default store as Readonly<typeof store>;
