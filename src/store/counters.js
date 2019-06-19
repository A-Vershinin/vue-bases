export const UPDATE_COUNTER_SYNC = "UPDATE_COUNTER";


const counter = {
  state: {
    counter: 5,
    user: {
      firstName: "Jon"
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
