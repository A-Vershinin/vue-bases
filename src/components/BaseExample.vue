<script>
export default {
  name: 'BaseExample',
  data() {
    return {
      title: 'Hello, I am Vue!',
    }
  },
  methods: {
    updateFirstTitle() {
      this.title = 'New title!';
      this.$refs.heading.style.color = 'red';
      console.log(this.$refs)
    },
  },
  computed: {},
}
</script>

<template>
  <div>
    <h2 ref="heading">{{ title }}</h2>
    <button @click="updateFirstTitle">Updated title</button>

    <hr ref="line"/>
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
