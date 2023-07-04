<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
store.increment.mockImplementation(() => {});
</script>

<template>
  <p>Counter: {{ store.count }}</p>
</template>
