import axios from 'axios'
import apiConfig from '~/configs/api'

let apiInstance = {
  api: null,
  context: null,
}

export const createInstance = (context) => {
  const { store } = context
  apiInstance.context = context

  const instance = axios.create({
    baseURL:
      process.env.ENDPOINT_TARGET ||
      apiConfig.ENDPOINT[process.env.ENDPOINT_MODE || 'local'],
  })

  instance.interceptors.request.use((config) => {
    const { store } = context
    // console.dir(store)
    try {
      config.headers = {
        Authorization: `Bearer ${store.state.user.user.token}`,
      }
    } catch {
      // console.log("no token")
    }
    store.commit('loading/start')
    // do something to set the config
    return config
  })

  instance.interceptors.response.use(
    (response) => {
      // do someting when get response and return it
      store.commit('loading/end')
      return response
    },
    (error) => {
      // do someting when error occurs
      store.commit('loading/end')
      return error
    }
  )

  apiInstance.api = instance
}

export default apiInstance
