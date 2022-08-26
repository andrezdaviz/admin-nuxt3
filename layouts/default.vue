<template>
  <div class="w-[96%] grid grid-cols-12 gap-6 mx-auto my-0">
    <CoreSidebar></CoreSidebar>
    <main class="col-span-7 mt-5">
      <h1 class="capitalize">
        {{ $route.name == "index" ? "Dasboard" : $route.name }}
      </h1>
      <slot />
    </main>
    <core-sidebar-right />
  </div>
</template>
