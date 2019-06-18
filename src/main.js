import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

// С помощью метода user подключаем различные плагины,
// vuelidate - фалидация форм
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
