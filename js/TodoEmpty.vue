<template>
  <div id="todoEmpty" v-show="visible">タスクがありません</div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "./Store";

export default Vue.extend({
  computed: {
    visible() {
      return store.todoCount === 0;
    }
  }
});
</script>

<style scoped>
div {
  border-radius: 5px;
  border: 1px dashed gray;
  margin: 20px 0px;
  padding: 20px;
  text-align: center;
  width: 400px;
}
</style>
