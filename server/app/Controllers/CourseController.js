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
      const course = await Course.findById(req.params._id)
      res.send(course)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the courses'
      })
    }
  },

  put (req, res) {
    try {
     Course.update(req.body, {
        where: {
          id: req.params.courseId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the course'
      })
    }
  }

}
