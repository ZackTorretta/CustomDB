const Mongoose = require('mongoose');

module.exports = Mongoose.model('Player', new Mongoose.Schema({
  userID: { type: Number, required: true, unique: true },
  month: {
    type: Number, required: true, min: 1, max: 12,
  },
  day: {
    type: Number, required: true, min: 1, max: 31,
  },
  year: {
    type: Number, required: true, min: 2021, max: 3000,
  },
  firstName: { type: String, required: true },
  assignmentName: { type: String, required: true },
}, {
  toJSON: {
    getters: true,
    virtuals: false,
  },
}));
