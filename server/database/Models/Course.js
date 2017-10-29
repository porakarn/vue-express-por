const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  name: String,
  price: String
});




module.exports = mongoose.model('Course', courseSchema);
