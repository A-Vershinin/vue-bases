<script>

export default {}
</script>

<template>
  <div class="cars">
    <h1>Cars page</h1>
    <ul>
      <router-link
        tag="li"
        v-for="car in 5"
        :to="'/cars/' + car"
        :key="car"
      >
        <a>Car: {{ car }}</a>
      </router-link>
    </ul>

  </div>
</template>
