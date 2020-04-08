export default {
  addTodo(state, newText) {
    state.tasks.push({
      name: newText,
      status: "todo"
    });
  },

  deleteTodo(state, deleteTarget) {
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    state.tasks = state.tasks.filter(todo => todo.name !== deleteTarget.name); //Trueのやつが残る
  },

  cleanTodo(state) {
    state.tasks = state.tasks.filter(t => t.status !== "done");
  },
  /**
   * TODOの状態を指定したものに変える
   *
   * @params {Object} state vuexの状態
   * @params {Object} target 状態を変えたいTODOの名前 status 変更後のTODOの状態
   * @returns void
   */
  changetaskstate(state, { target, status }) {
    const todo = state.tasks.find(x => x.name === target);
    if (todo !== undefined) {
      todo.status = status;
    }
  }
};
