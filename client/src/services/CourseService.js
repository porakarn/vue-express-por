import Api from '@/services/AxiosService'

export default {
  index (search) {
    return Api().get('courses', {
      params: {
        search: search
      }
    })
  },
  show (_id) {
    return Api().get('courses/:_id')
  },
  post (course) {
    return Api().post('courses', course)
  },
  put (course) {
    return Api().put(`courses/${course.id}`, course)
  }
}
