<template>
  <header>
    <h1>ToDo</h1>
    <p>{{ currentDateWithDay }}</p>
  </header>
</template>

<script>
export default {
  computed: {
    currentDateWithDay() {
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString(); // 현재 날짜
      const day = daysOfWeek[currentDate.getDay()]; // 현재 요일
      return `${date} (${day})`;
    },
  },
};
</script>

<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
p {
  margin: 0 0 0.2rem;
  text-align: right;
}
</style>