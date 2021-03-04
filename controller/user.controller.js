const { UserModal } = require("../model");
const bcript = require("bcrypt");

exports.getusers = async (req, res) => {
  res.json({ success: true, message: "user route works" });
};



exports.signupUser = async (req, res) => {
  const { UserName , Password } = req.body;

  if (!UserName || !Password) {
    return res
      .status(400)
      .send({ success: false, message: "user name o password missing" });
  }
  try {
    const user = await UserModal.findOne({ UserName });
    if (user) {
      return res
        .status(409)
        .send({ success: false, message: "user already exsist" });
    }
    const salt = await bcript.genSalt(10);
    const hashpass = await bcript.hash(Password, salt);
    const createUser = await UserModal.create({ UserName, Password: hashpass });
    createUser.save();
    return res.send({
        success :true,
        User: createUser,
        message: "data save successfuly"
    });
  } catch (error) {
      console.log(error.message);
     return res
      .status(500)
      .send({success: false,error:error.message ,message :" internal server error"})
  }
};
