<script setup>
import Footer from '@/components/Footer.vue'
import FormLogin from '@/components/FormLogin.vue'
</script>

<template>
  <div class="container container-book d-flex justify-content-center align-items-center mx-auto">
    <div class="row justify-content-center">
      <div class="col-md-10 d-flex justify-content-center">
        <!-- Kartu dengan bentuk seperti buku (dua halaman) -->
        <div class="card border-0 shadow book-card">
          <div class="card-body d-flex flex-row">
            <!-- Halaman kiri -->
            <div class="flex-grow-1 page d-flex flex-column justify-content-center align-items-center" id="page-1">
              <h5 class="card-title display-5">Selamat Datang</h5>
              <hr class="w-75">
              <p class="text-center mb-4">silakan masuk untuk melanjutkan</p>
              <FormLogin />
            </div>
            <!-- Garis pemisah di tengah -->
            <div class="bg-opacity-75 bg-secondary mx-2 my-0 book-line" style="width: 1px;"></div>
            <!-- Halaman kanan -->
            <div
              class="page d-flex flex-column justify-content-center align-items-center"
              id="page-2">
              <img src="/ngopikode-logo.png" alt="Ngopikode01" style="width: 100%;">
              <div class="card-footer bg-white border-0 d-flex justify-content-end">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Gaya dasar */
.container-book {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.book-card {
  display: flex;
  flex-direction: row;
  height: 700px; /* Tinggi tetap, sesuaikan jika diperlukan */
  width: 100%; /* Menyesuaikan dengan kontainer */
  max-width: 1200px; /* Lebar maksimum */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.page {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.card-body {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

#page-1, #page-2 {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#page-2 {
  display: none;
}

/* Media queries */
@media (min-width: 1051px) {
  #page-2 {
    display: flex;
    max-width: 50%;
  }

  #page-1 {
    max-width: 50%;
  }
}

@media (max-width: 1050px) {
  #page-2 {
    display: none;
  }

  #page-1 {
    max-width: 100%;
  }

  .book-card {
    height: auto;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .book-card {
    height: auto;
    width: 100%;
  }

  .book-line {
    display: none;
  }

  #page-1 {
    max-width: 100%;
  }

  #page-2 {
    display: none !important;
  }
}


</style>