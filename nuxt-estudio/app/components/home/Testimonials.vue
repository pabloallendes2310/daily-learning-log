<script setup lang="ts">
const testimonials = ref([
  {
    user: {
      name: "Evan You",
      description: "Autor de Vue.js y Vite",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/499550?v=4",
        alt: "Evan You",
        loading: "lazy" as const,
      },
    },
    quote:
      "Nuxt sobre la infraestructura de Cloudflare con esfuerzo minimo: esto es enorme!",
  },
  {
    user: {
      name: "Igor Minar",
      description: "Ingeniero de software en Cloudflare",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/216296?v=4",
        alt: "Igor Minar",
        loading: "lazy" as const,
      },
    },
    quote:
      "Me encanta el acabado y el enfoque de todo incluido. NuxtHub lleva la integracion entre framework web y hosting a otro nivel!",
  },
  {
    user: {
      name: "Charlie Hield",
      description: "Tecnologo creativo senior",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/527849?v=4",
        alt: "Charlie Hield",
        loading: "lazy" as const,
      },
    },
    quote:
      "NuxtHub es, sin duda, la forma mas facil de llevar un proyecto desde cero hasta produccion en el stack de Cloudflare!",
  },
  {
    user: {
      name: "Israel Ortuño",
      description: "Cofundador de VueJobs",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/1769417?v=4",
        alt: "Israel Ortuño",
        loading: "lazy" as const,
      },
    },
    quote:
      "Ya no encuentro excusas para no ir full-stack con Nuxt. Publica rapido al estilo Nuxt, con cero configuracion. Solo conecta y despliega.",
  },
  {
    user: {
      name: "Fayaz Ahmed",
      description: "Emprendedor independiente",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/15716057?v=4",
        alt: "Fayaz Ahmed",
        loading: "lazy" as const,
      },
    },
    quote:
      "Me tomo menos de 90 segundos desplegar una app con BD, KV, almacenamiento de archivos y cache, todo en el edge con un solo comando.",
  },
  {
    user: {
      name: "Tommy J. Vedvik",
      description: "Desarrollador UX",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/48070?v=4",
        alt: "Tommy J. Vedvik",
        loading: "lazy" as const,
      },
    },
    quote:
      "En mi opinion, Nuxt se esta convirtiendo en el mejor framework para quienes arrancan proyectos. NuxtHub es una capa sobre los servicios de Cloudflare para hosting full-stack en edge, rapido y economico.",
  },
  {
    user: {
      name: "Dario Piotrowicz",
      description: "Desarrollador web en Cloudflare",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/61631103?v=4",
        alt: "Dario Piotrowicz",
        loading: "lazy" as const,
      },
    },
    quote:
      "Me encanta como NuxtHub combina, potencia y simplifica las herramientas de Cloudflare junto con el amplio y maduro ecosistema de Nuxt. No veo la hora de ver como evoluciona y se expande en el futuro!",
  },
  {
    user: {
      name: "Markus Oberlehner",
      description: "Desarrollador web",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/6883314?v=4",
        alt: "Markus Oberlehner",
        loading: "lazy" as const,
      },
    },
    quote:
      "Acabo de desplegar mi primer sitio en Cloudflare usando NuxtHub. Una experiencia muy fluida!",
  },
  {
    user: {
      name: "Anthony Fu",
      description: "Equipo core de Vue.js, Vite y Nuxt",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/11247099?v=4",
        alt: "Anthony Fu",
        loading: "lazy" as const,
      },
    },
    quote:
      "Es increible poder ejecutar un solo comando y desplegar un proyecto Nuxt existente en edge en minutos! Se sintio como desbloquear la infraestructura y la UI que le faltaban a Cloudflare, mejorando la experiencia de desarrollo de forma extraordinaria.",
  },
  {
    user: {
      name: "Jonathan Beckman",
      description: "Fundador de GuaranTee Time",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/90707158?v=4",
        alt: "Jonathan Beckman",
        loading: "lazy" as const,
      },
    },
    quote:
      "NuxtHub y Cloudflare son mi opcion principal para apps full-stack. La DX es excelente y muy superior a cualquier otra plataforma que he usado. Mi equipo puede iterar rapido y crear apps bonitas y de alto rendimiento con facilidad.",
  },
  {
    user: {
      name: "Eckhardt Dreyer",
      description: "Desarrollador lider en YG",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/37825447?v=4",
        alt: "Eckhardt Dreyer",
        loading: "lazy" as const,
      },
    },
    quote:
      "En YG, nuestro equipo crecio recientemente y eso implico mas licencias en todas las herramientas que usamos. Migrar nuestro flujo de hosting a NuxtHub no solo tomo unos minutos, tambien nos ahorro dinero frente al proveedor anterior. NuxtHub ofrece una excelente capa de gestion sobre nuestra infraestructura y estamos muy contentos con el cambio!",
  },
]);
</script>

<template>
  <div>
    <UPageSection
      title="Testimonios"
      description="Nuestros testimonios de clientes satifechos"
      headline="Testimonios"
    />
    <UPageColumns>
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description:
            'before:content-[open-quote] after:content-[close-quote]',
        }"
      >
        <template #footer>
          <UUser v-bind="testimonial.user" size="xl" />
        </template>
      </UPageCard>
    </UPageColumns>
  </div>
</template>
