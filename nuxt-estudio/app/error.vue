<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();
console.log(props.error, "");
</script>

<template>
  <UApp>
    <UError
      :error="error"
      :clear="{
        size: 'xl',
        icon: 'i-lucide-arrow-left',
        // icon: 'humbleicons:brand-twitter',
        class: 'rounded-full',
      }"
      :ui="{
        statusCode: 'text-9xl font-thin',
        message: 'asdas',
      }"
    />
  </UApp>
</template>
