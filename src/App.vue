<script setup>
import { ref, watch, onMounted, getCurrentInstance, inject, defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import defaultStart from './layouts/defaultStart.vue'

defineComponent({
  components: {
    defaultStart
  }
})

import HelloWorld from './components/HelloWorld.vue'
import useEventsBus from './plugins/eventBus'
const { busOther } = useEventsBus()

// ----
const instance = getCurrentInstance();
const bus = instance.appContext.config.globalProperties.$bus

bus.on('my-event', (payload) => {
  console.log('Received event:', payload.data);
  console.log('HELLO')
})

watch(()=> busOther.value.get('sidebarCollapsed'), () => {
  console.log('watch')
})
// ----
const el = ref(0)
const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})

onMounted(() => {
  el.value
})

// data from main.js
const message = inject('message')
console.log(message)
</script>

<!-- script>
export default {
  mounted() {
  }
}
</script -->

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <defaultStart>
    <RouterView />
  </defaultStart>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
