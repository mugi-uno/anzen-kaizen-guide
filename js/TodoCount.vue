<template>
  <span id="todoCount">(全{{count}}件)</span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    count() {
      return 0; // dummy
    }
  }
});
</script>

<style scoped>
span {
  font-size: 0.8em;
}
</style>
