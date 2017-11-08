<template>
  <div class="container">
  <div class="col-md-5 ">
    <h1>Edit Course</h1><br>

    <at-input size="large"  placeholder="Enter course name" v-model="course.name">
      <template slot="prepend">
        <span>Name</span>
      </template>
    </at-input><br>

    <at-input size="large" placeholder="Enter price" v-model="course.price">
      <template slot="prepend">
        <span>Price</span>
      </template>
    </at-input><br>


  

<at-button type="primary" @click="updateItem">Submit</at-button>



  </div>
</div>

</template>

<script>
 import axios from 'axios';
 import CourseService from '@/services/CourseService'
export default {

  data () {
    return {
   course: { name: '', price: '' },
  


    }
  },
    
  async mounted () {
    try {
     const courseId = this.$route.params.id
      this.course = (await CourseService.show(courseId)).data
    } catch (err) {
      console.log(err)
    }
  },
 
                    
 methods: {
 updateItem()
            {
               let updCustomer = {
                    name: this.course.name,
                     price: this.course.price,
               }
const courseId = this.$route.params.id
             axios.put(`http://localhost:8000/courses/update/${courseId}`, updCustomer )
     .then((response) => {
          console.log(response);
        }).then(() => {
          this.$router.push({
            name: 'Courses'
          })
        })
        .catch((error) => {
          console.log(error);
        });



//       try {
//         let updCustomer = {
//                     name: this.course.name,
//                      price: this.course.price,
// }
// //  const courseId = this.$route.params.id
        
//         await CourseService.put(updCustomer , this.course )
//         this.$router.push({
//           name: 'Courses',
//           // params: {
//           //   songId: songId
//           // }
//         })
//       } catch (err) {
//         console.log(err)
//       }


//////////-.
            
            }
        }

}
  


</script>


<style >

</style>

