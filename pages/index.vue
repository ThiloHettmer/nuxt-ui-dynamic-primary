<template>
  <div>
    <p class="text-primary">Nuxt UI Primary</p>
    <p class="text-custom-500">Custom Primary</p>
  </div>

</template>

<script setup lang="ts">
const primaryColor = '255 255 0'

useHead({
  style: [
    {
      key: 'primary-color-override',
      innerHTML: `:root { --custom-primary: ${primaryColor}; }`
    }
  ]
})
</script>