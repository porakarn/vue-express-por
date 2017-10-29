<template>
  <div v-if="isLoggedIn">
  <div class="container">
      <h1>Courses</h1>


      <table class="table table-striped table-borderes">
      <thead>
        <tr>
          <th class="center">Course Name</th>
          <th class="center">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course._id">
          <td class="text-left"> {{ course.name}}</td>
          <td class="text-left"> {{ course.price}}</td>
            <td class="text-left"> {{ course.user}}</td>
           <!-- <router-link :to="{name: 'Course', params: {
             courseId: course.id
           }
          }">
             <at-button type="primary" icon="icon-search"></at-button>
           </router-link> -->

         <!-- <router-link :to="'/courses/' + course._id">Detail</router-link> -->
         <router-link :to="{name: 'Course', params: { id: course._id }}" class="btn btn-primary">Edit</router-link>
<!-- :to="{'/item/' + item.id}" -->
                     <!-- <at-button type="button " icon="icon-search" :to="{name: 'Viewcourse', params: {
                          courseId: course.id
                        }
                       }"></at-button> -->
<button class="btn btn-danger" v-on:click="deleteItem(course._id)">Delete</button>
       </tr>
      </tbody>
    </table>
<router-link to="/addcourse">
    <at-button type="primary">Add Course</at-button>
</router-link>
      </div>
    </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios';
export default {

    name:'course',
    data() {
        return {
            courses: null

        }
    },

        mounted() {
        axios.get('http://localhost:8000/courses')
            .then((response) => {
                console.log(response.data);
                this.courses = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },

      methods: {
        logout () {
          this.$store.dispatch('logout')
        },
         deleteItem(_id)
            {
              let uri = 'http://localhost:8000/courses/delete/'+_id;
              this.courses.splice(_id, 1);
              this.axios.get(uri);
            }
      },
      computed: {
        isLoggedIn () {
          return this.$store.getters.isLoggedIn
        }
      }
    }

</script>


