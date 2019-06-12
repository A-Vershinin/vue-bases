<script>

export default {
  name: "TodoItem",
  props: ['todo'],
}
</script>

<template>
  <li>{{ todo.text }}</li>
</template>
