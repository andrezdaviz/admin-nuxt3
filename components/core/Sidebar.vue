<script setup>
  const navLinks = ref([
    {
      link: "/",
      text: "Dashboard",
      icon: "fa-solid fa-grip-vertical",
    },
    {
      link: "/events",
      text: "Eventos",
      icon: "fa-solid fa-flag",
    },
    {
      link: "/users",
      text: "Usuarios",
      icon: "fa-solid fa-users",
    },
    {
      link: "/bets",
      text: "Apuestas",
      icon: "fa-sold fa-file-invoice-dollar",
    },
  ]);
</script>
<template>
  <nav class="h-screen">
    <div
      class="flex items-center justify-center gap-3 mt-4 drop-shadow-[1px_1px_1px_rgba(255,255,255,0.25)]"
    >
      <span class="text-3xl font-bold text-gray-100 uppercase"
        >Free<span class="text-gray-900">Bet</span
        ><span class="text-amber-600">Coin</span>
      </span>
    </div>
    <div class="relative flex flex-col top-10">
      <nuxt-link
        v-for="link in navLinks"
        :key="link.link"
        :to="link.link"
        class="relative flex items-center w-full h-12 gap-6 font-medium transition-all duration-300 ease-in-out rounded"
        :class="
          link.link == $route.path
            ? ` delay-100  bg-fg before:w-1 before:content-[''] before:bg-blue-500 before:h-1/2 before:rounded ml-0`
            : 'group ml-6 text-secondary'
        "
      >
        <client-only>
          <font-icon :icon="`${link.icon}`" class="w-5 h-5 group-hover:ml-4" />
        </client-only>
        <span>{{ link.text }}</span>
      </nuxt-link>
    </div>
  </nav>
</template>
