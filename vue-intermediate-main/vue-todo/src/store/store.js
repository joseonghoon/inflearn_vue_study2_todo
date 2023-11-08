import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp';
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex);

//프로젝트 구조화 및 모듈화

// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) {
//                 arr.push(
//                     JSON.parse(localStorage.getItem(localStorage.key(i)))
//                 );
//             }
//         }
//         return arr;
//     },
// };

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
    // state: {
    //     todoItems: storage.fetch()
    // },
    // getters,
    // mutations
});