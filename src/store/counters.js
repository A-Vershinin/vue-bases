export const UPDATE_COUNTER_SYNC = "UPDATE_COUNTER";
export const UPDATE_COUNTER_REQUEST = "UPDATE_COUNTER_REQUEST";
export const UPDATE_COUNTER_SUCCESS = "UPDATE_COUNTER_SUCCESS";
export const UPDATE_COUNTER_FAILURE = "UPDATE_COUNTER_FAILURE";

const counter = {
  state: {
    counter: 5,
    loading: false,
    error: "",
    user: {
      firstName: "Jon"
    }
  },
  getters: {
    computedCounter: state => {
      return state.counter * (7 - 3);
    },
    isLoading: state => state.loading,
    error: state => state.error,
  },
  mutations: {
    [UPDATE_COUNTER_SYNC]: (state, payload) => {
      return { ...state, counter: (state.counter += payload)};
    },
    [UPDATE_COUNTER_REQUEST]: state => {
      console.log("UPDATE_COUNTER_REQUEST");
      state.loading = true;
      state.error = '';
      return { ...state };
    },
    [UPDATE_COUNTER_SUCCESS]: (state, payload) => {
      console.log("UPDATE_COUNTER_SUCCESS");
      state.loading = false;
      return { ...state, counter: (state.counter += payload) };
    },
    [UPDATE_COUNTER_FAILURE]: state => {
      console.log('UPDATE_COUNTER_FAILURE')
      state.error = "Error in action changeCounterAsync";
      state.loading = false;
      return {...state };
    }
  },
  actions: {
    changeCounterAsync(context, payload) {
      // В context есть много чего интересного
      context.commit(UPDATE_COUNTER_REQUEST);

      setTimeout(() => {
        if (payload !== "error") {
          context.commit(UPDATE_COUNTER_SUCCESS, payload);
        } else {
          context.commit(UPDATE_COUNTER_FAILURE);
        }
      }, 1000);
    }
  }
};

export default counter;
