<template>
  <div id="app">
    <BaseExamples msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<!-- <TodoList v-bind:list="groceryList" /> -->

<script>
import BaseExamples from './components/BaseExamples.vue';
import TodoList from './components/TodoList.vue';

const arrGrocery = [
  { id: 0, text: 'Овощи' },
  { id: 1, text: 'Сыр' },
  { id: 2, text: 'Что там ещё люди едят?' }
];

export default {
  name: 'app',
  data() {
    return {
      groceryList: [...arrGrocery],
    }
  },
  components: {
    BaseExamples,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
