var mongoose = require("mongoose");

// schema creation
var userSchema = mongoose.Schema({
  Name: String,
  Email: String,
  password: String,
  Phone:Number,
  userType: { type: String, enum: ["admin", "user"],default: "user" },
});

// model
var userModel = mongoose.model("user", userSchema);

module.exports = userModel;