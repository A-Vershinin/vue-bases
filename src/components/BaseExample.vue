<script>
export default {
  name: 'BaseExample',
  data() {
    return {
      title: 'Hello, I am Vue!',
    }
  },
  methods: {}
}
</script>

<template>
  <div>

    <h2>{{ title }}</h2>
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
