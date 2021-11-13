let countries;  //table of counties (objects)
let info_county;    //one objet county

//selectors
let select = document.querySelector("select");
let inputDay = document.querySelector("input");
let tableRowsData = document.querySelector("#data");
let button = document.querySelector("button");
//ajax instruction first request
let MyRequest = new XMLHttpRequest();

MyRequest.open("GET","https://api.covid19api.com/countries");

MyRequest.onreadystatechange = function(){
    if (MyRequest.readyState == 4 && MyRequest.status == 200){
        countries = JSON.parse(MyRequest.response);
        countries.forEach(e =>{
            let option = document.createElement("option");
            option.setAttribute("value",e.ISO2);
            let text = document.createTextNode(e.Country);
            option.appendChild(text);
            select.appendChild(option);
        })
    }
}

MyRequest.send();

//if user select an option:

select.addEventListener("change",(e)=>{
    console.log(e.target.value);

    //ajax instruction second request
    button.addEventListener("click",()=>{
    
    let sousRequest = new XMLHttpRequest();

    sousRequest.open("GET",`https://api.covid19api.com/country/${e.target.value}`);

    sousRequest.onreadystatechange = function(){
        if (sousRequest.readyState == 4 && sousRequest.status == 200){
            info_county = JSON.parse(sousRequest.response);
            
        if (info_county[inputDay.value].Province == ""){
            let row = document.createElement("tr");
            let idText = document.createTextNode(inputDay.value);
            let td = document.createElement("td");
            td.appendChild(idText);
            row.appendChild(td);
            let ConfirmedText = document.createTextNode(info_county[inputDay.value].Confirmed);
            td = document.createElement("td");
            td.appendChild(ConfirmedText);
            row.appendChild(td);
            let DeathsText = document.createTextNode(info_county[inputDay.value].Deaths);
            td = document.createElement("td");
            td.appendChild(DeathsText);
            row.appendChild(td);
            let RecoveredText = document.createTextNode(info_county[inputDay.value].Recovered);
            td = document.createElement("td");
            td.appendChild(RecoveredText);
            row.appendChild(td);
            let ActiveText = document.createTextNode(info_county[inputDay.value].Active);
            td = document.createElement("td");
            td.appendChild(ActiveText);
            row.appendChild(td);
            tableRowsData.appendChild(row);
        }
            

        }
    }
    sousRequest.send();
});

}) 