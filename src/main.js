import Vue from 'vue'
import App from './App.vue'
import List from './components/List.vue';

Vue.component('List', List);

// Vue.filter('uppercase', (value) => value.toUpperCase());

// Объявление миксинов глобально
Vue.mixin({
  beforeCreate() {
    console.log('beforeCreate: --> String from global mixin in beforeCreate hook')
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
