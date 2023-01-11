const express=require('express'),
views=express.Router();

//view routes
views.get('/',(req,res)=>{
    res.render('index',{title:'Landing page',button:{name:'Get Diagnosed',id:'get-diagnosed'},js:'js/app.js',paths:[
        {
            id:1,
            name:'Laboratory',
            url:'/laboratory',
            title:"Get diagnosed"
        },
        {
            id:2,
            name:'Facilities',
            url:'/facilities',
            title:"Local Facilities around you"
        }
    ]})
});
views.get('/laboratory',(req,res)=>{
    res.render('playground',{title:'Laboratory',js:'js/playground.js',button:{name:'Get Diagnosed',id:'get-diagnosed'},paths:[
        {
            id:1,
            name:'Home',
            url:'/',
            title:"Landing page"
        },
        {
            id:2,
            name:'Facilities',
            url:'/facilities',
            title:"Local Facilities around you"
        }
    ]})
});
views.get('/facilities',(req,res)=>{
    res.render('facilities',{title:'Facilities',js:'js/facilities.js',button:{name:'Get Diagnosed',id:'get-diagnosed'},paths:[
        {
            id:1,
            name:'Home',
            url:'/',
            title:"Landing page"
        },
        {
            id:2,
            name:'Laboratory',
            url:'/laboratory',
            title:"Get Diagnosed"
        }
    ]})
});

//api routes
views.use('/api',require('./API'));

//rendering not found page
views.use((req,res)=>{
    res.status(404).render('notfound',{title:'Not found',js:'js/notfound.js',button:{name:'Get Diagnosed',id:'get-diagnosed'},paths:[
        {
            id:1,
            name:'Home',
            url:'/',
            title:"Landing page"
        },
        {
            id:2,
            name:'Facilities',
            url:'/facilities',
            title:"Local Facilities around you"
        }
    ]})
})

module.exports=views
