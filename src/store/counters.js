export const UPDATE_COUNTER_SYNC = "UPDATE_COUNTER";


const counter = {
  state: {
    counter: 5,
    user: {
      firstName: "Jon"
    }
  },
  getters: {
    computedCounter: state => {
      return state.counter * (7-3);
    }
  },
  mutations: {
    [UPDATE_COUNTER_SYNC]: (state, payload) => {
      const counter = (state.counter += payload);
      return { ...state, counter };
    }
  }
};

export default counter;
