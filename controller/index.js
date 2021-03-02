const {getuserbyid,getusers,signupUser} = require("./user.controller")
const {gettodo} = require("./todo.controller")


exports.usercontroller={getuserbyid,getusers,signupUser};
exports.todocontroller={gettodo};