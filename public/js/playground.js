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


//sending request to openai
let req='';
const sendRequest=document.querySelector('.handle-submit');
sendRequest.addEventListener('submit',async(e)=>{
    const request=sendRequest.request.value
    e.preventDefault();
    try {
        const url='/api';
        const response=await fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                prompt:request
            })
        })
        const parseRes=await response.json();
        let i=``
        req=request
        // display user question
        const textResponse=document.querySelector('.text-response');
        if(parseRes.error){
            i=`
            <div class='text-error'>
                <p style="color:red;">Error: ${parseRes.msg}</p>
            </div>
            `
            textResponse.innerHTML+=i
            setTimeout(()=>{
                textResponse.innerHTML=``
            },1500)
        }else{
            i=`
            <div class='text' title="${req} 's response">
                <h2>Q: ${req}</h2>
                <b>A: You are likely having ${parseRes.msg}</b>
            </div>
            `
            textResponse.innerHTML+=i
        }
    } catch (error) {
        // display error message
        const textResponse=document.querySelector('.text-response');
        i=`
        <div class='text-error'>
            <p style="color:red;">Error: ${error.message}</p>
        </div>
        `
        textResponse.innerHTML=i
        setTimeout(()=>{
            textResponse.innerHTML=``
        },1500)
    }
})