
const getStartedBtn=document.getElementById('get-diagnosed');
getStartedBtn.addEventListener('click',()=>{
    window.location.href='/laboratory'
});
//opens menu list
const openMenu=()=>{
    document.querySelector('.menu-list-bg').style.display='block'
}
//close menu list
const closeMenu=()=>{
    document.querySelector('.menu-list-bg').style.display='none'
}
//goes to landing page
const toLandingPage=()=>{
    window.location.href='/'
}
