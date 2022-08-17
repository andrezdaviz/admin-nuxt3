<script setup>
  defineProps({
    modelValue: {
      type: String,
      default: "",
    },
  });
  defineEmits(["update:modelValue"]);
  const input = ref(null);
</script>
<template>
  <input
    ref="input"
    type="text"
    class="px-3 py-2 leading-5 text-gray-300 transition ease-out delay-500 bg-gray-600 border-b-2 rounded shadow-inner border-b-gray-400 focus:border-b-gray-500 focus:outline-none"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
