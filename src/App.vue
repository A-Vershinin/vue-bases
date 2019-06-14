<script>

export default {
  data() {
    return {
      searchName: '',
    }
  },
};

/*
 Модификатор lazy. Меняет событие, по которому меняется инпут.
 Изначальное событие 'input' при привязке через директиву v-model.
 С модификатором всплывающее событие меняется на то, какое действие было с
 инпутом, фоокус, onChange и т.д и значение инпута меняется в момент когда
 событие произошло.
 Сейчас пример - печатаем текст в инпуте, поле в фокусе, после потери фокуса,
 всплывает event 'onFocus' и тогда value инпута перезаписывается.
 Такие оптимизации лучше для скорости работы.
*/

</script>



<template>
  <div id="app">
    <h2>Form inputs</h2>
    <input type="text" v-model.lazy="searchName" />
    <p>
       {{ searchName }}
    </p>
  </div>
</template>


<style scoped>
  #app {
    text-align: center;
    margin-top: 60px;
  }
</style>
