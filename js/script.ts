import "./mount";
import $ from "jquery";
import { mutations } from "./Store";

/* eslint-disable func-names */
$(function() {
  $("#addTodo").on("click", function() {
    mutations.addTodo();
  });

  $("#todoList").on("click", ".delete", function() {
    mutations.removeTodo(
      $("#todoList")
        .find(".delete")
        .index(this)
    );
  });
});
