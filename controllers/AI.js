const {Configuration, OpenAIApi}=require('openai');
require('dotenv').config();
const configuration=new Configuration({
    apiKey:process.env.OPENAIKEY
});
const openai=new OpenAIApi(configuration);

const Ask=async(req,res)=>{
    try {
        const model="text-ada-001";
        const response=await openai.createCompletion({
            model,
            prompt:req.body.prompt,
            // n:1,
            max_tokens:1,
            // stop:'.',
            temperature:0,
        })
        const answer=response.data.choices[0].text;
        res.status(200).send(answer);

        // const {prompt}=req.body
        // const model="chatgpt";
        // openai.completions.create({
        //     engine:model,
        //     prompt,
        //     max_tokens:2048,
        //     n:1,
        //     stop:'.',
        //     temperature:0.5,
        // },(error,response)=>{
        //     if(error){
        //         res.send(error)
        //     }else{
        //         res.send(response.choices[0].text)
        //     }
        // })
    } catch (error) {
        if(error.response){
            console.log(error.response.status)
            console.log(error.response.data)
        }else{
            console.log(error.message)
        }
        res.status(400).send({
            error:error.message,
            msg:'Try again!'
        })
    }
}

module.exports={
    Ask,
}