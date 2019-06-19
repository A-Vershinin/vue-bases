import Vue from 'vue';

// Instruments
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';

// Components
import App from './App.vue';

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
