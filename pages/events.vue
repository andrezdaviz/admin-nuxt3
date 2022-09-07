<script setup>
  import { ChevronDownIcon } from "@heroicons/vue/24/solid";

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
        <core-btn>Evento</core-btn>
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
                  'inline-block py-2.5 text-sm font-medium leading-5 text-blue-700',
                  ' focus:outline-none ',
                  selected
                    ? 'border-b-2 border-blue-500 -mb-[1px]'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                ]"
              >
                {{ item }}
              </button></Tab
            >
          </div>
          <Menu text-button="More"></Menu>
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>
