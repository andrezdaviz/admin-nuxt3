<script setup>
  import { ChevronDownIcon } from "@heroicons/vue/24/solid";
  import { PlusCircleIcon } from "@heroicons/vue/24/outline";

  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

  const showD = ref(false);

  const tabs = ["Todos", "Completas", "Pedientes", "Canceladas"];
</script>

<template>
  <div>
    <nav class="grid items-center grid-cols-2 gap-4">
      <div class="w-72">
        <core-input placeholder="Buscar Equipo o Liga" />
      </div>
      <div class="text-right">
        <core-btn> <PlusCircleIcon class="w-5 h-5 mr-3" /> Evento</core-btn>
      </div>
    </nav>
    <div class="grid grid-cols-2 mt-5 float-end">
      <h1 class="text-2xl font-semibold">Football</h1>
      <div class="text-right">
        <core-input class="w-1/2" placeholder=""></core-input>
      </div>
    </div>

    <div class="w-full">
      <TabGroup>
        <TabList class="flex justify-between gap-6 border-b border-gray-500">
          <div class="flex gap-6">
            <Tab v-for="item in tabs" as="template" v-slot="{ selected }">
              <button
                :class="[
                  'inline-block py-2.5 text-sm font-medium leading-5 text-white',
                  ' focus:outline-none -mb-[1px] ',
                  selected
                    ? 'border-b-2 border-blue-500 '
                    : 'text-gray-500 hover:border-b-2 hover:border-gray-500 hover:text-white',
                ]"
              >
                {{ item }}
              </button></Tab
            >
          </div>
          <Menu text-button="More"></Menu>
        </TabList>
        <div class="flex items-center w-full gap-4 px-4 py-2">
          <Menu text-button="Seleccionar Pais"></Menu
          ><Menu text-button="Seleccionar Liga"></Menu>
        </div>
        <TabPanels>
          <TabPanel class="relative grid w-full">
            <div
              class="relative flex items-center justify-between gap-6 px-4 py-2 mb-4 text-sm font-semibold text-gray-500 rounded shadow cursor-pointer bg-fg hover:shadow-none"
            >
              <div
                class="absolute -left-0.5 w-1 bg-slate-800 rounded h-1/2"
              ></div>
              <div class="left-0 text-xs">
                <span class="mx-auto text-sm text-white">20:00</span>
                <br />
                26 Agos
              </div>
              <div class="justify-between">
                Barcelona FC
                <span
                  class="px-2 py-1 mx-3 text-sm text-white rounded-full bg-slate-600"
                  >vs</span
                >
                Manchester City
              </div>
              <div class="">120000 coins</div>
            </div>
            <div
              class="relative flex items-center justify-between gap-6 px-4 py-2 mb-4 text-sm font-semibold text-gray-500 rounded shadow cursor-pointer bg-fg hover:shadow-none"
            >
              <div
                class="absolute -left-0.5 w-1 bg-green-600 rounded h-1/2"
              ></div>
              <div class="left-0 text-xs">
                <span class="mx-auto text-sm text-white">20:00</span>
                <br />
                26 Agos
              </div>
              <div class="justify-between">
                Barcelona FC
                <span
                  class="px-2 py-1 mx-3 text-sm text-white rounded-full bg-slate-600"
                  >vs</span
                >
                Manchester City
              </div>
              <div class="">120000 coins</div>
            </div>
            <div
              class="relative flex items-center justify-between gap-6 px-4 py-2 mb-4 text-sm font-semibold text-gray-500 rounded shadow cursor-pointer bg-fg hover:shadow-none"
            >
              <div
                class="absolute -left-0.5 w-1 bg-blue-500 rounded h-1/2"
              ></div>
              <div class="left-0 text-xs">
                <span class="mx-auto text-sm text-white">20:00</span>
                <br />
                26 Agos
              </div>
              <div class="justify-between">
                Barcelona FC
                <span
                  class="px-2 py-1 mx-3 text-sm text-white rounded-full bg-slate-600"
                  >vs</span
                >
                Manchester City
              </div>
              <div class="">120000 coins</div>
            </div>
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>
