const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Posts', UserSchema);
