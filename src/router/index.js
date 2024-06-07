import { createRouter, createWebHistory } from 'vue-router'
import appConfig from '@/app-config.js'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import cookies from 'vue-cookies'
import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      meta: {
        title: appConfig.title + ' - Dashboard',
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: appConfig.title + ' - Login',
        afterLogin: '/'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: appConfig.title + ' - About',
        auth: true
      }
    },

    // This route is a catch-all for any other route that doesn't exist
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: appConfig.title + ' - Not Found'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let title = to.meta.title
  if (title) {
    document.title = title
  }

  // If the route requires authentication and the user is not logged in, redirect to the login page
  if (to.meta.auth) {
    const token = cookies.get('token')
    if (!token) {
      next('/login')
      return
    } else {
      // get user data
      axios.get(`${appConfig.apiUrl}user/profile`, {
        headers: { 'Authorization': 'Bearer ' + token }
      }).catch(() => {
        cookies.remove('token')
        next('/login')
      })

    }
  }

  // if access /login and user is already logged in, redirect to home
  if (to.name === 'login' && cookies.get('token')) {
    next('/')
    return
  }

  next()
})

export default router
