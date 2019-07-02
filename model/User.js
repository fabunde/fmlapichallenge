const mongoose = require("mongoose");

const userSchema = new Schema({
  fname: {
    type: String,
    require: true
  },
  lname: {
    type: String,
    require: false
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = User = mongoose.model("users", userSchema);
