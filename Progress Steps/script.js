let steps = document.querySelectorAll(".step");
let liens = document.querySelectorAll(".lien");
let next = document.querySelector(".option_next");
let back = document.querySelector(".option_back");

let stepNumber = 1;

next.addEventListener("click",()=>{
    if(stepNumber < 4){
        back.classList.add("option_Active");
        liens[stepNumber-1].classList.add("lienActive");
        steps[stepNumber++].classList.add("stepAtive");
        if (stepNumber == 4){
            next.classList.remove("option_Active");
        }
    }
})

back.addEventListener("click",()=>{
    next.classList.add("option_Active");
    if(stepNumber > 1){
        steps[--stepNumber].classList.remove("stepAtive");
        liens[stepNumber-1].classList.remove("lienActive");  
        if (stepNumber == 1){
            back.classList.remove("option_Active");
        }
    }   
})
