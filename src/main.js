import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css' // Bootstrap Icons
import '@/assets/soft-ui-dashboard.css' // Soft UI Dashboard CSS
import './assets/main.css' // Custom global CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Bootstrap JS bundle
// Import jQuery if needed
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery  // Assign jQuery to global window object if necessary

// Create Vue app instance
const app = createApp(App)

app.use(router)

app.mount('#app')
