<template>
  <header :class="{ 'dark-mode': isDarkMode }">
  <!-- <header> -->
    <h1>ToDo</h1>
    <div class="option">
      <label class="switch">
        <!-- <input type="checkbox"/> -->
        <input type="checkbox" v-model="isDarkMode" @change="saveDarkModeState"/>
        <span class="slider"></span>
      </label>
      <p>{{ currentDateWithDay }}</p>
    </div>
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
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    // 컴포넌트가 생성될 때 로컬 스토리지에서 값을 불러옴
    this.loadDarkModeState();
  },
  methods: {
    saveDarkModeState() {
      // isDarkMode의 값이 변경될 때 로컬 스토리지에 저장
      localStorage.setItem('isDarkMode', this.isDarkMode.toString());
      //화면 새로고침 동적이지 않음;;;;;
      location.reload();
    },
    loadDarkModeState() {
      // 컴포넌트가 생성될 때 로컬 스토리지에서 값을 불러와 isDarkMode에 할당
      const storedValue = localStorage.getItem('isDarkMode');
      if (storedValue !== null) {
        this.isDarkMode = JSON.parse(storedValue);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
  text-align: center;
}
.dark-mode h1 {
  color: #848c9c;
}

p {
  margin: 0 20px 0.2rem;
  width: fit-content;
}

.dark-mode p {
  color: white;
}

.option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
/* 다크 모드 스위치 스타일 */
.switch {
  margin: 0 20px 0.2rem;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  background-image: url('../assets/light.png');
  background-size: contain;
  transition: 0.4s;
  border-radius: 34px;
  border: 1px solid black;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: rgb(1, 41, 41);
  background-image: url('../assets/dark.png');
  background-size: contain;
  border: 1px solid white;
}

input:checked + .slider:before {
  transform: translateX(26px);
}
</style>