<script>
import { mapState } from 'vuex';

export default {
  computed: {
    /* Пример прокидывания пропсов с стора counterStore через $store и mapState */
    // counter() {
    //   return this.$store.state.counterStore.counter;
    // },
    ...mapState({
      counter: state => state.counterStore.counter,
    }),
  }
};
</script>

<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
  </div>
</template>

<style scoped></style>
