const {getuserbyid,getusers} = require("./user.controller")
const {gettodo} = require("./todo.controller")


exports.usercontroller={getuserbyid,getusers};
exports.todocontroller={gettodo};