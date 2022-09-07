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
    class="w-full px-3 py-2 leading-5 text-gray-200 transition ease-out delay-500 border-b rounded bg-fg border-b-gray-400 focus:border-b-gray-500 focus:outline-none"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
