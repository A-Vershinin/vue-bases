<script>
import ColorDerective from './color';


export default {
  data() {
    return {
      title: 'Hello I am Vue!',
    }
  },
  directives: {
    /*
      Объявление локальных директив. Можно импортить как готовые и помещать сюда
      так и писать сразу тут имя директивы и её конфиг.
    */
    colored: ColorDerective,
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '40px';
        el.style.color = 'orange';
      },
    },
  },
};
</script>

<template>
  <div id="app">
    <h2 v-colored="'orange'">{{ title }}</h2>
    <h2 v-colored:background.font="'green'">{{ title }}</h2>
    <h2 v-colored:color.delay.font="'red'">{{ title }}</h2>
    <h3 v-font>Local font directive</h3>
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
