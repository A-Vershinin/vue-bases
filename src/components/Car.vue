<script>

export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>



<template>
  <div class="car">
    <slot></slot>
    <hr  />
    <hr  />
    <slot name="text"></slot>
  </div>
</template>

<style scoped>
  div {
    border: 1px solid black;
  }
  h2 {
    font-size: 18px;
    color: orange;
  }
  h3 {
    color: green;
  }
</style>
