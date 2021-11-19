let element = document.querySelectorAll(".main > div");

element.forEach(e => {
    e.style.backgroundImage = `url('https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1920/1080')`;
    e.addEventListener("click",()=>{
        element.forEach(e1=>{
            e1.classList.remove("style2");
        })
        e.classList.add("style2");
    })
});
