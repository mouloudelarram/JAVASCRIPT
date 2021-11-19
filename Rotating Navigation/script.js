let menuOpen = document.querySelector(".open")
let menuClose = document.querySelector(".close");


menuOpen.addEventListener("click",()=>{
    menuOpen.classList.add("openActive");
    menuClose.classList.remove("closeActive");
    document.querySelector(".contante").classList.add("contante1");
    
})

menuClose.addEventListener("click",()=>{
    menuOpen.classList.remove("openActive");
    menuClose.classList.add("closeActive");
    document.querySelector(".contante").classList.remove("contante1");
})