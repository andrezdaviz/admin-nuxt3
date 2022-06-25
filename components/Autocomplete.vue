<script setup>


  const results = ["uno", "dos", "tres"];
  const selectIndex = ref(-1);
  const isOpen = ref(false);
  const selected = ref(null)

  const search = ref(null);

  const {initialize, tabindex} = defineProps({
    initialize: {
      default: null,
    },
    tabindex: { default: 0 },
  });

  const onToggle = () => {
    console.log("aqui estoy");
    if (isOpen.value) {
      isOpen.value = false;
    } else {
      open();
    }
  };

  const onKey = (e) => {
    const KeyCode = e.KeyCode || e.which;
    if (!e.shiftKey && KeyCode !== 9 && !isOpen.value) {
      open();
    }
  };

  const close = () => {
    isOpen.value = false
    selectIndex.value = -1
  }
  const open = () => {
    isOpen.value = true;
    nextTick(() => {
      search.value.focus();
    });
  };

  const onMouse = (index) => {
    selectIndex.value = index;
  };

  const select = (result) => {
    selected.value = result
    close()
  }

  const selectedText =  computed(() => selected.value ? selected.value : 'Escribir Algooo')

  console.log(isOpen.value);
</script>
<template>
  <div class="relative block bg-white" :class="[isOpen ? ' border-b-0' : '']">
    <div class="relative">
      <div
        class="bg-white px-2 py-1 border border-gray-100 shadow-sm cursor-pointer select-none flex justify-between leading-[15px]"
        :tabindex="tabindex"
        ref="toggle"
        @click="onToggle"
        @keydown="onKey"
      >
        {{selectedText}}
      </div>

      <div
        class="transition ease-in-out duration-300 w-full absolute z-50 p-1 bg-white border-r border-l border-gray-100 shadow"
        v-if="isOpen"
      >
        <div class="relative">
          <input
            type="text"
            placeholder="typehead"
            class="leading-4 text-sm bg-gray-200 rounded-sm px-2 py-1 w-full block focus:outline-1 focus:outline-dotted focus:outline-offset-1"
            autocomplete="off"
            ref="search"
            @blur="onBlur"
          />
        </div>
        <ul class="block m-0 p-0">
          <li class="block mb-[2px]" v-for="(result, index) in results">
            <a
              class="cursor-pointer block p-[2px] bg-white"
              :class="selectIndex === index ? 'bg-gray-500 text-white' : ''"
              @mousedown.prevent="select(result)"
                @mouseover.prevent="onMouse(index)"
            >
              {{ result }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
