<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { UPDATE_COUNTER_SYNC } from '../store/counters';

export default {
  computed: {
    ...mapGetters(['isLoading', 'error']),
  },
  methods: {
    updateCounterLocal(value) {
      // this.$emit('counterUpdated', value);
      // console.log('methods:', this.$store)

      // Мутируем counter напрямую в store
      // this.$store.state.counterStore.counter += value;

      // Мутируем counter через синхронный экшен UPDATE_COUNTER_SYNC
      this.$store.commit(UPDATE_COUNTER_SYNC, value);
    },

    /* Способ сразу подключить список Mutations */
    ...mapMutations({
      updateCounterStoreSync: UPDATE_COUNTER_SYNC,
    }),
    ...mapActions(['changeCounterAsync']),
  }
};
</script>

<template>
  <div class="mt-5">
    <h3>Change counter useing this.$store</h3>
    <button type="button" class="btn btn-success btn-lg" @click="updateCounterLocal(1)">
      Increase
    </button>
    <button type="button" class="btn btn-danger btn-lg" @click="updateCounterLocal(-1)">
      Decrease
    </button>

    <p class="mt-5">
      <h3>Change counter use mutation</h3>
      <button type="button" class="btn btn-success btn-lg" @click="updateCounterStoreSync(1)">
        Increase
      </button>
      <button type="button" class="btn btn-danger btn-lg" @click="updateCounterStoreSync(-1)">
        Decrease
      </button>
    </p>

    <p class="mt-5">
      <h3>Change counter use action</h3>
      <p v-if="isLoading">Loading ...</p>
      <div>
        <div v-if="error" class="mb-3"><strong>Error text:</strong> {{ error }}</div>
        <div>
          <button type="button" class="btn btn-primary btn-lg" @click="changeCounterAsync(1)">
            Increase
          </button>
          <button type="button" class="btn btn-success btn-lg" @click="changeCounterAsync(-1)">
            Decrease
          </button>
          <button type="button" class="btn btn-danger btn-lg" @click="changeCounterAsync('error')">
            Do Error
          </button>
        </div>
      </div>
    </p>
  </div>
</template>

<style scoped></style>
