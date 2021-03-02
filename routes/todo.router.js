const express =require("express")

const {todocontroller} = require("../controller/index")

const app= express();

const router = express.Router();

router.get("/", todocontroller.gettodo);

exports.todoRouter= app.use("/todo", router);