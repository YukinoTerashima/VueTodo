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
            <slot name="titlebar" />
          </v-toolbar>
          <v-card-text>
            <div
              class="col"
              @dragover="$event.preventDefault()"
              @drop="$emit('dropCard')"
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
      taskList: Array
    },
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