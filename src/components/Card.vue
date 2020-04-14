<template>
  <div class="card" draggable="true" @dragstart="$emit('moveCard', task)">
    {{ task.name }}
  </div>
</template>

<script>
//https://qiita.com/tkhr/items/ac22019c891fe8fa5f91
export default {
  name: "Card",
  props: ["task"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.card {
  width: calc(100% - 20px);
  border: solid black 1px;
  height: 50px;
  margin: 5px;
}
</style>
