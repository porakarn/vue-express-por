import AxiosService from './AxiosService'

export default {
  register (credentials) {
    return AxiosService().post('register', credentials)
  },
  login (credentials) {
    return AxiosService().post('login', credentials)
  }
}
