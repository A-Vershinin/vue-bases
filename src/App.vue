<script>

export default {
  data() {
    return {
      carName: '',
      carYear: '',
    }
  },
  methods: {
    onCreateCar() {
      const baseUrl = 'http://localhost:3000';

      const car = {
        name: this.carName,
        year: this.carYear,
      }

      /*
        Пакет VueResource добавляет в глобальный scoupe системный объект this.$http.
      */
      this.$http.post(`${baseUrl}/cars`, car)
        .then(response => {
          console.log('response:', response);
          return response.json();
        })
        .then(result => {
          console.log('result:', result);
        })
    }
  }
}
</script>


<template>
  <div class="container pt-5">
    <div class="form-group">
      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>
    <div class="form-group">
      <label for="year">Car year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </div>

    <button type="button" class="btn btn-success" @click="onCreateCar">Create car</button>
  </div>
</template>
