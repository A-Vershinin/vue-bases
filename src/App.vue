<script>
import Counter from "./components/Counter.vue";
import Actions from "./components/Actions.vue";
import SecondCounter from './components/SecondCounter.vue';

export default {
  components: {
    Counter,
    Actions,
    SecondCounter
  }
}
</script>

<template>
  <div id="app">
    <div class="container text-center mt-5">
      <Counter />
      <SecondCounter />
      <Actions />
    </div>
  </div>
</template>

<style></style>
