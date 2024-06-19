<template>
  <div class="about mt-4 container-fluid">
    <div v-if="loading" class="spinner-border"
         role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <h5 class="text-center alert">{{ message }}</h5>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import appConfig from '@/app-config.js'
import cookies from 'vue-cookies'
import { handleUnauthorizedAndCheckRefreshToken } from '@/utils/helper.js'

const message = ref('')
const loading = ref(true)

const fetchMessageFromAPI = () => {
  axios.get(appConfig.apiUrl + 'dashboard', {
    headers: {
      Authorization: 'Bearer ' + cookies.get('token')
    }
  }).then(response => {
    message.value = response.data.data
  }).catch(() => {
    handleUnauthorizedAndCheckRefreshToken()

    setTimeout(() => {
      fetchMessageFromAPI()
    }, 500)
  })

  loading.value = false
}

onMounted(() => {
  setTimeout(() => {
    fetchMessageFromAPI()
  }, 500)
})
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
