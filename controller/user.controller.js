exports.getusers=async(req,res)=>{
    res.json({success:true,message:"user route works"});
};

exports.getuserbyid=async(req,res)=>{
    let {id}= req.params;
    res.json({success:true,userrid:`user req id:${id}`})
};