import Swal from 'sweetalert2'
import cookies from 'vue-cookies'
import axios from 'axios'
import appConfig from '@/app-config.js'
import { jwtDecode } from 'jwt-decode'

export const logout = () => {
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

      // hit api logout
      axios.post(`${appConfig.apiUrl}auth/logout`, {}, {
        headers: { 'Authorization': 'Bearer ' + cookies.get('token') }
      }).then(() => {
        successLogout()
      }).catch(error => {
        console.log(error)
        successLogout()
      })
    }
  })
}

function successLogout() {
  // Remove cookies
  handleRemoveToken()

  // Redirect to login page
  Swal.fire(
    'Logged Out!',
    'You have been successfully logged out.',
    'success'
  ).then(() => {
    window.location.href = '/login'
  })
}

export const isLoggedIn = () => {
  return !!cookies.get('token') && !!cookies.get('refresh_token')
}

export const needRefreshToken = () => {
  return !!cookies.get('refresh_token') && isLoggedIn() === false
}

export const handleUnauthorizedAndCheckRefreshToken = () => {
  if (needRefreshToken()) {
    axios.post(`${appConfig.apiUrl}auth/refresh_token`, {
      refresh_token: cookies.get('refresh_token')
    }).then((response) => {
      const accessToken = response.data.data.access_token
      const refreshToken = response.data.data.refresh_token

      // Set the new token
      handleSetToken(accessToken, refreshToken)

    }).catch(error => {
      console.log(error)

      // remove cookies
      handleRemoveToken()
      swallSessionExpired()
    })
  } else {
    handleRemoveToken()
    swallSessionExpired()
  }
}

const swallSessionExpired = () => {
  Swal.fire({
    title: 'Session Expired!',
    text: 'Your session has expired. Please login again.',
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
  }).then(() => {
    window.location.href = '/login'
  })
}

const handleRemoveToken = () => {
  cookies.remove('token')
  cookies.remove('refresh_token')
}

export const handleSetToken = (accessToken, refreshToken) => {
  try {
    // Decode the JWT token to get the expiration time and set the cookie token
    const decodedToken = jwtDecode(accessToken)
    const timeout = (decodedToken.exp - decodedToken.iat) * 60 // in seconds
    cookies.set('token', accessToken, timeout)

    // Set the refresh token cookie
    cookies.set('refresh_token', refreshToken)
  } catch (e) {
    console.log(e)
    Swal.fire(
      'Error!',
      'An error occurred while setting the token.',
      'error'
    ).then(() => {
      window.location.href = '/login'
    })
  }
}