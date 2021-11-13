let image = document.querySelector("img");
let totle_points = document.querySelectorAll("#totle_points");
let accumulateur = document.querySelectorAll("#accumulateur");
let icon_active = document.querySelectorAll(".name > i");
let nouveau = document.querySelector("#nouveau");
let pass = document.querySelector("#pass");
let lance = document.querySelector("#lance");
image.src="https://i.pinimg.com/736x/b1/3f/2d/b13f2ddf6fa570284a9b9e50cbebed5c.jpg";
let point_accumuler = 0;
let player1 ={
    id:0,
    totale_point: 0,
    point_accumuler:0,
}

let player2 ={
    id:1,
    totale_point: 0,
    point_accumuler:0,
}

let randome_number = Math.floor(Math.random()*6)+1;
let Obj = player1;

icon_active.forEach(element => {
    element.style.color = "crimson";
});
icon_active[Obj.id].style.color ="green";


lance.addEventListener("click",()=>{
    if(randome_number === 1){
        Obj.point_accumuler = 0;
        accumulateur[Obj.id].textContent = 0;
        totle_points[Obj.id].textContent = Obj.totale_point;
        if (Obj === player1)
            Obj=player2;
        else 
            Obj=player1;
    }
    else{
        image.src=`img/dice-${randome_number}_1.svg`;
        Obj.point_accumuler += randome_number;
        accumulateur[Obj.id].textContent = Obj.point_accumuler;
    }
    randome_number = Math.floor(Math.random()*6)+1;
    icon_active.forEach(element => {
        element.style.color = "crimson";
    });
    icon_active[Obj.id].style.color ="green";
    if (player1.totale_point >= 100){
        alert("The player 1 Win!!!");
    }
    if (player2.totale_point >= 100){
        alert("The player 2 Win!!!");
    }
})

pass.addEventListener("click",()=>{
    
    Obj.totale_point += Obj.point_accumuler;
    Obj.point_accumuler = 0;
    accumulateur[Obj.id].textContent = 0;
    totle_points[Obj.id].textContent = Obj.totale_point;
    if (Obj === player1)
        Obj=player2;
    else 
        Obj=player1;
        icon_active.forEach(element => {
            element.style.color = "crimson";
        });
        icon_active[Obj.id].style.color ="green";

})


nouveau.addEventListener("click",()=>{
    player1.totale_point =0;
    player1.point_accumuler =0;
    player2.totale_point =0;
    player2.point_accumuler =0;
    Obj=player1;
    totle_points[0].textContent =0;
    totle_points[1].textContent =0;
    accumulateur[0].textContent=0;
    accumulateur[1].textContent=0;
    image.src="https://i.pinimg.com/736x/b1/3f/2d/b13f2ddf6fa570284a9b9e50cbebed5c.jpg";
    (Obj.id==1) ? icon_active[1].style.color = "green" :  icon_active[0].style.color = "crimson";
    (Obj.id==0) ? icon_active[0].style.color = "green" :  icon_active[1].style.color = "crimson";
    icon_active.forEach(element => {
        element.style.color = "crimson";
    });
    icon_active[Obj.id].style.color ="green";
})
