const brain =require('brain.js');
const data=require('../db/data.json');
const network= new brain.recurrent.LSTM();

const trainingData=data.map(item=>({
    input: item.signs,
    output: item.sickness
}));
network.train(trainingData,{
    iterations:100,
});

const Ask=async(req,res)=>{
    try {
        const {prompt}=req.body;
        const output=network.run(prompt);
        res.status(200).send({msg:output});
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