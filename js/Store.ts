import Vue from "vue";

const store = Vue.observable({
  nextTodoText: "",
  todoCount: 0
});

export const mutations = {
  updateNextTodoText(nextTodoText: string) {
    store.nextTodoText = nextTodoText;
  },
  updateTodoCount(todoCount: number) {
    store.todoCount = todoCount;
  }
};

export default store as Readonly<typeof store>;
