<template>
  <div id="app">
    <BaseExample />

  </div>
</template>

<!-- <TodoList v-bind:list="groceryList" /> -->

<script>
import BaseExample from './components/BaseExample.vue';
import TodoList from './components/TodoList.vue';

const arrGrocery = [
  { id: 0, text: 'Овощи' },
  { id: 1, text: 'Сыр' },
  { id: 2, text: 'Что там ещё люди едят?' }
];

export default {
  data() {
    return {
      groceryList: [...arrGrocery],
    }
  },
  components: {
    BaseExample,
  },
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
