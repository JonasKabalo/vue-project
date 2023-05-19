<script setup>
import { ref, onMounted } from 'vue'
import bus from '../plugins/bus'
import useEventsBus from '../plugins/eventBus';

const accountBalance = ref(100)

// defineEmits(['change', 'delete'])
const { emit }= useEventsBus()
emit('sidebarCollapsed')

onMounted(() => {
  bus.emit('my-event', { data: 'Hello!!!!!!' })
})

</script>

<template>
  <main>
    <p v-highlight="'yellow'">Highlight this text bright yellow</p>
    <p>{{ $addPoundSign.currencyGBP(accountBalance) }}</p>
    <!--
      <input v-on:keyup.page-down="nextPage">
      <input v-on:keypress.q="quit">
    -->
  </main>
</template>
