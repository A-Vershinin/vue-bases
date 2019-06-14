<template>
  <div id="app">
    <h2 v-colored="'green'">{{ title }}</h2>


  </div>
</template>

<script>


export default {
  data() {
    return {
      title: 'Hello I am Vue!',
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
