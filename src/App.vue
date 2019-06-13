<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-car></app-car>
  </div>
</template>

/*
  Название компонента
*/

<script>


export default {
  data() {
    return {
      msg: 'Hello, I am Vue!',
    }
  },
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
