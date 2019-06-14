<template>
  <div id="app">
    <Counter />
    <Car />
  </div>
</template>

<script>
import Car from "./components/Car.vue";
import Counter from "./components/Counter.vue";

export default {
  components: {
    Car,
    Counter
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
