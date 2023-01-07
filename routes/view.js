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
        },
        {
            id:3,
            name:'Reviews',
            url:'/reviews',
            title:"Reviews"
        },
        {
            id:4,
            name:'Blog',
            url:'/blogs',
            title:"Health Blogs"
        },
    ]})
});
views.get('/laboratory',(req,res)=>{
    res.render('playground',{title:'Laboratory',js:'js/playground.js',button:{name:'Get Results',id:'get-results'},paths:[
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
        },
        {
            id:3,
            name:'Reviews',
            url:'/reviews',
            title:"Reviews"
        },
        {
            id:4,
            name:'Get Help',
            url:'#',
            title:"Get Help"
        },
        {
            id:5,
            name:'Blog',
            url:'/blogs',
            title:"Health Blogs"
        }
    ]})
});
views.get('/facilities',(req,res)=>{
    res.render('facilities',{title:'Facilities',js:'js/facilities.js',button:{name:'Get Results',id:'get-results'},paths:[
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
        },
        {
            id:3,
            name:'Reviews',
            url:'/reviews',
            title:"Reviews"
        },
        {
            id:4,
            name:'Get Help',
            url:'#',
            title:"Get Help"
        },
        {
            id:5,
            name:'Blog',
            url:'/blogs',
            title:"Health Blogs"
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
        },
        {
            id:3,
            name:'Reviews',
            url:'/reviews',
            title:"Reviews"
        },
        {
            id:4,
            name:'Blog',
            url:'/blogs',
            title:"Health Blogs"
        },
    ]})
})

module.exports=views
