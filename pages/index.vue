<script setup>
  const options = reactive({});

  const firstName = ref("");

  const selected = (e) => {
    const val = e.target.value;

    options.value = val;
  };
</script>

<template>
  <CoreInput v-model="firstName"></CoreInput>
  <p>{{ firstName }}</p>

  <Typeahead url="/api/search/sports" @input="selected" :initialize="options" />
</template>
