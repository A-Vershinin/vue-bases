<template>
  <div id="app">
    <Counter />
    <Car>
      <h2>Mazda + html</h2>
      <h3>Car name from parent: {{ carName }}</h3>
      <p slot="text">
        Text for slot with name `text`.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      </p>
    </Car>
  </div>
</template>

<script>
import Car from "./components/Car.vue";
import Counter from "./components/Counter.vue";

export default {
  data() {
    return {
      carName: 'Ford',
    }
  },
  components: {
    Car,
    Counter
  }
};
</script>

<style scoped>
  #app {
    text-align: center;
    margin-top: 60px;
  }
  h3 {
    color: red;
  }
</style>
