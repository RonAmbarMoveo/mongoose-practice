const mongoose = require('mongoose');

const person = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number
  }
});

module.exports = Person = mongoose.model('person', person);