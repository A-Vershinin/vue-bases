<script>


export default {
  data() {
    return {
      title: 'Hello I am Vue!',
    }
  },
  /*
    Фильтры (пайпы) так же как и директивы могут быть объявлены глобально и локально.
    Фильтры  - это функции. Если в шаблоне стоит ниже такой же заголовок с таким
    же фильтром и + другой, то знаение из одного передается в другой. Фильры
    влияют только на отображение, они не меняют данные. Изначального нет никаких
    фильтром, все фильтры пользовательские
  */
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  }
};
</script>

<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <h2>{{ title | uppercase | lowercase }}</h2>

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
