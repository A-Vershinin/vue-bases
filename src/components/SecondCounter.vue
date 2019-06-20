<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    /* Пример использования getter-ов селекторов напрямую через $store и mapGetters */
    // computedCounter() {
    //   return this.$store.getters.computedCounter;
    // },
    ...mapGetters(['computedCounter'])
  }
};
</script>

<template>
  <div>
    <h2>Second Counter: {{ computedCounter }}</h2>
  </div>
</template>

<style scoped></style>
