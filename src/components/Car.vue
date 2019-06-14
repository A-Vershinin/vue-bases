<script>
import { eventEmitter } from '../main';

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
    },
    updateCounter() {
      /*
        Пример когда нужно из одного ребёнка нужно прокинуть значение переменной
        из обработчика в другого, но не поднямая значение через метод в компоненте
        как в предыдущем случае, используем глобальную переменную eventEmitter.
        Это объект с инстансом Vue, который умеет слушать события. У нас событие
        называется 'counterUpdated'. Значение переменной попадает в параметры этого
        ивента. ***Продолжение в Counter.
      */
      eventEmitter.$emit('counterUpdated', 3)
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
    <button type="button" @click="updateCounter">Update Counter</button>
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
