<script>
export default {
  data() {
    return {};
  }
};
/*
  Аналогично React Router-у используем специальные компоненты ссылки для
  перехода по страницам без перезагрузки. Компонент доступ глобально.
*/
</script>

<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <router-link
              tag="li"
              class="nav-item"
              active-class="active"
              to="/"
              exact
            >
              <a class="nav-link">Home</a>
            </router-link>
            <router-link
              tag="li"
              class="nav-item"
              active-class="active"
              to="/cars"
              exact
            >
              <a class="nav-link">Cars</a>
            </router-link>

            <router-link
              tag="li"
              class="nav-item"
              active-class="active"
              to="/cars/3"
            >
              <a class="nav-link">Car 3</a>
            </router-link>

            <router-link
              tag="li"
              class="nav-item"
              active-class="active"
              to="/cars/4"
            >
              <a class="nav-link">Car 4</a>
            </router-link>
          </ul>
        </div>
      </nav>

      <!-- /* Место где будут рендерится вложенные роуты*/ -->
      <router-view></router-view>


    </div>
  </div>
</template>

<style scoped>
#app {
  margin-top: 60px;
}
</style>
