<script setup lang="ts">
const cards = ref([
  {
    title: "Iconos",
    description:
      "Nuxt UI se integra con Nuxt Icon para acceder a mas de 200,000 iconos de Iconify.",
    icon: "i-lucide-smile",
  },
  {
    title: "Fuentes",
    description:
      "Nuxt UI se integra con Nuxt Fonts para ofrecer optimizacion de fuentes lista para usar.",
    icon: "i-lucide-a-large-small",
  },
  {
    title: "Modo de color",
    description:
      "Nuxt UI se integra con Nuxt Color Mode para cambiar entre modo claro y oscuro.",
    icon: "i-lucide-sun-moon",
  },
]);
</script>

<template>
  <div>
    <UPageSection
      title="Nuestro servicios"
      description="Una gran cantidad de servicios para usted"
      headline="Servicios"
    />
    <UPageGrid>
      <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" />
    </UPageGrid>
  </div>
</template>
