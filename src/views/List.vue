<template>
  <v-app>
    <div class="home">
      <h2>Add ToDo</h2>
      <form @submit="addTodo">
        <input v-model="newText" type="text" />
        <button type="submit">作成</button>
      </form>
      <h2>ToDo</h2>
      <ul>
        <v-container fluid>
          <li v-for="t in todo" :key="t.name">
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="4">
                <v-select
                  :items="items"
                  v-model="t.status"
                  item-text="label"
                  item-value="value"
                  label="Status"
                  return-object
                  @change="changeStatus(t, $event)"
                ></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="4">
                <!-- <input type="checkbox" v-model="t.state===''" /> -->
                {{ t.name }}
              </v-col>
              <v-col class="d-flex" cols="12" sm="4">
                <button @click="deleteTodo(t)">削除</button>
              </v-col>
            </v-row>
          </li>
        </v-container>
      </ul>
      <h2>Doing</h2>
      <button @click="cleanTodo">Clean</button>
      <ul>
        <li v-for="t in doingTodo" :key="t.name">
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="4">
              <v-select
                :items="items"
                :value="t.status"
                item-text="label"
                item-value="value"
                label="Status"
                return-object
                @change="changeStatus(t, $event)"
              ></v-select>
              <!-- 何に変えたのかって情報-->
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <!-- <input type="checkbox" v-model="t.state===''" /> -->
              {{ t.name }}
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <button @click="deleteTodo(t)">削除</button>
            </v-col>
          </v-row>
        </li>
      </ul>
      <h2>Done</h2>
      <button @click="cleanTodo">Clean</button>
      <ul>
        <li v-for="t in doneTodo" :key="t.name">
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="4">
              <v-select
                :items="items"
                v-model="t.status"
                item-text="label"
                item-value="value"
                label="Status"
                return-object
                @change="changeStatus(t, $event)"
              ></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <!-- <input type="checkbox" v-model="t.state===''" /> -->
              {{ t.name }}
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <button @click="deleteTodo(t)">削除</button>
            </v-col>
          </v-row>
        </li>
      </ul>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      newText: "",
      items: [
        { label: "ToDo", value: "todo" },
        { label: "Done", value: "done" },
        { label: "Doing", value: "doing" }
      ]
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
    },
    changeStatus(task, event) {
      // console.log(event)
      // task.status = event.value
      // console.log(task)
      this.$store.commit("changetaskstate", {
        target: task.name,
        status: event.value
      });
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
