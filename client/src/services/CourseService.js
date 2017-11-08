import Api from '@/services/AxiosService'

export default {
  index (search) {
    return Api().get('courses', {
      params: {
        search: search
      }
    })
  },
  show(courseId) {
    return Api().get(`courses/${courseId}`, courseId)
  },
  post(newCourse) {
    return Api().post('courses', newCourse)
  },
  // put(updCustomer, course) {
  //    return Api().put('courses/update/' + this.$route.params.course., updCustomer, course)
    // return Api().put(`courses/update/${courseId}`, updCustomer)




  }


// return Api().put(`songs/${song.id}`, song)

// axios.put(`http://localhost:8000/courses/update/${courseId}`, updCustomer)

// $route.params.id

// this.$http.get('http://localhost:3000/api/product/' + this.$route.params.id).then((response) => {