<script setup>
import { ref, onMounted } from 'vue'

/* const count = ref(1)
const obj = reactive({ count })
// ref will be unwrapped
console.log(obj.count === count.value) // true
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3 */

// const testArrayReact = reactive({ loop: ['a', 'b', 'c'] })
// console.log(testArrayReact.loop.map((item) => item + 'a'))

const title = ref('')

onMounted(() => {
  // console.log('About page mounted')
  const newTitle = document.querySelector('h1')
  console.log(newTitle)
  const ndTitle = title.value;
  console.log(ndTitle)
  ndTitle.style.color = 'red'
  // function when hover on title change color to green
  function changeColor() {
    newTitle.style.color = 'green'
  }
  newTitle.addEventListener('mouseenter', changeColor)
  // newTitle.addEventListener('mouseover', changeColor)
})
</script>

<template>
  <div class="about">
    <h1 ref="title">This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
