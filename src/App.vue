<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Car />
    <my-car></my-car>
  </div>
</template>



<script>
import Car from './components/Car.vue';
/*
  Для использования других компонентов внутри какого-то их нужно регистрировать
  в объекте components в текущем компненте.
  Несколько вариантов как можно регистрировать имена компонентов и разный вид
  в разметке темплейта.
*/

export default {
  data() {
    return {
      msg: 'Hello, I am title!',
    }
  },
  components: {
    Car,
    myCar: Car,
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
