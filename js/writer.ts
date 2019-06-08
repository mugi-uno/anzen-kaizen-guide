import $ from "jquery";

export const toggleTodoList = count => {
  if (count) {
    $("#todoList").show();
  } else {
    $("#todoList").hide();
  }
};

export const toggleTodoEmpty = count => {
  if (count) {
    $("#todoEmpty").hide();
  } else {
    $("#todoEmpty").show();
  }
};
