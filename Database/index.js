const mongoose = require("mongoose");

exports.connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todo-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("mongo db todo app running successfully");
  } catch (e) {
    console.log(`unable to connect : ${e.message}`);
  }
};
