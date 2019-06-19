import Vue from 'vue';
import Vuex from 'vuex';
// import createLogger from 'vuex/dist/logger';
import counterStore from './counters';

Vue.use(Vuex);

const isDevelopment = process.env.NODE_ENV !== 'production';

// middleware
const plagins = [];

if (isDevelopment) {
  console.log('isDevelopment:', isDevelopment);
  console.log('-----------------------');
  // plagins.push(createLogger());
}

export default new Vuex.Store({
  modules: {
    counterStore,
  },
  strict: isDevelopment,
  plugins: isDevelopment ? plagins : [],
})
