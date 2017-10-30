const express = require('express');

const router = express.Router();
var Course = require("../database/Models/Course")

var CourseController = require("../app/Controllers/CourseController")

/**
 * Controllers
 */
const AuthController = require('../app/Controllers/AuthController');

/**
 * Policies
 */
const AuthPolicy = require('../app/Policies/AuthPolicy');

/**
 * Routes


 */
 router.route('/courses')
 .get(CourseController.list_all_courses)
 .post(CourseController.create_course)

 router.get('/courses/:id',
   CourseController.show)

router.put('/courses/update/:id',
  CourseController.put)


// router.get('/courses/:id', function (req, res) {
//   Course.findOne({ _id: req.params.id }, function (err, course) {
//     if (err) {
//       return res.send(err);
//     }

//     res.json(course);
//   });
// });
///////////////////////////////////////////
// router.route('/courses/:id').get(function (req, res) {
//   var id = req.params.id;
//   Course.findById(id, function (err, course) {
//     res.json(course);
//   });
// });

 


router.post('/register', AuthPolicy.register, AuthController.register);
router.post('/login', AuthController.login);




//  Defined update route
// router.route('/courses/update/:id').post(function (req, res) {
//   Course.findById(req.params.id, function (err, course) {
//     if (!course)
//       return next(new Error('Could not load Document'));
//     else {
//       course.name = req.body.name;
//       course.price = req.body.price;

//       course.save().then(course => {
//         res.json('Update complete');
//       })
//         .catch(err => {
//           res.status(400).send("unable to update the database");
//         });
//     }
//   });
// });

// Defined delete | remove | destroy route
router.route('/courses/delete/:id').get(function (req, res) {
  Course.findByIdAndRemove({ _id: req.params.id }, function (err, course) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});







module.exports = router;
