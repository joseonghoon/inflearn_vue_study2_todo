<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        내용을 입력하세요.
      </h3>
      <div slot="body" @click="showModal = false">
        <button>확인</button>
      </div>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from "./common/AlertModal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // this.$emit('이벤트 이름', 인자1, 인자2...)
        this.$store.commit('addOnItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    AlertModal
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 20px;
}
.inputBox input {
  height: 40px;
  width: 80%;
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #64c4fb, #159af3);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  width: 50px;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
  width: 25px;
  height: 25px;
}
</style>