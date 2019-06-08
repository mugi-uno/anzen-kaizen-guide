<template>
  <div id="todoList" v-show="visible">
    <div
      v-for="(todo, index) in todoList"
      :key="todo.key"
      class="todo"
    >
      <input type="text" @input="updateTodo(index, $event.target.value)" />
      <button class="delete">削除</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store, { mutations } from "./Store";

export default Vue.extend({
  computed: {
    visible() {
      return store.todoList.length > 0;
    },
    todoList() {
      return store.todoList;
    }
  },
  methods: {
    updateTodo(index: number, value: string) {
      mutations.updateTodo(index, value);
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
