let paragraphe = document.querySelector("p");
let button = document.querySelector("button");
let input = document.querySelector("input");
let h1 = document.querySelectorAll("h1");
let win = document.querySelector(".win");
let table_paragraphes = [
    "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense.",
    "Dragons don't exist they said. They are the stuff of legend and people's imagination. ",
    "He wondered if he should disclose the truth to his friends. It would be a risky move.",
    "My pincher collar is snapped on. Then comes the electric zapper collar. Finally, my purple at-home collar is taken off and I know I’m going for a walk to the dog park."];

let random_nbr = Math.floor(Math.random()*table_paragraphes.length);
paragraphe.textContent = table_paragraphes[random_nbr];

let Prog = {
    h:0,
    m:0,
    s:0,
    interval:null,
    isrun: false
}

input.addEventListener("keydown",()=>{
          
    if (input.value === table_paragraphes[random_nbr].substr(0,input.value.length))
    {
        input.style.border = "3px solid green";
    }
    else
    {
        input.style.border = "3px solid red";
    }

    if (Prog.isrun === false){
        chrono();  
        Prog.isrun=true;
    }

},true);

button.addEventListener("click",()=>{
    if (Prog.isrun === true){
        Prog.h=0;
        Prog.m=0;
        Prog.s=0;
        h1[0].textContent = "00 : ";
        h1[1].textContent = "00 : ";
        h1[2].textContent = "00 : ";
        input.value = null;
        Prog.isrun  = false;
        input.style.border = "3px solid gray";
        random_nbr = Math.floor(Math.random()*table_paragraphes.length);
        paragraphe.textContent = table_paragraphes[random_nbr];
        win.innerHTML = null;
        clearInterval(Prog.interval);
    }
});

function chrono(stop){
    Prog.interval = setInterval(() => {
        h1[0].textContent = Prog.h+" : ";
        h1[1].textContent = Prog.m+" : ";
        h1[2].textContent = Prog.s+" : ";
        Prog.s++;
        if (Prog.s == 60) {
            Prog.m++;
            Prog.s=0;
        }  
        if (Prog.m == 60) {
            Prog.m=0;
            Prog.h++;
        }
        if (input.value === table_paragraphes[random_nbr].substr(0,table_paragraphes[random_nbr].length))
        {
            clearInterval(Prog.interval);
            win.innerHTML = "Bravo le temps est "+Prog.h+" : "+Prog.m+" : "+Prog.s+" : ";
            

        }
    }, 1000);
}


