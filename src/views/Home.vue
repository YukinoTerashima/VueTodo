<template>
  <div class="home">
    <h2>Add ToDo</h2>
    <form @submit="addTodo">
      <input v-model="newText" type="text" />
      <button type="submit">作成</button>
    </form>
    <h2>ToDo</h2>
    <ul>
      <li v-for="todo in notDoneTodo" :key="todo.name">
        <input type="checkbox" v-model="todo.isDone" />
        {{ todo.name }}
        <button @click="deleteTodo(todo)">削除</button>
      </li>
    </ul>
    <h2>Done</h2>
    <button @click="cleanTodo">Clean</button>
    <ul>
      <li v-for="todo in doneTodo" :key="todo.name">
        <input type="checkbox" v-model="todo.isDone" />
        {{ todo.name }}
        <button @click="deleteTodo(todo)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newText: "",
      todos: [
        { name: "TODO1", isDone: false },
        { name: "TODO2", isDone: true },
        { name: "TODO3", isDone: false }
      ]
    };
  },
  methods: {
    addTodo(/** 指定がなかった時第一引数はイベントオブジェクト */) {
      this.todos.push({
        name: this.newText,
        isDone: false
      });
      this.newText = "";
    },

    deleteTodo(deleteTarget) {
      // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      this.todos = this.todos.filter(todo => todo.name !== deleteTarget.name); //Trueのやつが残る
    },

    cleanTodo() {
      this.todos = this.notDoneTodo;
    }
  },
  computed: {
    doneTodo() {
      return this.todos.filter(todo => todo.isDone);
    },
    notDoneTodo() {
      return this.todos.filter(todo => !todo.isDone);
    }
  }
};
</script>
