<template>
  <div>
    <button>{{text}}</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()

</script>

