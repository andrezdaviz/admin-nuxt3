<script setup>

  const selectIndex = ref(-1);
  const isOpen = ref(false);
  const selected = ref(null)

  const search = ref(null);

  const props = defineProps({
    items:{
        type: Array,
        default: () => []
    }
  })


  const onToggle = () => {
    console.log("aqui estoy");
    if (isOpen.value) {
      isOpen.value = false;
    } else {
      open();
    }
  };

 const onBlur = () => {
  close()
 }

  const onKey = (e) => {
    const KeyCode = e.KeyCode || e.which;
    if (!e.shiftKey && KeyCode !== 9 && !isOpen.value) {
      open();
    }
  };

  const onEsc = () => {
    console.log("esc")
    close()
  }

  const onDownKey = (e) => {
    results.length -1 > selectIndex ? selectIndex-- :''
  }

  const onUpKey = () => {
    selectIndex > 0 ? selectIndex-- : ''
  }

  const onEnterKey = () => {
    const found = results.value[selectIndex.value]

    console.log(found)

     found ? select(found) : ''
  }

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
    console.log(index)
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
        class="flex justify-between px-3 pt-2 pb-1 text-base bg-white border border-gray-100 shadow cursor-pointer select-none "
        :tabindex="tabindex"
        ref="toggle"
        @click="onToggle"
        @keydown="onKey"
      >
        {{selectedText}}
      </div>

      <div
        class="absolute z-50 w-full p-1 transition duration-300 ease-in-out bg-white border-l border-r border-gray-100 shadow"
        v-if="isOpen"
      >
        <div class="relative">
          <input
            type="text"
            placeholder="typehead"
            class="block w-full px-3 py-2 text-sm text-gray-800 bg-gray-200 rounded focus:outline-1 focus:outline-dotted focus:outline-offset-1"
            autocomplete="off"
            ref="search"
            @blur="onBlur"
            @keydown.esc="onEsc"
              @keydown.up="onUpKey"
              @keydown.down="onDownKey"
              @keydown.enter="onEnterKey"
              @keyup.enter="onEnterKey"
          />
        </div>
        <ul class="block p-1">
          <li class="block mb-[2px]" v-for="(item, index) in items">
            <a
              class="block p-2 bg-white rounded-sm cursor-pointer"
              :class="selectIndex === index ? 'bg-gray-500 text-white' : ''"
              @mousedown.prevent="select(result)"
              @mouseover.prevent="onMouse(index)"
            >
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
