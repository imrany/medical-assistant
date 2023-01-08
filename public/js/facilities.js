const getResults=document.querySelector('#get-results');
getResults.addEventListener('click',()=>{
    window.location.href='/results'
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
})

//goes to landing page
const toLandingPage=()=>{
    window.location.href='/'
}

//getting user location 
let facility=''
const locationNotify=document.querySelector('.location-notify');
const gmapIframe=document.querySelector('iframe')
const successCallback=(position)=>{
    const {latitude, longitude}= position.coords;
    facility=`${latitude},${longitude}`
    console.log(position);
    locationNotify.innerHTML=`
    <div class="location-tag" style='color:green;'>
        <p>${facility}</p>
    </div>
    `;
    gmapIframe.src=`https://maps.google.com/maps?q=${facility}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    setTimeout(()=>{
        locationNotify.innerHTML='';
    },5000);
}
const errorCallback=(error)=>{
    let message=''
    if(error.message.includes("denied")){
        message='Please, Turn on your device location to proceed'
    }else{
        message=`No internet`
    }
    locationNotify.innerHTML=`
    <div class="location-tag" style='color:red;'>
        <p>${message}</p>
    </div>
    `;
    setTimeout(()=>{
        locationNotify.innerHTML='';
    },7000)
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
     
