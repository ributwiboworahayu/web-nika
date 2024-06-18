<script setup>
import Swal from 'sweetalert2'
import cookies from 'vue-cookies'
// import Sidebar component and use it in the template

// logout function with remove cookies and redirect to login page. but before that, show a sweet alert
const logout = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to logout from this page?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, logout!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Remove cookies
      cookies.remove('token')
      cookies.remove('refresh_token')

      // Redirect to login page
      Swal.fire(
        'Logged Out!',
        'You have been successfully logged out.',
        'success'
      ).then(() => {
        window.location.href = '/login'
      })
    }
  })
}
</script>

<template>
  <div class="container">
    <h1>Dashboard</h1>
    <button class="btn btn-danger" @click="logout">Logout</button>
  </div>
</template>

<style scoped>

</style>