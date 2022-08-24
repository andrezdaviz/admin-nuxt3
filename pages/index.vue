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
        class="col-span-1 p-3 transition-all ease-in delay-300 rounded-lg shadow-lg bg-slate-600 hover:shadow-none"
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
        <small class="block mt-2">Ultimas 24 Horas</small>
      </div>
    </div>
    <div class="mt-7">
      <h2 class="mb-3">Pagos Recientes</h2>
      <table
        class="w-full p-6 text-center rounded-lg shadow-lg bg-slate-600 hover:shadow-none"
      >
        <thead class="divide-y divide-gray-400">
          <tr class="odd:h-10 even:h-10">
            <th>Usuario</th>
            <th>Cantidad</th>
            <th>Metodo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-400">
          <tr v-for="item in 10" class="odd:h-10 even:h-10">
            <td>{{ `Usuario ${item}` }}</td>
            <td>16514651</td>
            <td>Paypal</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
