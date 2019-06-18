import Vue from 'vue';
import App from './App.vue';

// Instuments
import 'bootstrap/dist/css/bootstrap.css';
import VueResource from 'vue-resource';

// Plugins
Vue.use(VueResource);

new Vue({
  render: h => h(App),
}).$mount('#app')
