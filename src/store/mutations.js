export default {
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
  },
  /**
   * TODOの状態を指定したものに変える
   *
   * @params {Object} state vuexの状態
   * @params {Object} target 状態を変えたいTODOの名前 status 変更後のTODOの状態
   * @returns void
   */
  changeTodoState(state, { target, status }) {
    const todo = state.todos.find(x => x.name === target);
    if (todo !== undefined) {
      todo.isDone = status;
    }
  }
};
