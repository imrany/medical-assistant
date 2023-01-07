const getResults=document.querySelector('#get-results');
getResults.addEventListener('click',()=>{
    window.location.href='/results'
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