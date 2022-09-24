<template>
  <nav class="h-screen">
    <div
      class="flex items-end justify-between w-full gap-4 p-6 mt-4 font-semibold rounded-lg bg-fg"
    >
      <div class="grid text-left">
        <small class="mb-2 text-xs text-secondary">16:00 12 oct 2022</small>
        <span>Barcelona</span>
        <span>vs</span>
        <span>Benfica</span>
      </div>
      <div class="flex items-center text-green-500">
        <span class="text-lg">1234564841</span>
        <client-only>
          <font-icon class="ml-1 text-xs" :icon="['fas', 'arrow-up']" />
        </client-only>
      </div>
    </div>
  </nav>
</template>
