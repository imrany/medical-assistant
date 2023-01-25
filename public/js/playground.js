const startInfo=[
    {
        id:1,
        name:"How do you feel?"
    },
    {
        id:2,
        name:"Get Fast Medical Advise and Treatment"
    },
    {
        id:3,
        name:"Get Results"
    }
]
const startInfoSection=document.querySelector(".start-info");
for(let i=0;i<startInfo.length;i++){
        let info=`
        <div class="tab">
            <p>${startInfo[i].name}.</p>
        </div>
        `

        startInfoSection.innerHTML+= info
}
//first text
// document.querySelector('.small-first-text').innerText='Our goal is ensuring healthy living and protect sick people from developing diseases. Your feedback will help us improve.';
const goal='Our goal is ensuring healthy living and protect sick people from developing diseases. Your feedback will help us improve.'
var curr=0;
function write(){
    const text=document.querySelector('.small-first-text');
    text.textContent+=goal.charAt(curr);
    curr++;
    if(curr<goal.length){
        setTimeout(write,50)
    }
}
write();

//new checkup
document.querySelector('.new-check-up').addEventListener('click',()=>{
    startInfoSection.innerHTML=''
    document.querySelector('.new-check-up').classList.add('checked')
    document.querySelector('.handle-submit').style.opacity="1";
});

//clear screen
document.querySelector('.clear-screen').addEventListener('click',()=>{
    document.querySelector('.text-response').innerHTML=''
    document.querySelector('.small-first-text').innerText='Our goal is ensuring healthy living and protect sick people from developing diseases. Your feedback will help us improve.'
})
//sending request to api
const playgroundSubmitBtn=document.querySelector('.playground-submit-btn');
playgroundSubmitBtn.innerHTML='<i class="fa fa-send"></i>'
let req='';
const sendRequest=document.querySelector('.handle-submit');
sendRequest.addEventListener('submit',async(e)=>{
    const request=sendRequest.request.value
    e.preventDefault();
    try {
        document.querySelector('.small-first-text').innerText=''
        playgroundSubmitBtn.innerHTML='<i class="fa fa-rocket"></i>';
        playgroundSubmitBtn.disabled=true;
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
        playgroundSubmitBtn.innerHTML='<i class="fa fa-send"></i>';
        playgroundSubmitBtn.disabled=false;
        sendRequest.reset()
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
            },8000)
        }else{
            // let data=JSON.parse(parseRes.ans);
            let data=parseRes.ans;
            const textRes=document.querySelector('.text-res');
            let $i='';
             $i=`
            ${data.organic[0].title}
            ${data.organic[0].snippet}
            ${data.organic[0].link}\r\n

            ${data.organic[1].title}
            ${data.organic[1].snippet}
            ${data.organic[1].link}\r\n

            ${data.organic[2].title}
            ${data.organic[2].snippet}
            ${data.organic[2].link}\r\n
            `
            var curr=0;
            function write(){
                textRes.textContent+=$i.charAt(curr);
                curr++;
                if(curr<$i.length){
                    setTimeout(write,50)
                }
            }
            write();

            i= (
                <>
                    <p class="req"> ${req}  <small> <i>AI's response: "${parseRes.msg}"</i></small></p>
                    <div class='text' title="${req} 's response">
                        <div class="text-res"></div>
                        <br/>
                        <div class="down"></div>
                    </div>
                </>
            )

            // i=`
            // <p class="req"> ${req}  <small> <i>AI's response: "${parseRes.msg}"</i></small></p>
            // <div class='text' title="${req} 's response">
            //     ${data.organic.map(item=>(
            //         `
            //         <div key=${item.position}>
            //             <p>${item.title}</p>
            //             <p>${item.snippet}</p>
            //             <a href=${item.link} target='_blank' rel='noreferrer'>View more...</a><br/>
            //             <br/>
            //         </div>
            //         `
            //     ))}
            //     <div class="down"></div>
            // </div>
            // `
            textResponse.innerHTML+=i
            // document.querySelector('.down').scrollIntoView()
        }
    } catch (error) {
        console.log(error.message)
        document.querySelector('.small-first-text').innerText='Our goal is ensuring healthy living and protect sick people from developing diseases. Your feedback will help us improve.'
        sendRequest.reset();
        playgroundSubmitBtn.innerHTML='<i class="fa fa-send"></i>';
        playgroundSubmitBtn.disabled=false;
        // display error message
        const textResponse=document.querySelector('.text-response');
        let i=`
        <div class='text-error'>
            <p style="color:red;">Error: No Internet</p>
        </div>
        `
        textResponse.innerHTML=i
        setTimeout(()=>{
            textResponse.innerHTML=``
        },8000)
    }
})