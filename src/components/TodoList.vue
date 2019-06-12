<script>
import TodoItem from './TodoItem.vue';

export default {
  name: "TodoList",
  props: {
    list: Array,
  },
  data: (props) => {
    return {
      groceryList: props.list,
    }
  },
  components: {
    TodoItem,
  }
}
</script>

<template>
  <ul>
    <TodoItem
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></TodoItem>
  </ul>
</template>
