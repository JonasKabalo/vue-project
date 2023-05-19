<script setup>
import { ref, /* watch, onMounted, getCurrentInstance, inject, defineComponent */ } from 'vue'

const accountBalance = ref(100)

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
