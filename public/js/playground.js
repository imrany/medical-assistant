const getStartedBtn=document.querySelector('#get-diagnosed');
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

//sending request to openai
let req='';
const sendRequest=document.querySelector('.handle-submit');
sendRequest.addEventListener('submit',async(e)=>{
    const request=sendRequest.request.value
    e.preventDefault();
    try {
        let i=``
        req=request
        // display user question
        const textResponse=document.querySelector('.text-response');
        i=`
        <div class='text'>
            <h2>Q: ${req}</h2>
            <b>A: Good behavior is the key always be good boy okay imlove myself</b>
        </div>
        `
        textResponse.innerHTML+=i
    } catch (error) {
        
    }
})