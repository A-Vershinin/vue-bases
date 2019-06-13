import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Car from './components/Car.vue';

/*
 Регистрируем копомпонент глобально до рендера инстанса Vue. При глобальной
 регистрации его можно использовать в любых компонентов внутри приложения.
 Имя компонента сделали как строку, но Vue отрендерит в дереве
 компонентов как AppCar.
*/
Vue.component('app-car', Car);

new Vue({
  render: h => h(App),
}).$mount('#app')
