<template>
  <div class="star-container">
    <div class="container d-flex align-items-center justify-content-center text-center vh-100 glitch">
      <div class="content">
        <h1 class="display-1">404
          <span aria-hidden="true">404</span>
          <span aria-hidden="true">404</span>
        </h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily
          unavailable.</p>
        <a href="/" class="btn btn-outline-secondary">
          <i class="bi bi-house-door"></i> Go to Homepage
        </a>
      </div>
    </div>
    <!-- Star Background Layers -->
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
  </div>
</template>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: #000;
}

.star-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.display-1 {
  font-size: 10rem !important;
  position: relative;
  display: inline-block;
  color: white;
  text-shadow: 2px 2px #000;
}

.glitch {
  position: relative;
  color: #000000;
  animation: glitch 1.5s infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  animation: glitch 1.5s infinite;
}

.glitch span:nth-child(2) {
  color: #3fa1b0;
  clip: rect(0, 900px, 0, 0);
  animation: glitch 1.5s infinite reverse;
}

.glitch span:nth-child(3) {
  color: blue;
  clip: rect(0, 0, 0, 900px);
  animation: glitch 1.5s infinite;
}

@keyframes glitch {
  0% {
    clip: rect(10px, 9999px, 130px, 0);
    transform: translate(0, 0);
  }
  10% {
    clip: rect(0px, 9999px, 50px, 0);
    transform: translate(-5px, -5px);
  }
  20% {
    clip: rect(85px, 9999px, 120px, 0);
    transform: translate(5px, 5px);
  }
  30% {
    clip: rect(65px, 9999px, 140px, 0);
    transform: translate(-5px, 5px);
  }
  40% {
    clip: rect(55px, 9999px, 110px, 0);
    transform: translate(5px, -5px);
  }
  50% {
    clip: rect(95px, 9999px, 150px, 0);
    transform: translate(-5px, -5px);
  }
  60% {
    clip: rect(35px, 9999px, 80px, 0);
    transform: translate(5px, 5px);
  }
  70% {
    clip: rect(75px, 9999px, 100px, 0);
    transform: translate(-5px, 5px);
  }
  80% {
    clip: rect(25px, 9999px, 60px, 0);
    transform: translate(5px, -5px);
  }
  90% {
    clip: rect(85px, 9999px, 70px, 0);
    transform: translate(-5px, -5px);
  }
  100% {
    clip: rect(0, 9999px, 90px, 0);
    transform: translate(0, 0);
  }
}

.stars, .stars2, .stars3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent url('https://www.transparenttextures.com/patterns/stardust.png') repeat top center;
  z-index: 0;
}

.stars2 {
  background: transparent url('https://www.transparenttextures.com/patterns/stardust.png') repeat top center;
  animation: moveStars 20s linear infinite;
  opacity: 0.5;
}

.stars3 {
  background: transparent url('https://www.transparenttextures.com/patterns/stardust.png') repeat top center;
  animation: moveStars 30s linear infinite;
  opacity: 0.3;
}

@keyframes moveStars {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-1000px);
  }
}
</style>
