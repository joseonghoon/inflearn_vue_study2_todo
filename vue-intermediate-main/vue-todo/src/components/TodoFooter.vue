<template>
  <div class="clearAllContainer">
    <b-button variant="outline-danger" v-on:click="clearTodo">Clear ALL</b-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
 methods: {
  ...mapMutations({
    clearTodo: 'clearAllItems'
  }),
 }
}
</script>

<style scoped>
.clearAllContainer {
  height: fit-content;
  width: fit-content;
  margin: 20px auto;
}
</style>