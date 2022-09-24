<template>
  <div class="w-full px-4 grid grid-cols-[270px_auto_340px] gap-4 mx-auto my-0">
    <CoreSidebar></CoreSidebar>
    <main class="mt-5">
      <slot />
    </main>
    <core-sidebar-right />
  </div>
</template>
