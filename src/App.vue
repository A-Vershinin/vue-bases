<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    onSubmit() {
      /*
        Отправляем данные на сервер. Как только сработает обработчик на форме
        @submit сработает метод onSubmit.
      */
      const params = {
        email: this.email,
        password: this.password,
      };
      console.log('User data:', params)
    }
  },
  validations: {
    email: {
      required,
      email,
      uniqEmail(newEmail) {
        if (newEmail === '') return true;

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== 'test@mail.ru'
            resolve(value);
          }, 1000)
        })
      },
    },
    password: {
      required,
      minLength: minLength(6),
    },
    confirmPassword: {
      required,
      sameAs: sameAs('password'),
    }
  },
};

/*
  Вешаем на кнопку атрибут disabled забаинденный на поле с пакета vuelidate,
  в общем объекте с настройками валидации есть поле $v.$invalid которое отвечает
  за валидна ли форма.
*/
</script>

<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{ 'is-invalid' : $v.email.$error}"
          v-model="email"
          @blur="$v.email.$touch()"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">
          Email field is required.
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          This field should be an email.
        </div>
        <div class="invalid-feedback" v-if="!$v.email.newEmail">
          This email is already exists.
        </div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{ 'is-invalid' : $v.password.$error}"
          v-model="password"
          @blur="$v.password.$touch()"
        >
        <div class="invalid-feedback" v-if="!$v.password.required">
          Password is required.
        </div>
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Password must have at least {{ $v.password.$params.minLength.min }} letters.
          Now it is {{ password.length }}
        </div>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          class="form-control"
          :class="{ 'is-invalid' : $v.confirmPassword.$error}"
          v-model="confirmPassword"
          @blur="$v.confirmPassword.$touch()"
        >
        <div class="invalid-feedback" v-if="!$v.password.required || !$v.confirmPassword.sameAs">
          Confirm password must be identical
        </div>
      </div>
      <button class="btn btn-success" type="submit"
        :disabled="$v.$invalid"
        >Submit form</button>

      <hr />
      <pre>
       Описание объекта валидации для формы:
       {{ $v }}
      </pre>
    </form>
  </div>
</template>


<style scoped>
  #app {
    text-align: center;
    margin-top: 60px;
  }

</style>
