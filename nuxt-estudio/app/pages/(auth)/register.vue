<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";
definePageMeta({
  layout: "login-layout",
});
const fields: AuthFormField[] = [
  {
    name: "name",
    type: "text",
    label: "Nombre completo",
    placeholder: "Nombre completo del usuario",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Correo electronico",
    placeholder: "Ingresa tu correo electronico",
    required: true,
  },
  {
    name: "password",
    label: "Contrasena",
    type: "password",
    placeholder: "Ingresa tu contrasena",
    required: true,
  },
];

const schema = z.object({
  name: z.string("Nombre completo es requerido"),
  email: z.email("Correo electronico invalido"),

  password: z
    .string("La contrasena es obligatoria")
    .min(8, "Debe tener al menos 8 caracteres"),
});

type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log("Submitted", payload);
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Crear una cuenta"
        description="Ingresa tus credenciales para crear tu cuenta."
        icon="i-lucide-user"
        :fields="fields"
        :ui="{
          leadingIcon: 'text-5xl',
        }"
        @submit="onSubmit"
      />
    </UPageCard>
    <UButton
      color="primary"
      variant="ghost"
      label="Ya tienes cuenta? Ingresa"
      to="/login"
    />
  </div>
</template>
