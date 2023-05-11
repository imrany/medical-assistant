const express=require('express'),
views=express.Router();

//view routes
views.get('/',(req,res)=>{
    res.render('index',{title:'Home'})
});
views.get('/playground',(req,res)=>{
    res.render('playground',{title:'AI'})
});
 
//api routes
views.use('/api',require('./API'));

//rendering not found page
views.use((req,res)=>{
    res.status(404).render('notfound',{title:'Not found'})
})

module.exports=views
