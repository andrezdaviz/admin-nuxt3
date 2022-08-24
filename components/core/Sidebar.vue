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
  <nav class="h-screen col-span-1">
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
        class="relative flex items-center w-full h-12 gap-6 font-medium transition-all ease-in-out delay-300 rounded text-slate-400"
        :class="
          link.link == $route.path
            ? `text-slate-100 delay-100 bg-slate-600 before:w-1 before:content-[''] before:bg-slate-900 before:h-1/2 before:rounded ml-0`
            : 'group ml-6'
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
