
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

const options = {
  el: "#app",
  data: {
    brand: 'Vue Mastery',
    product: "Socks",
    selectedVariant: 0,
    altText: 'Some description of socks',
    imageLink: 'link',
    imageTitle: 'Socks title',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: variants,
    cart: 0,
    isSale: false,
  },
  methods: {
    addToCart(e) {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1
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
    }
  }
};

const app = new Vue(options);
