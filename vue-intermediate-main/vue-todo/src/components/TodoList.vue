<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <span
          class="checkBtn"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete({ todoItem, index })"
        >
          <i class="fas fa-check"></i>
        </span>
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem",
    }),
  },
  computed: {
    ...mapGetters(["storedTodoItems"]),
  },
  mounted() {
    // 컴포넌트가 생성될 때 로컬 스토리지에서 값을 불러와 data에 할당
    const storedValue = localStorage.getItem("isDarkMode");
    if (storedValue !== null) {
      this.isDarkMode = JSON.parse(storedValue);
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
  margin: 0 20px;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 20px;
}

.dark-mode li {
  background: #333;
  color: white;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 10px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>