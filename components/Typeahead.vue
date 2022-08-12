<script setup>

  const results = ref([]);
  const selectIndex = ref(-1);
  const isOpen = ref(false);
  const search = ref(null);


  const { initialize, tabindex, url } = defineProps({
    initialize: {
      default: null,
    },
    url: { required: true },
    tabindex: { default: 0 },
  });


  const emit = defineEmits(["input"]);

  const onToggle = () => {
    if (isOpen.value) {
      isOpen.value = false;
    } else {
      open();
    }
  };

  const onBlur = () => {
    close();
  };

  const onKey = (e) => {
    const KeyCode = e.KeyCode || e.which;
    if (!e.shiftKey && KeyCode !== 9 && !isOpen.value) {
      open();
    }
  };

  const onEsc = () => {
    // console.log("esc");
    close();
  };

  const onDownKey = (e) => {
    results.value.length - 1 > selectIndex.value ? selectIndex.value-- : "";
  };

  const onUpKey = () => {
    selectIndex.value > 0 ? selectIndex.value-- : "";
  };

  const onEnterKey = () => {
    const found = results.value[selectIndex.value];

    //console.log(found);

    found ? select(found) : "";
  };

  const close = () => {
    results.value = [];
    isOpen.value = false;
    search.value = null;
    selectIndex.value = -1;
  };
  const open = () => {
    fetchData("");
    isOpen.value = true;
    nextTick(() => {
      search.value.focus();
    });
  };

  const onMouse = (index) => {
    selectIndex.value = index;
  };

  const select = (result) => {
    emit("input", { target: { value: result } });
    close();
  };

  const fetchData = async (q) => {
    const { data, pending } = await useFetch(url, { params: { q: q } });
    if (data.value.results.length) {
      results.value = data.value;
    } else {
      onEnterKey();
      close();
    }
    //console.log(results);
  };

  const onSearch = (e) => {
    const q = e.target.value;
    selectIndex.value = 0;
    fetchData(q);
  };

  const selectedText = computed(() =>
    initialize.value && initialize.value.text
      ? initialize.value.text
      : "Escribir Algooo"
  );
</script>
<template>
  <div class="relative block bg-white" :class="[isOpen ? ' border-b-0' : '']">
    <div class="relative">
      <div
        class="bg-white pt-2 pb-1 px-3 border border-gray-100 shadow cursor-pointer select-none flex justify-between text-base"
        :tabindex="tabindex"
        ref="toggle"
        @click="onToggle"
        @keydown="onKey"
      >
        {{ selectedText }}
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
            @input="onSearch"
            @keydown.esc="onEsc"
            @keydown.up="onUpKey"
            @keydown.down="onDownKey"
            @keydown.enter="onEnterKey"
            @keyup.enter="onEnterKey"
          />
        </div>
        <ul class="block p-1">

          <li class="block mb-[2px]" v-for="(result, index) in results.results">
            <a
              class="cursor-pointer block text-white p-cd admin2 bg-gray-500 rounded-sm"
              :class="selectIndex === index ? 'bg-slate-800' : ''"
              @mousedown.prevent="select(result)"
              @mouseover.prevent="onMouse(index)"
            >
              {{ result.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
