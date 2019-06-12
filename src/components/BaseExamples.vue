<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name: 'Vue.js',
      isOk: false,
      string: 'My name is Anatoly.',
      url: 'http://google.com',
      htmlText: "<a href='http://google.com'>Google 2</a>",
      counter: 0,
      title: 'Счётчик',
      x: 0,
      y: 0,
      firstName: 'Foo',
      lastName: 'Bar',
      inputValue: 'Initial value',
      isActive: false,
      color: 'orange',
      color2: 'red',
      type: 'a',
      isVisible: false,
      people: [{name: 'Vlad', age: 20 }, {name: 'Max', age: 25}, {name: 'Elena', age: 30}],
      person: {
        id: 1,
        firstname: "Pit",
        lastName: "Harinkton",
      },
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    getCssClasses() {
      return {
        red: this.isActive,
        'green': !this.isActive,
      }
    },
  },
  methods: {
    onChangeName(evt) {
      return this.name = evt.target.value;
    },
    sayHello() {
      return 'I am function';
    },
    riseCounter(num, str, evt) {
      this.title = str;
      this.counter += num;

      if (num === 5) {
        evt.target.style.color = 'red';
      } else if (num === 1) {
        evt.target.style.color = 'blue';
      }
    },
    handleMouseMove(evt) {
      this.x = evt.clientX;
      this.y = evt.clientY;
    },
    alertValue(evt) {
      alert(evt.target.value);
    },
    addNewTodo(todoItem) {
      this.todos.push(todoItem);
      this.newTodoText = '';
    }
  }
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <b>This is first app on {{ name }} </b>
      <input type="text" v-on:input="onChangeName">
    </p>
    {{ sayHello() }}
    <p>
      {{ isOk ?  "I'm ok! " : "I'm not ok!" }}
    </p>
    <h2>Function: {{ string.split('').reverse().join('') }}</h2>
    <h2>User name: {{ fullName }}</h2>
    <a
      :href="url"
      v-on:click.prevent=""
      target="_black">
        Google with prevent default, another syntacses
    </a>
    <h3 v-html="htmlText"></h3>
    <p>
      <h2>{{title}}: {{ counter }} </h2>
      <button v-on:click="riseCounter(1, 'Измененно на 1', $event)">Увеличить на 1</button>
      <button v-on:click="riseCounter(5, 'Измененно на 5', $event)">Увеличить на 5</button>
    </p>

    <h2 v-on:mousemove="handleMouseMove">
      X: {{ x }} \ Y: {{ y }}
      <span v-on:mousemove.stop>Не изменять</span>
    </h2>

    <hr />
    <p>
      <span>Input with alert</span>
      <input type="text" @keyup.enter="alertValue" />
    </p>
    <p>
      <input type="text" v-model.lazy="inputValue" />
      <span>
        {{ inputValue }}
      </span>
    </p>
    <p>
      <div>
        <h4>Пример когда класс меняет как computed свойство</h4>
        <div
          class="circle"
          @click="isActive = !isActive"
          :class="getCssClasses"
        ></div>
      </div>
      <div>
        <h4>Пример когда класс строка связан динамически с переменной</h4>
        <div class="circle" :class="color"></div>
        <input type="text" v-model="color"/>
      </div>
      <div>
        <h4>Пример когда стили заданы инлайново</h4>
        <div class="circle" :style="{ background: color2 }"></div>
        <input type="text" v-model="color2"/>
      </div>

      <div>
        <h3 v-if="type === 'a'">A</h3>
        <h3 v-else-if="type === 'b'">B</h3>
        <h3 v-else-if="type === 'c'">C</h3>
        <h3 v-else>Not match!</h3>
        <hr />

        <input type="text" v-model="type">
      </div>

      <div>

      <template v-if="isVisible">
        <h3>If {{ isVisible}}. I am visible!</h3>
      </template>

      <template v-if="!isVisible">
        <h3>If {{ isVisible}}. You can't see me!</h3>
      </template>
      <button type="button" @click="isVisible = !isVisible">isActive</button>
    </div>
    <hr style="height: 10px; background: #ccc;"/>
      <p>
        <h5>Рендер свойст в список из массива объектов v-for</h5>
        <ul>
          <li v-for="(person, index) of people" :key="index">
            {{ index + 1 }}.
            {{ person.name }}
            <b>{{ person.age }}</b>
          </li>
        </ul>

        <hr />

        <h5>Рендер свойст из объекта через v-for</h5>
        <ul>
          <li v-for="value in person">{{ value }}</li>
        </ul>

        <h5>Рендер свойст из объекта c ключами и индексом через v-for</h5>
        <ul>
          <li v-for="(value, key, index) in person">
            <em>{{ index + 1 }} </em>
            <b>{{ key }}: </b>{{ value }}
          </li>
        </ul>
      </p>
    </p>
    <hr />
  </div>
</template>


<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .circle {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 40px;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
  }
  .red {background-color: red;}
  .green {background-color: green;}
  .orange {background-color: orange;}
</style>
