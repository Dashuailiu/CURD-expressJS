/**
 * * Services for student management
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/student');

var StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'male'
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
});

module.exports = mongoose.model('Student', StudentSchema);
