<script>
import ListMixin from './listMixin';

export default {
  data() {
    return {
      title: 'Hello I am Vue!',
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  },
  mixins: [ListMixin],
};
</script>

<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <input type="text"  v-model="searchName" />
    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>
    <hr />
    <List></List>
  </div>
</template>


<style scoped>
  #app {
    text-align: center;
    margin-top: 60px;
  }

  h2 {
    border: 1px solid black;
  }
</style>
