<script>
import Counter from "./components/Counter.vue";
import Actions from "./components/Actions.vue";

export default {
  data() {
    return {
      counter: 0
    };
  },
  components: {
    Counter,
    Actions
  }
};
</script>

<template>
  <div id="app">
    <div class="container text-center mt-5">
      <Counter :counter="counter" />
      <Actions
        @counterUpdated="counter += $event"
      />
    </div>
  </div>
</template>

<style></style>
