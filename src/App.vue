<script>
const baseUrl = "http://localhost:3000/";

export default {
  data() {
    return {
      carName: "",
      carYear: "",
      cars: []
    };
  },
  methods: {
    onCreateCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      };

      /*
        Пакет VueResource добавляет в глобальный scoupe системный объект this.$http.
        Для использования $resource - закомментировать запрос с this.$http.
      */
      this.$http
        .post(`${baseUrl}cars`, car)
        .then(response => {
          console.log("response:", response);
          return response.json();
        })
        .then(result => {
          console.log("result:", result);
        });
      // this.resource.save({}, car);
    },
    onLoadCar() {
      // this.$http
      //   .get(`${baseUrl}cars`)
      //   .then(response => response.json())
      //   .then(cars => {
      //     console.log("Fetch cars:", cars);
      //     this.cars = cars;
      //   });
        this.resource.get()
          .then(response => response.json())
          .then(cars => {
            console.log("Fetch cars:", cars);
            this.cars = cars;
          });
    }
  },
  created() {
    /*
      Пакет VueResource имеет еще одну глобальную переменную, которая хранит в
      себе url c запросом сущности для удобства работы при CRUD операциях. Есть
      в доке список экшенов-обёрток которые вызывая получаем такой же результат как
      и с полным описанием от промиса, к примеру при POST запросе.
      Позвоялет сократить код.
    */
    this.resource = this.$resource('cars');
  }
};
</script>

<template>
  <div class="container pt-5">
    <div class="form-group">
      <label for="name">Car name</label>
      <input
        type="text"
        id="name"
        class="form-control"
        v-model.trim="carName"
      />
    </div>
    <div class="form-group">
      <label for="year">Car year</label>
      <input
        type="text"
        id="year"
        class="form-control"
        v-model.number="carYear"
      />
    </div>

    <button type="button" class="btn btn-success" @click="onCreateCar">
      Create car
    </button>
    <button type="button" class="btn btn-primary" @click="onLoadCar">
      Load cars
    </button>

    <hr />

    <ul class="list-group">
      <li class="list-group-item" v-for="carItem of cars" :key="carItem.id">
        <strong>{{ carItem.name }}</strong> - {{ carItem.year }}
      </li>
    </ul>
  </div>
</template>
