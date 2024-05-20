<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="text-center">{{ msg }}</h1>
  <br>
  <p class="text text-center">
    Selamat datang di Ngopikode01, tempat belajar pemrograman web yang menyenangkan.
  </p>

</template>

<style scoped>
</style>
