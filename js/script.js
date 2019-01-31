function updateAll() {
  var count = $('.todo').length;
  var next = $('.todo input').first();
  var nextTodoText = count ? next.val() : '(未登録)'

  $('#nextTodo').text('次のTODO: ' + nextTodoText);
  $('#todoCount').text('(全' + count + '件)');

  if (count) {
    $('#todoList').show();
    $('#todoEmpty').hide();
  } else {
    $('#todoList').hide();
    $('#todoEmpty').show();
  }
}

function addTodo() {
  var wrapper = $('<div>');
  wrapper.addClass('todo');

  var input = $('<input>');
  input.attr('type', 'text');

  var deleteButton = $('<button>');
  deleteButton.addClass('delete').text('削除');

  wrapper.append(input);
  wrapper.append(deleteButton);
  $('#todoList').append(wrapper);
}

$(function() {
  $('#addTodo').on('click', function() {
    addTodo();
    updateAll();
  });

  $('#todoList').on('input', '.todo:eq(0)', function() {
    updateAll();
  });

  $('#todoList').on('click', '.delete', function() {
    $(this).closest('.todo').remove();
    updateAll();
  });

  updateAll();
});
