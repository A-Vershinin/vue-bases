<template>
  <div id="app">
    <h1>Parent: {{ carName }}</h1>

    <Counter :counter="counter" />
    <Car
      :carName="carName"
      :carYear="carYear"
      :counter="counter"
      :changeFunc="changeNamaParent"
      @nameChanged="carName = $event"
      @counterUpdated="counter = $event"
    />
  </div>
</template>

<script>
import Car from "./components/Car.vue";
import Counter from "./components/Counter.vue";

/*
  Пример когда есть общий пропс в родителе, который передаётся в первый child
  и его значение меняется через обработчик в другом child-e. Поднимаем данные
  через прокинутый метод внутри через $emit и $event. Параметр для метода counterUpdated
  получает $event, в нашем простом случаем это сразу значение и мы перезаписываем им
  переменную counter.
*/

export default {
  data() {
    return {
      carName: "Ford",
      carYear: 1950,
      counter: 0,
    };
  },
  methods: {
    changeNamaParent(name) {
      this.carName = "Audi";
    }
  },
  components: {
    Car,
    Counter
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
