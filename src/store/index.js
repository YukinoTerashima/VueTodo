// https://vuex.vuejs.org/ja/
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { name: "TODO1", isDone: false },
      { name: "TODO2", isDone: true },
      { name: "TODO3", isDone: false }
    ]
  },
  getters: {
    doneTodo: state => {
      return state.todos.filter(todo => todo.isDone);
    },
    notDoneTodo: state => {
      return state.todos.filter(todo => !todo.isDone);
    }
  },
  mutations: {
    addTodo(state, newText) {
      state.todos.push({
        name: newText,
        isDone: false
      });
    },

    deleteTodo(state, deleteTarget) {
      // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      state.todos = state.todos.filter(todo => todo.name !== deleteTarget.name); //Trueのやつが残る
    },

    cleanTodo(state) {
      state.todos = state.todos.filter(todo => !todo.isDone);
    }
  },
  actions: {},
  modules: {}
});
