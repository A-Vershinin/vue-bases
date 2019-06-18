<script>
export default {
  data() {
    // Пропсы с текущего роута для urla. глобальная системная переменная.
    console.log("Router props dinamik:", this.$router.currentRoute);

    return {
      // id: this.$router.currentRoute.params['id'],
      id: this.$route.params["id"] // это тоже самое что через $router.currentRoute
    };
  },
  watch: {
    /*
      Зачем watch? При переходе на конкретный id Car в урле айдишник меняется,
      к примеру car3 и сar4, но компонент не перерендеривается. Для этого создаем
      в объекте watch поле с именем $route и следим за текущим офисом.
      Это тоже самое что и this.$router.currentRoute,
      но это функция которая принимает два аргумента toRoute и fromRoute.
      За счёт того, что watch каждый раз при переключении наблюдает за переменной $route,
      в toRoute всегда приходят новые параметры роута. Поэтому в поле id кладем айдишник с
      toRoute.params.id
    */
    $route(toRoute, fromRoute) {
      console.log("toRoute:", toRoute);
      this.id = toRoute.params["id"];
    }
  },
  methods: {
    goBackToCars() {
      console.log("Go to push router", this.$router);
      this.$router.push("/cars");
    }
  }
};
</script>

<template>
  <div class="car-item">
    <h3>Car id {{ this.id }}</h3>

    <button
      type="button"
      class="btn btn-lg btn-primary mb-2"
      @click="goBackToCars"
    >
      Back
    </button>
    <br />
    <!-- /**
      <router-link
        tag="button"
        class="btn btn-lg btn-info mt-2"
        :to="'/cars/' + id + '/info'"
      >
        Full info
      </router-link>
      **/ -->

      <!-- /*
      Помимо динамических параметров можем передать и qury параметры из урла по роуту
      Данные из query будут в urle как /info?namae=Mazda&year=2015
      */ -->
      <router-link
        tag="button"
        class="btn btn-lg btn-info mt-2"
        :to="{
          name: 'car-info',
          params: { id: id },
          query: { name: 'Mazda', year: 2015, }
        }"
      >
        Full info
      </router-link>


    <hr />
    <!-- /* Указываем куда рендерим вложенные sub роуты */ -->
    <router-view></router-view>
  </div>
</template>
