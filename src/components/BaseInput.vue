<template>
  <div>
    <input v-model="modelValue" type="text">

  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel({required: true})
</script>

