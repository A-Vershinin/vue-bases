<script>

export default {
  data() {
    return {
      carName: 'My car!',
      carYear: 1920,
    }
  },
}
</script>

<template>
  <div>
    <h2>Name {{ carName }}</h2>
    <h3>Year {{ carYear }}</h3>
  </div>
</template>

<style scoped>
  h2 {
    font-size: 18px;
  }
  button {
    padding: 20px;
    margin: 20px;
  }
</style>
