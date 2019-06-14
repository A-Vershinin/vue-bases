<template>
  <div id="app">
    <h2 v-colored v-if="visible">{{ title }}</h2>

    <button @click="visible = !visible">Toggle</button>
    <button @click="title = 'New Title'">Change title</button>
  </div>
</template>

<script>


export default {
  data() {
    return {
      title: 'Hello I am Vue!',
      visible: true,
    }
  },
};
</script>

<style scoped>
  #app {
    text-align: center;
    margin-top: 60px;
  }

  h2 {
    border: 1px solid black;
  }
</style>
