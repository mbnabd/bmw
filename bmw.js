
const history = document.querySelector(".history");
const namelogo = document.querySelector(".namelogo");
const production = document.querySelector(".production");
const Motorsport = document.querySelector(".Motorsport");
const historyicon = document.querySelector(".historyicon");
const namelogoicon = document.querySelector(".namelogoicon");
const productionicon = document.querySelector(".productionicon");
const motorsporticon = document.querySelector(".motorsporticon");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot2");
const dot4 = document.querySelector(".dot2");
let a=0;
history.addEventListener("click" , ()=>{
    if(a==0){
        history.style.height ="3600px";
        historyicon.style.rotate = "180deg";
        dot1.style.display = "none";
        a=1;
    }
    else if(a==1){
        history.style.height ="266px";
        historyicon.style.rotate = "0deg";
        dot1.style.display = "inline";


        a=0;
    }

})
let b=0;
namelogo.addEventListener("click" , ()=>{
    if(b==0){
        namelogo.style.height ="2100px";
        namelogoicon.style.rotate = "180deg";
        dot2.style.display = "none";


        b=1;
    }
    else if(b==1){
        namelogo.style.height ="266px";
        namelogoicon.style.rotate = "0deg";
        dot2.style.display = "inline";


        b=0;
    }

})
let c=0;
production.addEventListener("click" , ()=>{
    if(c==0){
        production.style.height ="1100px";
        productionicon.style.rotate = "180deg";
        dot3.style.display = "none";


        c=1;
    }
    else if(c==1){
        production.style.height ="266px";
        productionicon.style.rotate = "0deg";
        dot3.style.display = "inline";
        c=0;


    }

})
Motorsport.addEventListener("click" , ()=>{
    if(c==0){
        Motorsport.style.height ="2345px";
        motorsporticon.style.rotate = "180deg";
        dot4.style.display = "none";


        c=1;
    }
    else if(c==1){
        Motorsport.style.height ="60px";
        motorsporticon.style.rotate = "0deg";
        dot4.style.display = "inline";
        
        c=0;

    }

})




const login =document.querySelector(".login");
function main(){
    if(localStorage.length !=0){
        login.textContent = JSON.parse(localStorage.getItem("Tasks"))[0].first + " " + JSON.parse(localStorage.getItem("Tasks"))[0].last;
    }
}
document.addEventListener("DOMContentLoaded" , main);



window.addEventListener('scroll', function() {
    const B2 = document.querySelector('#B2');
    const M2 = document.querySelector('#M2');
    const W2 = document.querySelector('#W2');
    const change = document.querySelector('.change');
    const div = document.querySelector('.div');


    const imagePosition = B2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2.5; // تنظیم موقعیت نمایش
    if (imagePosition < screenPosition) {
        B2.classList.add('visible1');
        M2.classList.add('visible2');
        W2.classList.add('visible3');
        change.classList.add("change2")
        div.classList.add("divchang")
    }
});
