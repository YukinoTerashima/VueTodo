export default {
  doneTodo(state) {
    return state.todos.filter(todo => todo.isDone);
  },
  notDoneTodo(state) {
    return state.todos.filter(todo => !todo.isDone);
  }
};
