<script>
export default {
  name: 'BaseExamples',
  data() {
    return {
      counter: 0,
      counter2: 0,
      condition: 'Less than 3',
    }
  },
  methods: {
    onAdd() {
      this.counter++;
    },
    onSub() {
      this.counter--;
    },
    onResult() {
      console.log('onResult was called')
      return this.counter > 3 ? 'More than 3' : 'Less than 3';
    }
  },
  computed: {
    computedResult() {
      console.log('computedResult was called')
      return this.counter > 3 ? 'More than 3' : 'Less than 3';
    }
  },
}
</script>

<template>
  <div>
    <h2>Counter: {{ counter }} \ {{ counter2 }}</h2>
    <h3>Result:{{ onResult() }}</h3>
    <h3>Computed result: {{ computedResult }}</h3>

    <button @click="onAdd">Add</button>
    <button @click="onSub">Sub</button>
    <button @click="counter2++">Add counter 2</button>
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
