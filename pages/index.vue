<script setup>
  // const state = useMainStore();

  // state.getItemsSelect();
  const options = reactive({});

  const selected = (e) => {
    const val = e.target.value;
    options.value = val;
    console.log(val);
  };
</script>

<template>
  <h1 class="font-bold text-gray-600">Hello, Tailwind 3!</h1>

  <Typeahead url="/api/search/sports" @input="selected" :initialize="options" />
</template>
