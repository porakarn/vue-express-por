<template>
  <div class="container">
  <div class="col-md-5 ">
    <h1>Add Course</h1><br>

    <at-input size="large"  placeholder="Enter course name" v-model="Course.name">
      <template slot="prepend">
        <span>Name</span>
      </template>
    </at-input><br>

    <at-input size="large" placeholder="Enter price" v-model="Course.price">
      <template slot="prepend">
        <span>Price</span>
      </template>
    </at-input><br>


  

<at-button type="primary" @click="addToAPI">Submit</at-button>



  </div>
</div>

</template>

<script>
 import axios from 'axios';
 import CourseService from '@/services/CourseService'
export default {

  data () {
    return {
  Course: { name: '', price: '' },
    }
  },

  methods:{

   async addToAPI () {
    
 let newCourse = {
          name: this.Course.name,
          price: this.Course.price
         
      }
      console.log(newCourse);

      try {
        await CourseService.post(newCourse)
        this.$router.push({
          name: 'Courses'
        })
      } catch (err) {
        console.log(err)
      }
    }

  }

}



</script>




<style >

</style>

