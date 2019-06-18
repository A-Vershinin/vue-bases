import VueRouter from 'vue-router';
import HomePage from './components/Home.vue';
import CarsPage from './components/Cars.vue';
import Car from './components/Car.vue';
import CarFull from './components/CarFull.vue';

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
      // Описываем вложенные роуты по пути '/cars/:id/info'
      children: [
        {
          path: 'info',  // важно!! тут слешь не нужен, роутер сам добавит
          component: CarFull,
          name: 'car-info' // имя для именованного роута
        },
      ]
    },
  ],
  mode: 'history', // добавляем настройку чтобы убрать хеш с url-а роута
})
