<template>
  <div id="app">
    <h1>Parent: {{ carName }}</h1>
    <Car
      :carName="carName"
      :carYear="carYear"
    />
  </div>
</template>



<script>
import Car from './components/Car.vue';

export default {
  data() {
    return {
      carName: 'Ford',
      carYear: 1950,
    }
  },
  components: {
    Car,
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
