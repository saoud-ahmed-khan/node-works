const mongoose= require("mongoose")
const schema= mongoose.Schema

const todoschema= new schema(
{
    Title:
    {
        require:true,
        trim:true,
        type:String
    },
    Description:
    {
        type:String,
        require:true,
        trim:true,
    },
    isCompleated:
    {
        type:Boolean,
        require:true,
        default:false
    },
    CreatedbBy:
    {
        type:schema.Types.ObjectId,
        ref:"user",
        require:true,

    },
},{timestamps:true}
);
exports.todoModule=mongoose.model("Todo",todoschema)

