<template>
  <div v-if="isLoggedIn">
  <div class="container">
      <h1>Courses</h1>


      <table class="table table-striped table-borderes">
      <thead>
        <tr>
          <th class="center"> Name</th>
          <th class="center">Price</th>
           <th class="center"> Owner</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course._id">
          <td class="text-left"> {{ course.name}}</td>
          <td class="text-left"> {{ course.price}}</td>
            <td class="text-left"> {{ course.owner}}</td>
           <!-- <router-link :to="{name: 'Course', params: {
             courseId: course.id
           }
          }">
             <at-button type="primary" icon="icon-search"></at-button>
           </router-link> -->

         <!-- <router-link :to="'/courses/' + course._id">Detail</router-link> -->
         <router-link :to="{name: 'Course', params: { id: course._id }}" class="btn btn-primary">Show</router-link>
<!-- :to="{'/item/' + item.id}" -->
                     <!-- <at-button type="button " icon="icon-search" :to="{name: 'Viewcourse', params: {
                          courseId: course.id
                        }
                       }"></at-button> -->
<button class="btn btn-danger" v-on:click="deleteItem(course.id)">Delete</button>
<router-link :to="{name: 'Editcourse', params: { id: course._id }}" class="btn btn-primary">Edit</router-link>
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
import CourseService from '@/services/CourseService'
export default {

    name:'course',
    data() {
        return {
            courses: null

        }
    },
async mounted () {
    this.courses = (await CourseService.index()).data

},

    //     mounted() {
    //     axios.get('http://localhost:8000/courses')
    //         .then((response) => {
    //             console.log(response.data);
    //             this.courses = response.data;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },

      methods: {
        logout () {
          this.$store.dispatch('logout')
        },
         deleteItem(id)
            {
              
            

const courseId = this.$route.params.id
         axios.get(`http://localhost:8000/courses/delete/${courseId}`)
           .then((response) => {
          
                this.courses.splice(id, 1);
              })
            .catch((error) => {
                console.log(error);
            });
             
            }

//  deleteItem( _id) {
//       axios.delete('http://localhost:8000/courses/delete/' + _id)
//         .then(response => this.courses.splice(_id, 1));


      },
      computed: {
        isLoggedIn () {
          return this.$store.getters.isLoggedIn
        }
      }
    }

</script>


