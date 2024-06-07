<script setup>
import { ref } from 'vue'
import axios from 'axios'
import appConfig from '../app-config.js'
import cookies from 'vue-cookies'
import router from '@/router/index.js'

const passwordVisible = ref(false)

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
  const passwordInput = document.getElementById('inputPassword')
  passwordInput.type = passwordVisible.value ? 'text' : 'password'
}

const showPasswordBtn = () => {

  const passwordInput = document.getElementById('inputPassword')

  // hiden custom validity message
  passwordInput.setCustomValidity('')
  const showPasswordBtn = document.querySelector('.show-password-btn')
  if (passwordInput.value !== '') {
    showPasswordBtn.removeAttribute('hidden')
  } else {
    showPasswordBtn.setAttribute('hidden', 'true')
  }
}

const signIn = (event) => {
  event.preventDefault()
  const email = document.getElementById('inputEmail').value
  const password = document.getElementById('inputPassword').value
  console.log({ email, password })

  axios.post(`${appConfig.apiUrl}auth/login`, { email, password })
    .then(response => {

      if (response.data.status !== 'success') {
        // mapping data_fail to attribute name
        const error = response.data.data_fail
        for (const key in error) {
          const input = document.getElementById(`input${key.charAt(0).toUpperCase() + key.slice(1)}`)
          input.setCustomValidity(error[key])
          input.reportValidity()
        }

        // if no key in data_fail, show message
        if (Object.keys(error).length === 0) {
          alert(response.data.message)
        }
        return
      }
      // set cookie
      const accessToken = response.data.data.access_token
      cookies.set('token', accessToken, 15 * 60) // 15 minutes

      // set refresh token cookie
      const refreshToken = response.data.data.refresh_token
      cookies.set('refresh_token', refreshToken, 7 * 24 * 60 * 60) // 7 days

      // redirect to home page
      router.push({ name: 'home' })
    })
    .catch(error => {
      console.error(error)
    })
}

</script>

<template>
  <form class="w-75" @submit.prevent="signIn">
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
      <button type="submit" class="btn btn-primary w-100">Login</button>
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
</style>