import Vue from "vue";
import NextTodo from "./NextTodo.vue";
import TodoCount from "./TodoCount.vue";

new Vue(NextTodo).$mount("#nextTodo");
new Vue(TodoCount).$mount("#todoCount");
