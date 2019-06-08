import "./mount";
import $ from "jquery";
import { readData } from "./reader";
import { toggleTodoList, toggleTodoEmpty, removeTodo, addTodo } from "./writer";
import { mutations } from "./Store";

/* eslint-disable func-names */
function updateAll() {
  const { count, nextTodoText } = readData();

  mutations.updateNextTodoText(nextTodoText as string);
  mutations.updateTodoCount(Number(count));

  toggleTodoList(count);
  toggleTodoEmpty(count);
}

$(function() {
  $("#addTodo").on("click", function() {
    addTodo();
    updateAll();
  });

  $("#todoList").on("input", ".todo:eq(0)", function() {
    updateAll();
  });

  $("#todoList").on("click", ".delete", function() {
    removeTodo(this);
    updateAll();
  });

  updateAll();
});
