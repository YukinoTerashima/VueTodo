export default {
  doneTodo(state) {
    return state.tasks.filter(t => t.status === "done");
  },
  todo(state) {
    return state.tasks.filter(t => t.status === "todo");
  },
  doingTodo(state) {
    return state.tasks.filter(t => t.status === "doing");
  }
};
