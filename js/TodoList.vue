<template>
  <div id="todoList" v-show="visible">
    <div
      v-for="(todo, index) in todoList"
      :key="todo.key"
      class="todo"
    >
      <input type="text" @input="updateTodo(index, $event.target.value)" />
      <button class="delete" @click="removeTodo(index)">削除</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Todo } from "./Store";

export default Vue.extend({
  props: {
    visible: { type: Boolean },
    todoList: { type: Array as PropType<Todo[]> }
  },
  methods: {
    updateTodo(index: number, value: string) {
      this.$emit("updateTodo", { index, value });
    },
    removeTodo(index: number){
      this.$emit("removeTodo", index);
    }
  }
});
</script>

<style scoped>
#todoList {
  border-radius: 5px;
  border: 1px dashed gray;
  margin: 20px 0px;
  padding: 20px;
  text-align: center;
  width: 400px;
}

.todo input {
  width: 80%;
}
</style>
