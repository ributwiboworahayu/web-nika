<script setup>

// logout function with remove cookies and redirect to login page. but before that, show a sweet alert
import { logout } from '@/utils/helper.js'

const handleLogout = () => {
  logout() // logout function from helper.js
}
</script>

<template>
  <div class="container">
    <h1>Dashboard</h1>
    <button class="btn btn-danger" @click="handleLogout">Logout</button>
  </div>
</template>

<style scoped>

</style>