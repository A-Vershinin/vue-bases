
const variants = [
  {
    id: 2234,
    color: 'green',
    image: './assets/img/vmSocks-green-onWhite.jpg',
    variantQuantity: 10,
  },
  {
    id: 2235,
    color: 'blue',
    image: './assets/img/vmSocks-blue-onWhite.jpg',
    variantQuantity: 0,
  },
];

Vue.component('ProductDetails', {
  props: {
    details: {
      type: Array,
      required: true,
    }
  },
  template: `
    <ul>
      <li v-for="detailItem in details">{{ detailItem }}</li>
    </ul>
  `,
});

Vue.component('Product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <a
          class="product-image-link"
          v-bind:href="imageLink"
        >
          <img
            width="200"
            height="200"
            v-bind:src="image"
            v-bind:alt="altText"
            v-bind:title="imageTitle"
            :class="[ inStock ? 'active' : '' ]"
          />
        </a>
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else :class="{ 'out-of-stock': !inStock }">Out of Stock</p>
        <p>{{ onSale }}</p>
        <p>Shipping: {{ shipping }}</p>

        <ProductDetails :details="details"></ProductDetails>

        <div
          class="color-box"
          v-for="(variant, index) in variants"
          :key="variant.id"
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateProduct(index)"
        ></div>

      <div class="actions">

        <button
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
        >
          Add to Cart
        </button>
        <button @click="removeFromCart" :disabled="!inStock">Remove from Cart</button>

        </div>
      </div>
    </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: "Socks",
      selectedVariant: 0,
      altText: 'Some description of socks',
      imageLink: 'link',
      imageTitle: 'Socks title',
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: variants,

      isSale: false,
    }
  },
  methods: {
    addToCart(e) {
      /*
        если нужно поднять значение из компонента при клике на вверх, то используем
        $emit с указываем имени метода. В нашем случае у компонента Product привязка
         будет выглядеть как @add-to-cart="имя внешнего метода - updateCart".
      */
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.cart -= 1;
      this.$emit('remote-from-cart', this.variants[this.selectedVariant].id)
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    onSale() {
      const onSaleText = `${this.title} are on sale!`;
      const notSaleText = `${this.title} are not on sale!`;
      const condition = !this.isSale && this.cart < 4;

      return condition ? onSaleText : notSaleText
    },
    shipping() {
      // props premium
      return this.premium ? 'Free' : 2.99;
    }
  }
});

const options = {
  el: "#app",
  data: {
    premium: false,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeCart(id) {
      const updatedCart = this.cart.filter(item => item !== id);

      this.cart = [...updatedCart];
    }
  },
};

Vue.config.devtools = true;

const app = new Vue(options);
