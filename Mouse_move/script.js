let html = document.querySelector("html");
let mouse = document.querySelector("#mouse");

html.addEventListener("mousemove",(e)=>{
    mouse.style.display = "block";
    mouse.style.marginLeft = e.clientX - 30+"px";
    mouse.style.marginTop = e.clientY-25+"px";
    console.log(e.clientX)
});

html.addEventListener("mouseleave",(e)=>{
    mouse.style.display = "none";
});