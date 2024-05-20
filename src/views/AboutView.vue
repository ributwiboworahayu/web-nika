<template>
  <div class="about mt-4">
    <h5 class="text-center alert">{{ message }}</h5>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import appConfig from '@/app-config.js'

const message = ref('')

const fetchMessageFromAPI = async () => {
  try {
    const response = await axios.get(appConfig.apiUrl + 'dashboard')
    message.value = response.data.data
  } catch (error) {
    console.error('Error fetching message from API:', error)
  }
}

onMounted(fetchMessageFromAPI)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
