import axios from 'axios'

const baseURL =  'http://localhost:4000/api';

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
    return axios.get(`${baseURL}${url}`, config)
  }

  static post(url, data, conf) {
    const headers = this.config()
    const config = { ...headers, ...conf }
    return axios.post(`${baseURL}${url}`, data, config)
  }

  static put(url, data, conf) {
    const headers = this.config()
    const config = { ...headers, ...conf }
    return axios.put(`${baseURL}${url}`, data, config)
  }

  static delete(url, conf) {
    const headers = this.config()
    const config = { ...headers, ...conf }
    return axios.delete(`${baseURL}${url}`, config)
  }
}
