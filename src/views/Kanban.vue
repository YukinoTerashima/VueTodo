<template>
  <div class="home">
    <h2>Add ToDo</h2>
    <form @submit="addTodo">
      <input v-model="newText" type="text" />
      <button type="submit">作成</button>
    </form>
    <h2>ToDo</h2>
    <div class="wrapper">
      <div
        class="col"
        @dragover="$event.preventDefault()"
        @drop="dropCard(false)"
      >
        <h2>ToDo</h2>
        <div
          class="card"
          draggable="true"
          @dragstart="moveCard(todo)"
          v-for="todo in notDoneTodo"
          :key="todo.name"
        >
          {{ todo.name }}
        </div>
      </div>
      <div
        class="col"
        @dragover="$event.preventDefault()"
        @drop="dropCard(true)"
      >
        <h2>Done <button @click="cleanTodo">Clean</button></h2>
        <div
          class="card"
          draggable="true"
          v-for="todo in doneTodo"
          :key="todo.name"
        >
          {{ todo.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API
// https://developer.mozilla.org/ja/docs/DragDrop/Drag_Operations
export default {
  name: "Kanban",
  data() {
    return {
      newText: "",
      movingCard: undefined
    };
  },
  methods: {
    addTodo() {
      this.$store.commit("addTodo", this.newText);
      this.newText = "";
    },
    cleanTodo() {
      this.$store.commit("cleanTodo");
    },
    moveCard(todo) {
      this.movingCard = todo;
    },
    dropCard(isDone) {
      this.movingCard.isDone = isDone;
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
<style scoped>
.wrapper {
  display: flex;
}
.col {
  height: 500px;
  width: 200px;
  border: solid black 1px;
}
.card {
  width: calc(100% - 20px);
  border: solid black 1px;
  height: 50px;
  margin: 5px;
}
</style>
