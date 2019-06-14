import Vue from 'vue'
import App from './App.vue'
import ColorDerective from './color';

/*
  Пример создания своих пользовательских директив.
  Директиру регистрируем глобально до вызова основного приложения в котором будет
  использовать свою директиву. В методе directive указываем имя директиве и
  объект с настройками директивы, объект.
*/

Vue.directive('colored', ColorDerective);

new Vue({
  render: h => h(App),
}).$mount('#app')
