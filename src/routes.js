import VueRouter from 'vue-router';
import HomePage from './components/Home.vue';
import CarsPage from './components/Cars.vue';
import Car from './components/Car.vue';
import CarFull from './components/CarFull.vue';
import ErrorPage from './components/Error.vue';

export default new VueRouter({
  routes: [
    {
      path: '/', // localhost:8080
      component: HomePage,
    },
    {
      path: '/cars', // localhost:8080/cars
      component: CarsPage,
      name: 'cars'
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
    {
      // Пример как сделать redirect на какой-то роут
      path: '/none',
      /*
        Вариант когда простой редирект
        redirect: '/cars',

        или через объект и + имя именованного роута из поля name
      */
      redirect: {
        name: 'cars',
      }
    },
    {
      /*
        обрабатываем все роуты через * и при любом не совпадении кидаем
        на страницу ErrorPage
      */
      path: '*',
      component: ErrorPage,
    }
  ],
  mode: 'history', // добавляем настройку чтобы убрать хеш с url-а роута,
  scrollBehavior: (to, from, savedPosition) => {
    /*
      В данной функции мы будем возвращать объект, который будет говорить
      куда будем скролить страницу при переходе.
      to - к какому роуту идем,
      from - от какого роута идем
      savedPosition -
    */
    console.log('route with scroll:', to);
    console.log('----------------------');
    console.log('savedPosition:', savedPosition);

    if(savedPosition) {
      // если хотим остатся на текущей позиции страницы после перехода
      return savedPosition;
    }

    if (to.hash) {
      // будем скролить до заголовка с id scroll
      return { selector: to.hash }
    }

    // скролл по умолчанию в самый вверх страницы
    return {
      x: 0,
      y: 0,
    }
  }
})
