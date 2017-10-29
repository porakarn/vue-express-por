<template>
  <div>
    <td class="text-left"> {{ course.name}}</td>
    <td class="text-left"> {{ course.price}}</td>

     <button @click="onDelete" class="btn red right">Delete</button>
  </div>

</template>

<script>


 import axios from 'axios';
   export default {
  data() {
        return {
            course: {}
        }
    },
mounted(){
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
methods:{
    onDelete(){
      let courseId = this.$route.params.id;
    axios.delete(`http://localhost:8000/courses/${courseId}`)
     
        .then((response) => {
         this.$router.push({
            name: 'Courses'
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
// onDelete(){
//     let meetupId = this.state.details.id;
//     axios.delete(`http://localhost:3000/api/meetups/${meetupId}`)
//       .then(response => {
//         this.props.history.push('/');
//       }).catch(err => console.log(err));
//   }

</script>

<style scoped>


</style>