<script>

export default {
  /*
    Несколько вариантов записи входящих пропсов и их валидация.
    1. Просто указываем список имён входящих пропсов.
    2. Указываем объект, где ключ имя пропса и значение это тип данных
    3. Указываем объект, где ключ имя попроса и значение объект с настройками
    данного проса: тип, required, default value/
  */
  // props: ['carName', 'carYear'],  // 1
  // props: {                        // 2
  //   carName: String,
  //   carYear: Number,
  // },
  props: {
    carName: {
      type: String,
      default: "Default name",
    },
    carYear: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {}
  },
  computed: {
    reverseName() {
      return this.carName.split('').reverse().join('');
    }
  }
}
</script>

<template>
  <div class="car">
    <h2>Name: {{ carName }} \ {{ reverseName }}</h2>
    <h3>Year: {{ carYear }}</h3>
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
