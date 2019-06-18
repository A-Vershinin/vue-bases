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
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    confirmPassword: {
      required,
      /*
        Валидатор sameAs проверяет индентичность контролов.
        В параметрах указываем такое же название как и выше ключ password для
        валидации пароля.
      */
      sameAs: sameAs('password'),
      /*
      Второй вариант как можно проверить в ручную. Обращаемся к инстансу Vue, т.е.
      смотрим все пропсы данного компонента и там берем поля с date для валидации.
      sameAs: sameAs((vue => {
        console.log('sameAs:', vue)
        return vue.password;
      })),
      */
    }
  },
};

/*
  1. Пример как делать валидацияю полей в форме. Используем стандартное решение от
  пакет Vuelidate подключенный как плагин.
  Благодаря пакету в компоненете добавляется глобальное поле validations, где
  перечислияем все переменные которые привязаны на инпутах через v-model в объекте.
  К ключам приязываем объект с настройки конкретного поля и добавляем функции-валидаторы
  которые необходимы для валидации поля. Функции-валидаторы импортим с пакета
  2. Вторым шагом запускаем валидацию. Для этого вешаем на события blur через глобальную
  переменную $v. В неё приходит параметры формы по валидации и каждого отдельного поля.
  Запускаем метод $touch(), запускает валидацию.
  3. Показ ошибок для поля email.
  Добавляем динамический класс is-invalid в зависимости от поля $v.email.$error с
  валидатора и показываем через условие сообщение о валидации поля с ошибкой.
  Для показа в зависимости от типа ошибки, используем параметры валидации с объекта
  настроект $v.email. Т.к пока мы валидируем только поле email.
*/
</script>

<template>
  <div class="container">
    <form class="pt-3">
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
