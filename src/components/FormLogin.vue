<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import appConfig from '../app-config.js'
import cookies from 'vue-cookies'
import router from '@/router/index.js'

const passwordVisible = ref(false)
const loading = ref(false)
const errorLogin = ref(false)
const errorMessages = ref('')

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
  const passwordInput = document.getElementById('inputPassword')
  passwordInput.type = passwordVisible.value ? 'text' : 'password'
}

const showPasswordBtn = () => {
  const passwordInput = document.getElementById('inputPassword')
  passwordInput.setCustomValidity('')
  const showPasswordBtn = document.querySelector('.show-password-btn')
  if (passwordInput.value !== '') {
    showPasswordBtn.removeAttribute('hidden')
  } else {
    showPasswordBtn.setAttribute('hidden', 'true')
  }
}

const closeAlert = () => {
  errorLogin.value = false
}

const clearValidation = () => {
  document.getElementById('inputEmail').setCustomValidity('')
  document.getElementById('inputPassword').setCustomValidity('')
  errorLogin.value = false
}

const signIn = (event) => {
  event.preventDefault()
  const email = document.getElementById('inputEmail').value
  const password = document.getElementById('inputPassword').value

  loading.value = true
  axios.post(`${appConfig.apiUrl}auth/login`, { email, password })
    .then(response => {
      if (response.data.status !== 'success') {
        const error = response.data.data_fail
        for (const key in error) {
          const input = document.getElementById(`input${key.charAt(0).toUpperCase() + key.slice(1)}`)
          input.setCustomValidity(error[key])
          input.reportValidity()
        }
        if (Object.keys(error).length === 0) {
          errorLogin.value = true
          errorMessages.value = response.data.message
        }
        loading.value = false
        return
      }
      const accessToken = response.data.data.access_token
      cookies.set('token', accessToken, 15 * 60)
      const refreshToken = response.data.data.refresh_token
      cookies.set('refresh_token', refreshToken, 7 * 24 * 60 * 60)
      router.push({ name: 'home' })
    })
    .catch(error => {
      console.error(error)
      errorLogin.value = true
      errorMessages.value = 'An error occurred while logging in. Please try again.'
      loading.value = false
    })
}

// Add event listeners to clear validation messages
onMounted(() => {
  const emailInput = document.getElementById('inputEmail')
  const passwordInput = document.getElementById('inputPassword')

  emailInput.addEventListener('input', clearValidation)
  passwordInput.addEventListener('input', clearValidation)
})
</script>

<template>
  <form class="w-75" @submit.prevent="signIn">
    <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="errorLogin">
      {{ errorMessages }}
      <button type="button" class="close" @click="closeAlert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail" required>
    </div>
    <div class="mb-3 position-relative">
      <label for="inputPassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword" @input="showPasswordBtn" required minlength="6">
      <span class="show-password-btn" @click="togglePasswordVisibility" hidden>
        <i class="bi" :class="passwordVisible ? 'bi-eye' : 'bi-eye-slash'"></i>
      </span>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-brown w-100" :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span v-else>Login</span>
      </button>
    </div>
  </form>
</template>

<style scoped>
.show-password-btn {
  position: absolute;
  top: 75%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.btn-brown {
  background-color: #91673c; /* Brown color */
  color: white; /* White text */
}

.btn-brown:hover {
  background-color: #674b38; /* Darker brown color */
  color: white;
  transform: translateY(-1px);
  animation: moveUp 0.3s;
}
</style>