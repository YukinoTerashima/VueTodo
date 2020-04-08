<template>
  <div class="home">
    <h2>Add ToDo</h2>
    <!-- <form @submit="addTodo">
      <input v-model="newText" type="text" />
      <button type="submit">作成</button>
    </form> -->
    <v-container>
      <v-form @submit="addTodo">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="newText" label="新規ToDo" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn class="mx-2" fab dark color="indigo" @click="addTodo">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
    <h2>ToDo</h2>
    <div class="wrapper">
      <div
        class="col"
        @dragover="$event.preventDefault()"
        @drop="dropCard('todo')"
      >
        <h2>ToDo</h2>
        <div
          class="card"
          draggable="true"
          @dragstart="moveCard(t)"
          v-for="t in todo"
          :key="t.name"
        >
          {{ t.name }}
        </div>
      </div>
      <div
        class="col"
        @dragover="$event.preventDefault()"
        @drop="dropCard('doing')"
      >
        <h2>Doing</h2>
        <div
          class="card"
          draggable="true"
          v-for="t in doingTodo"
          @dragstart="moveCard(t)"
          :key="t.name"
        >
          {{ t.name }}
        </div>
      </div>
      <div
        class="col"
        @dragover="$event.preventDefault()"
        @drop="dropCard('done')"
      >
        <h2>Done <button @click="cleanTodo">Clean</button></h2>
        <div
          class="card"
          draggable="true"
          v-for="t in doneTodo"
          @dragstart="moveCard(t)"
          :key="t.name"
        >
          {{ t.name }}
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
      this.movingCard = todo.name;
    },
    dropCard(status) {
      this.$store.commit("changetaskstate", {
        target: this.movingCard,
        status: status
      });
      this.movingCard = "";
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    todo() {
      return this.$store.getters.todo;
    },
    doneTodo() {
      return this.$store.getters.doneTodo;
    },
    doingTodo() {
      return this.$store.getters.doingTodo;
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
