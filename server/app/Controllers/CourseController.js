var mongoose = require('mongoose');
var Course = mongoose.model('Course');


module.exports = {
list_all_courses(req,res){

  Course.find({}, function(err, course){
      if (err) {
        res.send(err);
      } else {
        res.json(course);
      }

  });

},

create_course (req,res){
   var new_course = new Course(req.body);
   new_course.save(function(err, course){

     if (err) {
       res.send(err);
     } else {
       res.json(course);
     }
   });
},

async show (req, res) {
    try {
      const course = await Course.findById(req.params.id)
      res.send(course)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the courses'
      })
    }
  },

  // async put (req, res) {
  //   try {
  //     await Course.update(req.body, {
  //       where: {
  //         id: req.params.id
  //       }
  //     })
  //     res.send(req.body)
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to update the course'
  //     })
  //   }
  // }



  put (req, res) {

    // use our bear model to find the bear we want
    Course.findById(req.params.id, function (err, course) {

      if (err)
        res.send(err)

      course.name = req.body.name  // update the bears info
      course.price = req.body.price // update the bears info

      // save the bear
      course.save(function (err) {
        if (err)
          res.send(err)

        res.json({ message: 'Bear updated!' })
      })

    })
  }

}