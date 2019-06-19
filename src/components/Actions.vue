<script>
import { mapMutations } from 'vuex';
import { UPDATE_COUNTER_SYNC } from '../store/counters';

export default {
  methods: {
    updateCounterLocal(value) {
      // this.$emit('counterUpdated', value);
      console.log('methods:', this.$store)

      // Мутируем counter напрямую в store
      // this.$store.state.counterStore.counter += value;

      // Мутируем counter через синхронный экшен UPDATE_COUNTER_SYNC
      this.$store.commit(UPDATE_COUNTER_SYNC, value);
    },
    /* Способ сразу подключить список Mutations */
    ...mapMutations({
      updateCounterStoreSync: (UPDATE_COUNTER_SYNC),
    }),
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

    <p>
      <h3>Change counter useing mutation</h3>
      <button type="button" class="btn btn-success btn-lg" @click="updateCounterStoreSync(1)">
        Increase
      </button>
      <button type="button" class="btn btn-danger btn-lg" @click="updateCounterStoreSync(-1)">
        Decrease
      </button>
    </p>
  </div>
</template>

<style scoped></style>
