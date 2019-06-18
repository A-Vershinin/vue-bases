import Vue from 'vue';
import VueRouter from 'vue-router';

// Components
import App from './App.vue';

// Instruments
import router from './routes';

/*
 Подключаем роутинг. Подключем как очередной плагин в глобальный scope экземпляра Vue
 Добавляем в поле router экземпляр роута с настройками.
 Для удобства вынесли в отдельный файл.
*/

// Plugins
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
