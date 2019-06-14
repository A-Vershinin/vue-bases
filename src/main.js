import Vue from 'vue'
import App from './App.vue'
import ColorDerective from './color';

// глобальная регистрация пользовательских директив
// Vue.directive('colored', ColorDerective);

new Vue({
  render: h => h(App),
}).$mount('#app')
