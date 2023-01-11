
const getDiagnosed=document.querySelector('#get-diagnosed');
getDiagnosed.addEventListener('click',()=>{
    window.location.href='/laboratory'
});
const getDiagnosed2=document.querySelector('#get-diagnosed2');
getDiagnosed2.addEventListener('click',()=>{
    window.location.href='/laboratory'
});

//opens menu list
const openMenu=document.querySelector('.menu');
openMenu.addEventListener('click',()=>{
    document.querySelector('.menu-list-bg').style.display='block'
});
//close menu list
const closeMenu= document.querySelector('.menu-list-bg');
closeMenu.addEventListener('click',()=>{
    document.querySelector('.menu-list-bg').style.display='none'
});

//goes to landing page
const toLandingPage=document.querySelector('.logo') 
toLandingPage.addEventListener('click',()=>{
    window.location.href='/'
})

const tags=[
    {
        id:1,
        tag:['Headache','Fatigue','Back pain','Stomachache']
    },
    {
        id:2,
        tag:['Vomiting','Neck pain','Irritability','Sleepiness']
    },
    {
        id:3,
        tag:['Weight loss','Blurred vision','Back pain','Stomachache']
    },
    {
        id:4,
        tag:['Skin rash','Swelling','Joint pain','Depressed']
    },
    {
        id:5,
        tag:['Fever','Diarrhea','Muscle aches','Coughing']
    },
    {
        id:6,
        tag:['Shortness of breath','abdominal pain','Chest pain','Change in appetite']
    }
]

const tagSection=document.querySelector('.tag-section');
tags.map(tag=>{
    let i='';
    i=`
    <div class="column" key=${tag.id}>
        <div class="tag">
           ${tag.tag[0]}
        </div>
        <div class="tag">
            ${tag.tag[1]}
        </div>
        <div class="tag">
            ${tag.tag[2]}
        </div>
        <div class="tag">
            ${tag.tag[3]}
        </div>
    </div>
    `
    tagSection.innerHTML+=i;
})

const questions=[
    {
        id:1,
        question:'Difference between symptoms and signs of illnesses?'
    }
]
const tagQuestion=document.querySelector('.tag-question');
questions.map(tag=>{
    let i='';
    i=`
    <div class='tag' key=${tag.id}>
        ${tag.question}
    </div>
    `
    tagQuestion.innerHTML+=i;
});


//get chacked form
const getCheckedForm=document.querySelector('.form-get-checked');
getCheckedForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const objective=document.querySelector('.objective');
    const objectiveContent=document.querySelector('.objective-content');
    try {
        const url=''
        const response=await fetch(url,{
            method:'POST',
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify({
                request:getCheckedForm.getChecked.value
            })
        })
        const parseRes=await response.json()
        objective.style.display='block'
        objectiveContent.innerHTML=`
        <b>
            <span style="color: green;">Results for ${getCheckedForm.getChecked.value}</span><br/>
            <p>${parseRes}</p>
        </b>
        `
    } catch (error) {
        objective.style.display='block'
        objectiveContent.innerHTML=`
        <b>
            <span style="color: red;">No Internet</span>
        </b>
        `
        //close objective tab after 7sec
        setTimeout(()=>{
            objective.style.display='none'
        },7000)
    }
})

//floating whatsapp button
const floatWhatsapp=document.querySelector(".float-whatsapp");
floatWhatsapp.addEventListener('click',()=>{
    window.location.href='https://wa.me/+254754423664'
})

//open objective tab
const objective=document.querySelector('.objective');
const objectiveContent=document.querySelector('.objective-content');
const openObjective=document.querySelector('.open-objective');
openObjective.addEventListener('click',()=>{
    objective.style.display='block'
    objectiveContent.innerHTML=`
    <b>
        Ensuring <span style="color: green;">Healthy Lives</span> and promoting the <span style="color: green;">well-being</span>
        for all at all ages is essential to <span style="color: green;">sustainable development</span>
    </b>
    `
})
const openObjective1=document.querySelector('.open-objective1');
openObjective1.addEventListener('click',()=>{
    objective.style.display='block'
    objectiveContent.innerHTML=`
    <b>
        <span style="color: green;">Healthy</span> Living.
    </b>
    `
})
const openObjective2=document.querySelector('.open-objective2');
openObjective2.addEventListener('click',()=>{
    objective.style.display='block'
    objectiveContent.innerHTML=`
    <b>
        <span style="color: green;">Healthy</span> Eating.
    </b>
    `
})
//close objective tab
objective.addEventListener('click',()=>{
    objective.style.display='none'
})
//close objective tab after 5min
setTimeout(()=>{
    objective.style.display='none'
},300000)