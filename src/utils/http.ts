import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

let loading = false

const instance: AxiosInstance = axios.create({
  // baseURL: import.meta.env.PROD
  //     ? process.env.API_DEV
  //     : process.env.API_PROD,

  timeout: 1000 * 5,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
    // "x-lang": "cn",
    // "x-session-platform-code": "casino_plat",
  }
})

instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  if (!loading) {
    // Loading.show();
    loading = true
  }
  return config
})
// // Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    const { data: result }: any = response
    if (loading) {
      // Loading.hiden();
      loading = false
    }
    if (result.code !== 0) {
      return Promise.reject(new Error(result.reason))
    }
    return result
  },
  (error) => {
    const response = error.response
    console.log('response', error.message);
    
    if (loading) {
      // Loading.hiden();
      loading = false
    }
    // if (response.status === 401) {
    //   console.log('response.status', response.status)
    // } else if (response.data?.msg) {
    //   console.log('response.data?.msg', response.data?.msg)
    // }

    return Promise.reject(response)
  }
)
export default instance
