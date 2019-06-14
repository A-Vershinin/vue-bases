<template>
  <h1>Counter: {{ counter }}</h1>
</template>
<script>
import { eventEmitter } from '../main';

export default {
  data() {
    return {
      counter: 0,
    }
  },
  created() {
    /*
      Для того чтобы обновить перменную counter, мы в компоненте создаём
      хук и внутри у него ставим на прослушку событий eventEmitter на наш ивент.
      В колбеке получаем значение переденное в ивент из
      eventEmitter.$emit('counterUpdated', 3) в компоненте Сar.
      Таким образом можно получать значение с обработчиков при любой вложенности
      без необходимости делать методы для компонентов с помощью которых поднимаем
      значение выше в родителя и т.д.
    */
    eventEmitter.$on('counterUpdated', (num) => {
      this.counter += 3;
      console.log('eventEmitter -> counterUpdated:')
    })
  },
}
</script>
