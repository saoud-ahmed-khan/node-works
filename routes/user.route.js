const express=require("express")

const {usercontroller} =require("../controller/index")

const app=express();

const router = express.Router();

router.get("/" ,usercontroller.getusers);
router.get("/:id", usercontroller.getuserbyid);

exports.userRouter=app.use('/user', router);