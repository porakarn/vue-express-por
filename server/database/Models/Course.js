const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  name: String,
  price: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
 
})






module.exports = mongoose.model('Course', courseSchema);
