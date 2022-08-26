<script setup>
  const insights = ref([
    {
      title: "Total Apuestas",
      value: 15645258,
      icon: "fa-solid fa-flag",
    },
    {
      title: "Total Usuarios",
      value: 1234511216,
      icon: "fa-solid fa-users",
    },
    {
      title: "Pagos Completados",
      value: 1216181632,
      icon: "fa-solid fa-coins",
    },
    {
      title: "Pagos Pedientes",
      value: 1216181632,
      icon: "fa-solid fa-coins",
    },
  ]);
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <div
        class="col-span-1 p-3 transition-all ease-in delay-300 rounded-lg shadow-lg bg-fg hover:shadow-none"
        v-for="item in insights"
      >
        <client-only>
          <font-icon
            :icon="`${item.icon}`"
            class="p-2 text-white rounded-full bg-slate-900"
          />
        </client-only>
        <div class="flex items-center justify-between">
          <div class="text-gray-400">
            <h3 class="mt-3 mb-2 font-light">{{ item.title }}</h3>
            <h1 class="text-2xl font-semibold">{{ item.value }}</h1>
          </div>
        </div>
        <hr class="h-1 mt-4 text-gray-100" />
        <small class="block mt-2 text-xs">Ultimas 24 Horas</small>
      </div>
    </div>
    <div class="mt-7">
      <h2 class="mb-3 text-xl font-semibold">Pagos Recientes</h2>

      <table class="w-full text-center">
        <thead>
          <tr class="odd:h-11 even:h-11">
            <th>Usuario</th>
            <th>Cantidad</th>
            <th>Metodo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in 10"
            class="rounded-lg odd:h-11 even:h-11 odd:bg-fg"
          >
            <td class="rounded-l-lg">{{ `Usuario ${item}` }}</td>
            <td class="text-right">16514651</td>
            <td>Paypal</td>
            <td class="rounded-r-lg">Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
