<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useCartStore } from '../stores/cart'

const user = useUserStore()
const cart = useCartStore()

const itemName = ref('')

function addItemToCart() {
  if (!itemName.value) return
  cart.addItem(itemName.value)
  itemName.value = ''
}

function clearCart() {
  if (window.confirm('Are you sure you want to clear the cart?')) {
    cart.rawItems = []
  }
}

async function buy() {
  const n = await cart.purchaseItems()

  console.log(`Bought ${n} items`)

  cart.rawItems = []
}
</script>

<template>
  <div class="store">
    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <input type="text" v-model="itemName" />
      <button>Add</button>
    </form>

    <form @submit.prevent="buy">
      <ul data-testid="items">
        <li v-for="item in cart.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button
            @click="cart.removeItem(item.name)"
            type="button"
          >X</button>
        </li>
      </ul>

      <button :disabled="!user.name">Buy</button>
      <button
        :disabled="!cart.items.length"
        @click="clearCart"
        type="button"
        data-testid="clear"
      >Clear the cart</button>
    </form>
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
