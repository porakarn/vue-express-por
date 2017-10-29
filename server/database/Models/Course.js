const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  name: String,
  price: String,
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    email: String
  },
})


module.exports = mongoose.model('Course', courseSchema);
