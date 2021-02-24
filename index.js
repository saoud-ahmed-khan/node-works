const express= require('express')
const morgan =require('morgan')

const app= express();

app.use(morgan("dev"))
app.use("/api/v1" , require("./routes/index"))


app.use((req,res)=>{res.status(404).json({
    message:"api route not found",
    route: `${req.hostname} ${req.url}`
})})

const PORT = process.env.PORT|| 5000;
app.listen(PORT,()=>{console.log(`listening to port ${PORT}`);})