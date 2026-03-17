<template>
  <h2>Mi carrito de compras</h2>

  <ShoppingCart
    v-for="product in products"
    :name="product.name"
    :quantity="product.qty"
    @decrement="() => handleDecrementQuantity(product.id)"
    @increment="() => handleIncrementQuantity(product.id)"
  />
  <Suspense>
    <PokemonInfo />
  </Suspense>
</template>

<script setup lang="ts">
import PokemonInfo from "./components/PokemonInfo.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import { useProducts } from "./composables/useProducts";

const { products, handleDecrementQuantity, handleIncrementQuantity } =
  useProducts();
</script>
