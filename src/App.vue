<script>


export default {
  data() {
    return {
      title: 'Hello I am Vue!',
      searchName: '',
      names: ['Max', 'Elena', 'Igor', 'Kate'],
    }
  },
  /*
    Пример фильтрации списка. Для таких задач используется
    computed свойство, а не фильтры, т.к. работает медленнее.
  */
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
      })
    },
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  },
};
</script>

<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <input type="text"  v-model="searchName" />
    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>
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
