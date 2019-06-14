<script>
import OneOff from './components/Oneoff.vue';

export default {
  data() {
    return {
      switched: false,
    }
  },
  components: {
    OneOff,
  },
};

/*
  Пример как сделать свой кастомный контрол через директиву.
  Есть компонент, в который прокидывает флаг и по флагу меняет класс.
  В самом компоненте, вешает обработчики и привязывает метод свой onChange
  с прокинутым значением. В самом методе берем значение которое приходит
  при клике и прокидывает в $emit на событие 'input' c новым аргументом.
  Срабатывает ивент 'input' и по ивенту меняется значение переменно value в ивенте.
  Т.к. директива v-model по-умолчанию прокидывает пропс с таким же название value.
  то меняет своё value и переменную switched, которая привязана к директиве в родителе.
  Для наглядности показываем изменение состояния компонента.
*/

</script>

<template>
  <div id="app">
    <h2>Form inputs</h2>
    <OneOff v-model="switched"></OneOff>

    <div>
      <h3 v-if="switched">Component is enabled</h3>
      <h3 v-else>Component is disabled</h3>
    </div>
  </div>
</template>


<style scoped>
  #app {
    text-align: center;
    margin-top: 60px;
  }
</style>
