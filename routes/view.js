const express=require('express'),
views=express.Router();

//view routes
views.get('/',(req,res)=>{
    res.render('index',{title:'Landing page',js:'js/app.js'})
});
views.get('/laboratory',(req,res)=>{
    res.render('playground',{title:'Laboratory',js:'js/playground.js'})
});
views.use((req,res)=>{
    res.status(404).render('notfound',{title:'Not found',js:'js/app.js'})
})

module.exports=views
