<template>
  <div>
    <nav class="grid items-center grid-cols-2 gap-4">
      <div class="w-72">
        <core-input placeholder="Buscar Equipo o Liga" />
      </div>
      <div class="text-right">
        <core-btn>Evento</core-btn>
      </div>
    </nav>
    <div class="grid grid-cols-2 mt-5 float-end">
      <h1 class="text-2xl font-semibold">Football</h1>
      <div class="text-right">
        <core-input class="w-1/2" placeholder=""></core-input>
      </div>
    </div>
    <nav class="flex justify-between mt-2 border-b border-gray-500">
      <div class="items-center flex-grow lg:flex">
        <ul class="flex flex-row items-center list-none">
          <li class="cursor-pointer">
            <a
              class="flex items-center px-3 py-2 text-sm leading-snug text-white border-b-2 border-blue-500 hover:opacity-75"
              >Todos</a
            >
          </li>
          <li class="cursor-pointer">
            <a
              class="flex items-center px-3 py-2 text-sm leading-snug text-secondary hover:opacity-75"
              >Completados</a
            >
          </li>
          <li class="cursor-pointer">
            <a
              class="flex items-center px-3 py-2 text-sm leading-snug text-secondary hover:opacity-75"
              >Pedientes</a
            >
          </li>
          <li class="cursor-pointer">
            <a
              class="flex items-center px-3 py-2 text-sm leading-snug text-secondary hover:opacity-75"
              >Cancelados</a
            >
          </li>
        </ul>
      </div>
      <div class="flex float-right">
        <button>Mas</button>
      </div>
    </nav>
  </div>
</template>
