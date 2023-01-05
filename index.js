const express=require('express');
const cors=require('cors');
require('dotenv').config();

//intializing server
const app=express();

//middlewares
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api',require('./routes/API'));

const port=process.env.PORT||5000;
//listening to server
app.listen(port,()=>{
    console.log(`Server running on Port ${port}`)
})