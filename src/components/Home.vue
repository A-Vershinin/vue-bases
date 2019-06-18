<script>

export default {
  data() {
    /*
    this.$router в точности то же самое, что и router.
    Причина, почему используем this.$router заключается в том,
    что мы не хотим импортировать роутер в каждом компоненте
    */
    console.log('Router props:', this.$router);
    return {}
  }
}

</script>

<template>
  <div>
    <h1>Home page</h1>
  </div>
</template>
