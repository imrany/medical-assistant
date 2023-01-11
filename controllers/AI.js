const brain =require('brain.js');
const data=require('../db/data.json');
const request = require('request');
const network= new brain.recurrent.LSTM();
const fs = require('fs');
require('dotenv').config();

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

        //google search the output
        let options = {
              'method': 'POST',
              'url': 'https://google.serper.dev/search',
              'headers': {
                'X-API-KEY': process.env.SEARCH_API_KEY,
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "q": output,
                "gl": "us",
                "hl": "en",
                "autocorrect": true
            })
            
        };
        request(options, (error, response) => {
            if (error) {
                res.status(404).send({msg:"No Internet"})
            }else{
                res.status(200).send({
                    msg:output,
                    ans:response
                });
            }
        });
                // res.status(200).send({
                //     msg:output,
                //     body:require('../search.json')
                // });
    } catch (error) {
        res.status(400).send({
            error:error.message,
            msg:'Try again!',
        })
    }
}

module.exports={
    Ask,
}
