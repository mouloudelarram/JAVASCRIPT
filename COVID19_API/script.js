let countries;      //table of counties (objects)
let info_county;    //one objet county

//selectors
let select = document.querySelector("select");
let inputDay = document.querySelector("input");
let tableRowsData = document.querySelectorAll("td");
let button = document.querySelector("button");
let countrySelect = document.querySelector(".Results > h1");

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
        countrySelect.textContent = e.target.value;

        let sousRequest = new XMLHttpRequest();

        sousRequest.open("GET",`https://api.covid19api.com/country/${e.target.value}`);

        sousRequest.onreadystatechange = function(){
            if (sousRequest.readyState == 4 && sousRequest.status == 200){
                info_county = JSON.parse(sousRequest.response);
                
                if (info_county[inputDay.value].Province == ""){
                    let infos=[inputDay.value,info_county[inputDay.value].Confirmed,info_county[inputDay.value].Deaths,info_county[inputDay.value].Recovered,info_county[inputDay.value].Active];

                    for(let i=0; i<5; i++)
                        tableRowsData[i].textContent=infos[i];
                }      
                else
                    for(let i=0; i<5; i++)
                        tableRowsData[i].textContent="not existe";
            }
            else
                for(let i=0; i<5; i++)
                    tableRowsData[i].textContent="not existe";
        }
        sousRequest.send();
    });
});