const mongoose=require('mongoose');
const schema= mongoose.Schema;
const UserSchema= new schema(
{
    UserName:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    Password:
    {
        type:String,
        require:true,
        minlength:8,
        trim:true
    }

},{timestamps:true});

exports.UserModal=mongoose.model('user',UserSchema)