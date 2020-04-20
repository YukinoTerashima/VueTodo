<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-card class="elevation-12 statusbox">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>{{ showstatus }}</v-toolbar-title>
            <v-spacer />
            
            <v-tooltip v-if="status==='done'" right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  v-on="{
                    ...on,
                    click: ()=> $emit('cleanTodo')
                  }"
                >
                  <v-icon>mdi-cart-remove</v-icon>
                </v-btn>
              </template>
              <span>Clear</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <div
              class="col"
              @dragover="$event.preventDefault()"
              @drop="$emit('dropCard', status)"
            >
              <div v-for="task in taskList" :key="task.name">
                <div class="card" 
                     draggable="true" 
                     @dragstart="$emit('moveCard', task)" >
                  {{ task.name }}
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      status : String,
      taskList: Array
    },
    computed: {
      showstatus() {
        const showstatus = {"done":"Done", "doing":"Doing", "todo": "ToDo"}
        return showstatus[this.status]
      },
    }
  }
</script>

<style scoped>
.col {
  height: 500px;
  width: 3  00px;
}
.card {
  width: calc(100% - 20px);
  border: solid black 1px;
  height: 50px;
  margin: 5px;
}
.statusbox {
  width:100%;
}
</style>