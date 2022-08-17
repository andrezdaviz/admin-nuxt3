<template>
  <CoreSidebar></CoreSidebar>
  <div class="relative min-h-screen md:ml-60">
    <nav
      class="absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent md:flex-row md:flex-nowrap md:justify-start"
    >
      <div
        class="flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:px-10"
      >
        <a
          class="hidden text-sm font-semibold text-white uppercase lg:inline-block"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/dashboard"
          >Dashboard</a
        >
      </div>
    </nav>

    <div class="relative pt-14">
      <slot />
    </div>
  </div>
</template>
