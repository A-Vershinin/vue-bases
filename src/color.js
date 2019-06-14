export default {
  /*
    Передача аргументов в свою директиву. Значение берем из bindings.value.
    Это значение переданное в нашу директиву v-colored="'green'"
  */
  bind(el, bindings, vnode) {
    console.log('bindings', bindings);
    // el.style.color = 'red';
    el.style.color = bindings.value;
  },
};
