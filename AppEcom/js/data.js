let products=[
    {
        id:0,
        name: "hp elitebook",
        price: 8120,
        qtt:0,
        path: "imgs/1.png"
    },
    {
        id:1,
        name: "Thinkpad X1",
        price: 10110,
        qtt:0,
        path: "imgs/2.png"
    },
    {
        id:2,
        name: "Macbook pro",
        price: 17219,
        qtt:0,
        path: "imgs/3.png"
    },
    {
        id:3,
        name: "Thinkpad x280",
        price: 8120,
        qtt:0,
        path: "imgs/4.png"
    },
    {
        id:4,
        name: "hp elitebook",
        price: 8120,
        qtt:0,
        path: "imgs/5.png"
    }
    ,
    {
        id:5,
        name: "Thinkpad x280",
        price: 8120,
        qtt:0,
        path: "imgs/6.png"
    },
    {
        id:6,
        name: "hp elitebook",
        price: 8120,
        qtt:0,
        path: "imgs/7.png"
    },
    {
        id:7,
        name: "hp elitebook",
        price: 8120,
        qtt:0,
        path: "imgs/8.png"
    },
    {
        id:8,
        name: "Thinkpad x1 youga",
        price: 12200,
        qtt:0,
        path: "imgs/9.png"
    },
    {
        id:9,
        name: "Azus Y142",
        price: 8120,
        qtt:0,
        path: "imgs/10.png"
    },
    {
        id:10,
        name: "hp elitebook",
        price: 8120,
        qtt:0,
        path: "imgs/5.png"
    }
    ,
    {
        id:11,
        name: "Thinkpad x280",
        price: 8120,
        qtt:0,
        path: "imgs/6.png"
    },
    {
        id:12,
        name: "hp elitebook",
        price: 8120,
        qtt:0,
        path: "imgs/7.png"
    },
    {
        id:13,
        name: "hp elitebook",
        price: 8120,
        qtt:0,
        path: "imgs/8.png"
    },
    {
        id:14,
        name: "Thinkpad x1 youga",
        price: 12200,
        qtt:0,
        path: "imgs/9.png"
    },
    {
        id:15,
        name: "Azus Y142",
        price: 8120,
        qtt:0,
        path: "imgs/10.png"
    }
]


//width Ajax.
let reqs = new XMLHttpRequest()

reqs.open("GET","http://este.ovh:8080/prods");

reqs.onreadystatechange = function(){
    if (reqs.readyState == 4 && reqs.status == 200){
        products = JSON.parse(reqs.response);
    }
}

reqs.send();