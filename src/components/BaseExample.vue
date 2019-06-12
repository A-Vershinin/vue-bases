<script>
export default {
  name: 'BaseExample',
  data() {
    return {
      title: 'Hello, I am Vue!',
    }
  },
  beforeCreate() {
    /*
      Инициализация собитий жизненного цикла компонента
    */
    console.log('Before Create');
  },
  created() {
    console.log('Created');
    /*
      Инициализация инъекций и системы реактивности.
      Создан компонент и шаблон.
    */
  },
  beforeMount() {
    console.log('Before Mount');
    /*
      Vue анализирует шаблон который в компоненте и это момент
      перед его вставкой в DOM
    */
  },
  mounted() {
    console.log('Mounted');
    /*
      Vue уже вставил шаблон который был приготовлен для вставки в DOM
    */
  },
  beforeUpdate() {
    console.log('Before Update');
    /*
      Момент перед тем как Vue будет обновлять компонент
    */
  },
  updated() {
    console.log('Updated');
    /*
      Момент после того как Vue обновил компонент
    */
  },
  beforeDestroy() {
    console.log('Before Destroy');
    /*
      Момент перед тем как Vue будет удалять компонент
    */
  },
  destroyed() {
    console.log('Destroyed');
    /*
      Момент после того как Vue удалил компонент из DOM-а
    */
  },
  methods: {
    doDestroy: function() {
      this.$destroy();
    }
  }
}
</script>

<template>
  <div>

    <h2>{{ title }}</h2>
    <button @click="title = 'Changed Title'">Change title</button>
    <button @click="doDestroy">Destroy</button>

  </div>
</template>


<style scoped>
  h2 {
    font-size: 18px;
  }
  button {
    padding: 20px;
    margin: 20px;
  }
</style>
