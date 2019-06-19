<script>
import Counter from "./components/Counter.vue";
import Actions from "./components/Actions.vue";

export default {
  components: {
    Counter,
    Actions
  }
}
</script>

<template>
  <div id="app">
    <div class="container text-center mt-5">
      <Counter />
      <Actions />
    </div>
  </div>
</template>

<style></style>
