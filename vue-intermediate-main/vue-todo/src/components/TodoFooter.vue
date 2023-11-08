<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear ALL</span>
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
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 20px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
  transition: background-color 0.5s ease;
}
.clearAllBtn:active {
  background-color: #616161;
  color: white;
}
</style>