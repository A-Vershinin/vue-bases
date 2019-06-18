<script>
/*
  Достаем данные из qury параметров url-a для рендера.
  Вариант 1 Рендерим свойства сразу в шаблоне, достаём параметры
  с query роута как $route.query.name.
  Вариант 2 через computed свойство.
*/

export default {
  data() {
    /* Текущие параметры роута /cars/3/info с доп.полем query */
    console.log('CarInfo route props:', this.$route);
    return {}
  },
  computed: {
    year() {
      return this.$route.query.year;
    }
  },
}

</script>

<template>
  <div class="car-info">
    <h4>Car info: {{ $route.query.name }}</h4>
    <h5>Car year: {{ year }} </h5>
    <p>Lorem ipsum dolor sit amet, consectetur </p>
  </div>
</template>
