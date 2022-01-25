import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_ACCESS_TOKEN}`
})

export const cancelationToken = axios.CancelToken

/*
 * Middleware after Request
 */
api.interceptors.response.use(
  function (response) {
    if (response.data.response === 'error') {
      if ('error' in response.data) alert(response.data.error)
      return { data: { results: [] } }
    }
    return response
  },
  function (error) {
    const { response } = error

    if (response) {
      switch (response.status) {
        //500
        case 500:
          alert('something bad happened, try again')
          break
      }
    } else {
      alert('checkout your network connection')
    }

    return Promise.reject(error)
  }
)

export default api
