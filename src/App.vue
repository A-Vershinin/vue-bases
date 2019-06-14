<script>

export default {
  data() {
    return {
      socials: ['vk'],
      socialRadio: 'facebook',
      socialsSelect: ['instagram', 'vk', 'facebook'],
      selectedSocial: 'vk',
      age: 20,
      textareaValue: 'default text ',
    }
  },
  watch: {
    age(value) {
      console.log('watch age:', value);
    }
  }
};
/*
  Работа с чекбоксами отличается от других фреймворков.
  Vue использует массив с значениями от value в инпутах и смотрит есть ли такое
  значение или нет и отмечает выбранный чекбокс. Для уставноки чекбокса
  по-умолчанию выбранным, нужно положить сразу значение в массив.

  C радиокнопками подход другой. Выбранное значение может быть только одно и это
  передаётся из value. Поэтому в директиву привызываем только переменную для
  хранения значения из value. Атрибут name можно не использовать. Для выбора
  по умолчанию баттона нужно в переменную сразу положить одно из трех значение.

  Селекты. Значение по умолчанию задаётся на селекте через привязку к директиве.
  Для инпутов с числами используем модификатор в директиве. Приводит значение к числу.

*/
</script>



<template>
  <div id="app">
    <h2>Form inputs: checkbox</h2>
    <label>
      <input type="checkbox" value="instagram" v-model="socials"> Instagram
    </label>

    <label>
      <input type="checkbox" value="vk" v-model="socials"> Vk
    </label>

    <label>
      <input type="checkbox" value="facebook" v-model="socials"> Facebook
    </label>

    <ul>
      <li v-for="item of socials">
        {{ item }}
      </li>
    </ul>

    <hr />

    <h2> Form inputs: radio buttons</h2>
    <label>
      <input type="radio" value="instagram" v-model="socialRadio"> Instagram
    </label>

    <label>
      <input type="radio" value="vk" v-model="socialRadio"> Vk
    </label>

    <label>
      <input type="radio" value="facebook" v-model="socialRadio"> Facebook
    </label>
    <p>{{ socialRadio }}</p>

    <hr />

    <h2> Form inputs: selects</h2>
    <select v-model="selectedSocial">
      <option
        v-for="item of socialsSelect"
      >{{ item }}</option>
    </select>

    <p>
      {{ selectedSocial }}
    </p>

    <hr />

    <h2> Form inputs: input numbers </h2>
    <input type="text" v-model.number="age">
    <p>
      {{ age }}
    </p>

    <hr />

    <h2> Form inputs: textarea </h2>

    <textarea v-model="textareaValue"></textarea>
    <p>
      {{ textareaValue }}
    </p>
  </div>
</template>


<style scoped>
  #app {
    text-align: center;
    margin-top: 60px;
  }
</style>
