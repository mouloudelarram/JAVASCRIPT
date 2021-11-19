let hour = document.querySelector("#houre");
let min = document.querySelector("#minute");
let sec = document.querySelector("#seconde");
let btn = document.querySelector("button");
let isRun = false;

let nbrS= {s:0};
let v;
btn.innerHTML = "Start";
btn.style.backgroundColor = "red";
btn.addEventListener("click",()=>{
    if (isRun == false)
    {
        
        btn.innerHTML = "Stop";
        btn.style.backgroundColor = "green";        
        isRun = true;
        v = setInterval(() => {
        sec.setAttribute("transform",`rotate(${nbrS.s*6})`)
        min.setAttribute("transform",`rotate(${nbrS.s})`)
        hour.setAttribute("transform",`rotate(${nbrS.s*0.1})`)
        nbrS.s++; 
    }, 1000);
    }
    else
    {
        btn.innerHTML = "Start";
        btn.style.backgroundColor = "red";
        isRun = false;
        clearInterval(v);
    }
    
    btn.addEventListener("dblclick",()=>{
        
        setTimeout(() => {
            btn.innerHTML = "Start";
            btn.style.backgroundColor = "red";
        }, 1000);
        
        btn.innerHTML = "reset";
        btn.style.backgroundColor = "orange";
        isRun = false;
        clearInterval(v);
        nbrS.s=0;
        sec.setAttribute("transform",`rotate(${nbrS.s*6})`)
        min.setAttribute("transform",`rotate(${nbrS.s})`)
        hour.setAttribute("transform",`rotate(${nbrS.s*0.1})`)
    },true);
    

},true);
