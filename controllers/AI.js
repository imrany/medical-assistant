
const Ask=async(req,res)=>{
    try {
        const {prompt}=req.body;
        res.status(200).send({msg:prompt});
    } catch (error) {
        res.status(400).send({
            error:error.message,
            msg:'Try again!'
        })
    }
}

module.exports={
    Ask,
}