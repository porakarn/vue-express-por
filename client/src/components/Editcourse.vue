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
export default {

  data () {
    return {
  course: { name: '', price: '' },
    }
  },
     created: function(){
            this.getItem();
        },
 methods: {
            getItem()
            {
               const courseId = this.$route.params.id
         axios.get(`http://localhost:8000/courses/${courseId}`)
           .then((response) => {
               console.log(response.data);
                this.course = response.data;
              })
            .catch((error) => {
                console.log(error);
            });
             
            },

            updateItem()
            {
               
  //  let updCustomer = {
  //                   name: this.course.name,
  //                   price: this.course.price,
             
                    
  //               }
  //                const courseId = this.$route.params.id
  //               this.axios.put(`http://localhost:8000/courses/update/${courseId}`), updCustomer)
  //                  .then((response) => {
  //         console.log(response);
  //       }).then(() => {
  //         this.$router.push({
  //           name: 'Courses'
  //         })
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

//  let updCustomer = {
//                     name: this.course.name,
//                     price: this.course.price
                    
//                 }
//                 this.axios.put('http://localhost:8000/courses/update/'+this.$route.params.id, updCustomer)
                   
//                       .then((response) => {
//           console.log(response);
//         }).then(() => {
//           this.$router.push({
//             name: 'Courses'
//           })
//         })
//         .catch((error) => {
//           console.log(error);
//         });

//
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


            //
            }
        }

}
  


</script>


<style >

</style>

