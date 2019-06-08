<template>
  <span id="nextTodo">次のTODO: {{nextTodoText}}</span>
</template>

<script lang="ts">
import Vue from "vue";
import store from "./Store";

export default Vue.extend({
  computed: {
    nextTodoText() {
      return store.todoList.length > 0 ?
              store.todoList[0].todo :
              "(未登録)";
    }
  }
});
</script>

<style scoped>
span {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
