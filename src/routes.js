import VueRouter from 'vue-router';
import HomePage from './components/Home.vue';
import CarsPage from './components/Cars.vue';
import Car from './components/Car.vue';

export default new VueRouter({
  routes: [
    {
      path: '', // localhost:8080
      component: HomePage,
    },
    {
      path: '/cars', // localhost:8080/cars
      component: CarsPage,
    },
    {
      path: '/cars/:id', // cars/1
      component: Car,
    },
  ],
  mode: 'history', // добавляем настройку чтобы убрать хеш с url-а роута
})
