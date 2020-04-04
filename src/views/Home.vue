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
      newText: ""
    };
  },
  methods: {
    addTodo() {
      this.$store.commit("addTodo", this.newText);
      this.newText = "";
    },
    deleteTodo(deleteTarget) {
      this.$store.commit("deleteTodo", deleteTarget);
    },
    cleanTodo() {
      this.$store.commit("cleanTodo");
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    notDoneTodo() {
      return this.$store.getters.notDoneTodo;
    },
    doneTodo() {
      return this.$store.getters.doneTodo;
    }
  }
};
</script>
