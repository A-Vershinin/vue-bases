<script>
export default {
  data: () => ({}),
  methods: {
    updateCounter(value) {
      this.$emit('counterUpdated', value);
    },
  }
};
</script>

<template>
  <div class="mt-5">
    <button type="button" class="btn btn-success btn-lg" @click="updateCounter(1)">
      Increase
    </button>
    <button type="button" class="btn btn-danger btn-lg" @click="updateCounter(-1)">
      Decrease
    </button>
  </div>
</template>

<style scoped></style>
