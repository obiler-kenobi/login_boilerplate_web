export default function ({ $axios, app }) {
  $axios.onRequest((config) => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategy.token.get()
      const refreshToken = app.$auth.strategy.refreshToken.get()
      let refresh = ''
      if (refresh === '') {
        refresh = refreshToken
      }
      if (app.$auth.strategy.token.status().expired()) {
        config.headers.common.Authorization = refresh
        console.log(refreshToken)
      } else {
        config.headers.common.Authorization = `Bearer ${token}`
      }
     
      // console.log(app.$auth.strategy.refreshToken.status().expired())
    }
  })
}
