<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Comenzar",
    color: "neutral",
  },
  {
    label: "Mas informacion",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right",
  },
]);
</script>

<template>
  <UPageCTA
    title="Con la confianza y respaldo de nuestra increible comunidad"
    description="Hemos construido una alianza solida y duradera. Su confianza es nuestra fuerza para avanzar hacia un exito compartido."
    orientation="horizontal"
    reverse
    :links="links"
  >
    <img
      src="https://picsum.photos/640/728"
      width="320"
      height="364"
      alt="Ilustracion"
      class="w-full rounded-lg"
      loading="lazy"
    />
  </UPageCTA>
</template>
