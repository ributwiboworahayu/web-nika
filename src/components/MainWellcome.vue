<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="200">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.panorama-destination.com/wp-content/uploads/2016/06/Raja-Ampat-Indonesia-HD-3.jpg"
             class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/10/Danau-Toba-edited.jpg"
             class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img
          src="https://i.pinimg.com/474x/7e/38/a7/7e38a7a5f843edd992e8fed6d420a8de.jpg"
          class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
// test bootstrap carousel
</script>

<style scoped>
</style>
