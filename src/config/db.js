const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://aditya:aditya@cluster0.fy3wi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

module.exports = { connect };
