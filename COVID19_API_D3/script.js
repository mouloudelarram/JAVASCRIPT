const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        datasets: [{
            label: 'COVID 19 ',
            data: [null, null, null, null, null, 20,2,null,null,null, 20, 2, null, null, null,null,20,2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            },
            {
                label: ' API ',
                data: [null, null, null, null, null, 10,10,10,10,10, 10, 10, null,null, null,null,null,null],
                backgroundColor: "black",
                borderColor: "black",
                borderWidth: 1
            }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


//api covid19
let countries;
let info_county;
let MyRequet = new XMLHttpRequest();

//get my liste & same tags
let ul = document.querySelector("ul");
let h1 = document.querySelector("#content > h1");
//config
MyRequet.open("GET","https://api.covid19api.com/countries");

MyRequet.onreadystatechange = function(){
    if (MyRequet.readyState == 4 && MyRequet.status == 200){
        countries = JSON.parse(MyRequet.response);
        countries = countries.sort((a,b)=>a.Country>b.Country?1:-1);
        countries.forEach((e)=>{
            let li = document.createElement("li");
            li.setAttribute("id",e.ISO2);
            let txt = document.createTextNode(e.Country);
            li.appendChild(txt);
            li.addEventListener("click",SendSousRequest);  
            ul.appendChild(li);   
        })
    }
};

MyRequet.send();



function SendSousRequest(e){
    console.log(e.target.id);

    let sousResquest = new XMLHttpRequest();
    sousResquest.open("GET",`https://api.covid19api.com/country/${e.target.id}`);

    sousResquest.onreadystatechange = function (){
        if (sousResquest.readyState == 4 && sousResquest.status == 200){

            info_county = JSON.parse(sousResquest.response);
            
            if (info_county.length == 0) 
            {
                h1.textContent = "Data Not Available";
                h1.style.display = "block";
                h1.style.color = "red";
            }
            else {
                h1.style.display = "none";
                
                console.log(info_county.length);

                myChart.data.labels = info_county.map((e)=>{
                    let D = new Date(e.Date);
                    return `${D.getDay()+1}-${D.getMonth()+1}`;
                });
                let datasets = [
                    {
                        label: 'Active',
                        data: info_county.map((e)=>e.Active),
                        backgroundColor: "red",
                        borderColor: "red",
                        borderWidth: 1
                    },
                    {
                        label: 'Confirmed',
                        data: info_county.map((e)=>e.Confirmed),
                        backgroundColor: "blue",
                        borderColor: "blue",
                        borderWidth: 1
                    },
                    {
                        label: 'Deaths',
                        data: info_county.map((e)=>e.Deaths),
                        backgroundColor: "black",
                        borderColor: "black",
                        borderWidth: 1
                    },
                    {
                        label: 'Recovered',
                        data: info_county.map((e)=>e.Recovered),
                        backgroundColor: "green",
                        borderColor: "green",
                        borderWidth: 1
                    }
                ];
                //update my charte;
                myChart.data.datasets = datasets;
                myChart.update();
            };
        };
    };
    sousResquest.send();
};

