<template>
  <div id="app">
    <h1>Parent: {{ carName }}</h1>

    <Counter />
    <Car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNamaParent"
      @nameChanged="carName = $event"

    />
  </div>
</template>

      <!-- @counterUpdated="counter = $event" -->

<script>
import Car from "./components/Car.vue";
import Counter from "./components/Counter.vue";

export default {
  data() {
    return {
      carName: "Ford",
      carYear: 1950,
    };
  },
  methods: {
    changeNamaParent(name) {
      this.carName = "Audi";
    }
  },
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
