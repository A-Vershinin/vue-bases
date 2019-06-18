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
            <!-- /*
              Простой вариант
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link  to="/cars">Cars</router-link>
              </li>
            */ -->

            <!-- /*
              Вариант с переключаением активной ссылки, строгим совдением exact и
              передаём ссылку через slot. Без exact активный класс остаётся на
              на ссылке Home, когда находимся на странице Cars.
            */ -->
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
            >
              <a class="nav-link">Cars</a>
            </router-link>
          </ul>
        </div>
      </nav>

      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
