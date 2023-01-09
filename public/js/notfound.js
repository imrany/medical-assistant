const getDiagnosed=document.querySelector('#get-diagnosed');
getDiagnosed.addEventListener('click',()=>{
    window.location.href='/laboratory'
});
//opens menu list
const openMenu=document.querySelector('.menu');
openMenu.addEventListener('click',()=>{
    document.querySelector('.menu-list-bg').style.display='block'
})
//close menu list
const closeMenu= document.querySelector('.menu-list-bg');
closeMenu.addEventListener('click',()=>{
    document.querySelector('.menu-list-bg').style.display='none'
});

//goes to landing page
const toLandingPage=document.querySelector('.logo') 
toLandingPage.addEventListener('click',()=>{
    window.location.href='/'
});

setTimeout(()=>{
    alert('Redirecting to home page');
    window.location.href='/'
},5000)