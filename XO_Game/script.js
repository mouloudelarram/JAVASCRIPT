let Game = new Array(9);

let player1 = {
    label: "Player 1",
    name: 'X',
    id: 0,
    color: "red"
};

let player2 = {
    label: "Player 2",
    name: 'O',
    id: 1,
    color: "green"
};

let Obj= player1;
let indice = 0;

let cases = document.querySelectorAll(".XO > div > div");
let icon = document.querySelectorAll("i");
icon[0].style.color = "green";
cases.forEach((e) => {
    e.addEventListener("click",()=>{
        if (e.innerHTML === ""){
            e.style.backgroundColor = Obj.color;
            e.innerHTML = Obj.name;
            Game[e.id] = Obj.id;
            indice++;
            if (IsWin(Game) === true) alert(Obj.label+"win") ;
            else if (indice>8) alert("NO BADY WIN");
            Obj = SwitchPlayer(Obj);
            if (Obj == player1) icon[0].style.color = "green";
            else icon[0].style.color = "red";
            if (Obj == player2) icon[1].style.color = "green";
            else icon[1].style.color = "red";
        }    
    })
});


function SwitchPlayer(Obj){
    if (Obj === player1)
        return player2
    else 
        return player1;
}

function IsWin(Game){
    if ((Game[0] == Game[1] && Game[1] == Game[2] && Game[1] != undefined) ||
        (Game[3] == Game[4] && Game[4] == Game[5] && Game[4] != undefined) ||
        (Game[6] == Game[7] && Game[7] == Game[8] && Game[7] != undefined) ||
        (Game[0] == Game[3] && Game[3] == Game[6] && Game[3] != undefined) ||
        (Game[1] == Game[4] && Game[4] == Game[7] && Game[4] != undefined) ||
        (Game[2] == Game[5] && Game[5] == Game[8] && Game[5] != undefined) ||
        (Game[0] == Game[4] && Game[4] == Game[8] && Game[4] != undefined) ||
        (Game[2] == Game[4] && Game[4] == Game[6] && Game[4] != undefined) )
        return true;
    else
        return false;
}

