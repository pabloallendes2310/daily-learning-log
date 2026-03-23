<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";
definePageMeta({
  layout: "login-layout",
});
const toast = useToast();

const fields: AuthFormField[] = [
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
  {
    name: "remember",
    label: "Recordarme",
    type: "checkbox",
  },
];

const providers = [
  {
    label: "Continuar con Google",
    icon: "i-simple-icons-google",
    onClick: () => {
      toast.add({ title: "Google", description: "Iniciar sesion con Google" });
    },
  },
  {
    label: "Continuar con GitHub",
    icon: "i-simple-icons-github",
    onClick: () => {
      toast.add({ title: "GitHub", description: "Iniciar sesion con GitHub" });
    },
  },
];

const schema = z.object({
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
        title="Iniciar sesion"
        description="Ingresa tus credenciales para acceder a tu cuenta."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        :ui="{
          leadingIcon: 'text-5xl',
        }"
        @submit="onSubmit"
      />
    </UPageCard>
    <UButton
      color="primary"
      variant="ghost"
      label="No tienes cuenta? Registrate"
      to="/register"
    />
  </div>
</template>
