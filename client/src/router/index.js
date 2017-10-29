import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'

/**
 * Authentification
 */
import Login from '@/components/auth/login.vue'
import Register from '@/components/auth/register.vue'
import Courses from '@/components/courses.vue'
import Addcourse from '@/components/addcourse.vue'
import Course from '@/components/course.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/addcourse',
      name: 'Addcourse',
      component: Addcourse
    },
    {
      path: '/courses/:id',
      name: 'Course',
      component: Course
    }

  ]
})
