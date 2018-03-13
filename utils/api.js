import axios from 'axios'
import config from '../config'

axios.defaults.baseURL = `${config.API_URL}/`

export default class Api {

  static config() {
    try {
      const token = window.localStorage.getItem('token')
      return(
        token && {
          headers: {
            Authorization: token
          }
        }
      )
    }
    catch(e){
      return null
    }
  }

  static get(url, params, conf) {
    const headers = this.config()
    const config = { ...headers, params, ...conf }
    return axios.get(url, config)
  }

  static post(url, data, conf) {
    const headers = this.config()
    const config = { ...headers, ...conf }
    return axios.post(url, data, config)
  }

  static put(url, data, conf) {
    const headers = this.config()
    const config = { ...headers, ...conf }
    return axios.put(url, data, config)
  }

  static delete(url, conf) {
    const headers = this.config()
    const config = { ...headers, ...conf }
    return axios.delete(url, config)
  }
}
