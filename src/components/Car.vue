<script>

export default {
  props: {
    carName: {
      type: String,
      default: "Default name",
    },
    carYear: {
      type: Number,
      required: true,
    },
    changeFunc: Function,
  },
  data() {
    return {}
  },
  computed: {
    reverseName() {
      return this.carName.split('').reverse().join('');
    }
  },
  methods: {
    onChangeName() {
      this.carName = 'Mazda';
      this.$emit('nameChanged', this.carName)
    }
  }
}
</script>

<template>
  <div class="car">
    <h2>Name: {{ carName }} \ {{ reverseName }}</h2>
    <h3>Year: {{ carYear }}</h3>
    <button type="button" @click="onChangeName">Change Name</button>
    <button type="button" @click="changeFunc">Change from Parent</button>
  </div>
</template>

<style scoped>
  .car {
    border: 1px solid black;
  }
  .car h2 {
    font-size: 18px;
    color: orange;
  }
</style>
