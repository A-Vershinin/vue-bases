<script>
export default {
  computed: {
    // ...mapState({
    // }),
    counter() {
      return this.$store.state.counterStore.counter;
    }
  }
};
</script>

<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
  </div>
</template>

<style scoped></style>
