export default {
  /*
    Передача аргументов в свою директиву. Значение берем из bindings.value.
    Это значение переданное в нашу директиву v-colored="'green'".

    Так же у директивы есть аргументы. Это значение указанное после двоеточия в
    директиве. Пример v-colored:color="переменная". Имя аргумента `color` приходит
    в параметр bindings.arg

    Модификаторы директивы.
    Пример модификатора v-one:click.prevent ="имя метода".
    prevent - это модификатор директивы.
    Имя модификатор приходит в bindings.modifiers Это объект с парами ключей
    имя модификтора - true/false. Их может быть много.
  */
  bind(el, bindings, vnode) {
    console.log('bindings', bindings);

    // el.style.color = bindings.value;



    const fontModifier = bindings.modifiers['font'];

    if (fontModifier) {
      el.style.fontSize = '30px';
    }

    const delayModifier = bindings.modifiers['delay'];
    let delay = 0;

    if (delayModifier) {
      delay = 2000;
    }

    setTimeout(() => {
      const arg = bindings.arg;
      el.style[arg] = bindings.value;
    }, delay)
  },
};
