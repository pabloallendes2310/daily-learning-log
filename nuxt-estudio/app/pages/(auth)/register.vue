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
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
];

const schema = z.object({
  name: z.string("Nombre completo es requerido"),
  email: z.email("Invalid email"),

  password: z
    .string("Password is required")
    .min(8, "Must be at least 8 characters"),
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
        description="Enter your credentials to create your account."
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
