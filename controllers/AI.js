const openai=require('openai');
require('dotenv').config();

const Ask=async(req,res)=>{
    try {
        res.status(200).send('ok')
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

module.exports={
    Ask,
}