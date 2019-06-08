<template>
  <span id="nextTodo">次のTODO: {{nextTodoText}}</span>
</template>

<script lang="ts">
import Vue from "vue";
import store from "./Store";

export default Vue.extend({
  computed: {
    nextTodoText() {
      return store.nextTodoText;
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
