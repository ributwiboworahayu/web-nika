<script setup>
import Footer from '@/components/Footer.vue'
import FormLogin from '@/components/FormLogin.vue'
import MainWellcome from '@/components/MainWellcome.vue'
</script>

<template>
  <div class="container container-book d-flex justify-content-center align-items-center">
    <div class="row justify-content-center">
      <div class="col-md-10 d-flex justify-content-center">
        <!-- Kartu dengan bentuk seperti buku (dua halaman) -->
        <div class="card mx-auto border-0 shadow book-card">
          <div class="card-body d-flex flex-row">
            <!-- Halaman kiri -->
            <div class="flex-grow-1 page d-flex flex-column justify-content-center align-items-center" id="page-1">
              <h5 class="card-title">Login</h5>
              <FormLogin />
            </div>
            <!-- Garis pemisah di tengah -->
            <div class="border-end me-3" style="width: 2px;"></div>
            <!-- Halaman kanan -->
            <div class="flex-grow-1 page d-flex flex-column justify-content-center align-items-center" id="page-2">
              <h5 class="card-title">NgopiKode01</h5>
              <MainWellcome />
            </div>
          </div>
          <div class="card-footer bg-white border-0 d-flex justify-content-end">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-book {
  height: 100vh; /* Tinggi penuh viewport */
}

.book-card {
  height: 700px; /* Tinggi statis */
  width: 1200px; /* Lebar penuh container */
}

.page {
  overflow-y: auto; /* Untuk memungkinkan scrolling jika konten lebih tinggi dari kartu */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-body {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#page-1, #page-2 {
  max-width: 50%;
}
</style>