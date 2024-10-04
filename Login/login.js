
const logBTN = document.querySelector(".logBTN");
const arrow = document.querySelector(".arrow");
const emnameinp = document.querySelector(".emnameinp");
const lanmeinp = document.querySelector(".lanmeinp");
const fnameinp = document.querySelector(".fnameinp");
const error = document.querySelector(".error");
const body2 = document.querySelector(".body2");
const first = document.querySelector(".first");
const last = document.querySelector(".last");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const title = document.querySelector(".title");
const secondbody = document.querySelector(".secondbody");
const logBTN2 = document.querySelector(".logBTN2");
const user = document.querySelector(".user");
const user_uemail = document.querySelector(".uemail");

function main(){
    if(localStorage.length != 0){
        setlocal();
    }
}
document.addEventListener("DOMContentLoaded" , main);



body2.addEventListener("submit" , (e)=>{
    e.preventDefault();
    arrow.classList.add("in");
    logBTN.style.backgroundColor = "#ffffff4e";

    addlocal();

})



function addlocal(){
    const first = fnameinp.value.trim();
    const last = lanmeinp.value.trim();
    const email = emnameinp.value.trim();
    const Tasks= !localStorage.getItem("Tasks")?[]:JSON.parse(localStorage.getItem("Tasks"));
    const currectTask={
        first :first ,
        last :last , 
        email : email,
    };
    Tasks.push(currectTask);
    localStorage.setItem("Tasks",JSON.stringify(Tasks));
    setTimeout(function (){
        setlocal();
    },1000);
}



function setlocal(){
    first.style.display = "none";
    last.style.display = "none";
    email.style.display = "none";
    logBTN.style.display = "none";
    title.style.display = "none";
    secondbody.style.display = "inline" 
    user.textContent = JSON.parse(localStorage.getItem("Tasks"))[0].first + " " + JSON.parse(localStorage.getItem("Tasks"))[0].last;
    user_uemail.textContent = JSON.parse(localStorage.getItem("Tasks"))[0].email;  

    
    logBTN2.addEventListener("click" , (e)=>{
        e.preventDefault();
        location.reload();
        localStorage.removeItem("Tasks");
        reset();
    })

    

}


function reset(){
    first.style.display = "flex";
    last.style.display = "flex";
    email.style.display = "flex";
    logBTN.style.display = "flex";
    title.style.display = "inline";
    secondbody.style.display = "none" ;
}





