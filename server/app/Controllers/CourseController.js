var mongoose = require('mongoose');
var Course = mongoose.model('Course');


module.exports = {
list_all_courses(req,res){

  Course.find({ owner: req.owner}).populate('owner').exec(function(err, course){
      if (err) {
        res.send(err);
      } else {
        res.json(course);
      }

  });

},
// let book = new Course(req.body)
//   book.owner = req.account.data._id
//   book.date_added = new Date()

// book.save(function (err, book)


//  var name = req.body.name;
//     var price = req.body.price;
//     var image = req.body.image;
//     var desc = req.body.description;
//     var author = {
//         id: req.user._id,
//         username: req.user.username
//     }
//     var newCampground = {name: name, price: price, image: image, description: desc, author:author}
//     // Create a new campground and save to DB
//     Campground.create(newCampground, function(err, newlyCreated){


create_course (req,res){
  let new_course = new Course(req.body)
 

   new_course.save(function(err, course){

     if (err) {
       res.send(err);
     } else {
       res.json(course);
     }
   });
},
// //ของจริง
// async show (req, res) {
//     try {
//       const course = await Course.findById(req.params.id)
//       res.send(course)
//     } catch (err) {
//       res.status(500).send({
//         error: 'an error has occured trying to show the courses'
//       })
//     }
//   },
  
show (req, res) {
  Course.findById(req.params.id).populate('owner').exec(function(err, course){
    if (err) {
      res.send(err);
    } else {
      res.send(course);
    }
  })

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