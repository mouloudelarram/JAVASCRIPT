const makeArt = document.querySelector(".body_app");
const input = document.querySelectorAll("input");
const button = document.querySelectorAll("button");
let td;
button[0].addEventListener("click",()=>{
    let makeArt_inner="";
    if (innerWidth < 400) {
        input[1].value = 60;
        input[0].value = 40;
    }
    for (let i=0; i<input[1].value; i++){
        makeArt_inner+="<tr>";
        for (let j=0; j<input[0].value; j++){
            makeArt_inner += `<td style="padding: ${window.innerWidth/100}px"></td>`;
        }
        makeArt_inner += "</tr>";
    }
    makeArt.innerHTML = makeArt_inner;
    let mouseDown = false;
    td = document.querySelectorAll("td");
    td.forEach((e)=>{
        e.addEventListener("mousedown",(element)=>{
            mouseDown = true;
            element.target.style.backgroundColor = input[2].value;
        });
        e.addEventListener("mouseup",()=>{
            mouseDown = false
        });
        makeArt.addEventListener("mouseleave",()=>{
            mouseDown = false
        });
        e.addEventListener("mouseover",(element)=>{
            if (mouseDown)
                element.target.style.backgroundColor = input[2].value;
        });
        e.addEventListener("dblclick",(element)=>{
            element.target.style.backgroundColor = "#fff";
        })
    })
});

button[1].addEventListener("click",()=>{
    td.forEach(element => {
        element.style.backgroundColor = "#fff"
    });
})

