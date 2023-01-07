
const getDiagnosed=document.querySelector('#get-diagnosed');
getDiagnosed.addEventListener('click',()=>{
    window.location.href='/laboratory'
});
const getDiagnosed2=document.querySelector('#get-diagnosed2');
getDiagnosed2.addEventListener('click',()=>{
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
            <i class="fa fa-close"></i> ${tag.tag[0]}
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
    try {

    } catch (error) {
        
    }
})

//floating whatsapp button
const floatWhatsapp=document.querySelector(".float-whatsapp");
floatWhatsapp.addEventListener('click',()=>{
    window.location.href='https://wa.me/+254754423664'
})
