class createHour {
    constructor() {
        this.s = 0;
        this.m = 0;
        this.h = 0;
        this.ms=0;
        this.isRunning = false;
    }  
    start = function(){
        if (this.isRunning == false) 
        {
            this.isRunning = true;
            run();
        }
    }
    stop = function(){
        if (this.isRunning == true) 
        {
            clearInterval(interval);
            this.isRunning = false;
        }
    }
    reset = function() 
    {
        clearInterval(interval);
        this.isRunning = false;
        this.s = 0;
        this.m = 0;
        this.h = 0;
        this.ms=0;
        span[0].innerHTML = Chrono.h;
        span[1].innerHTML = Chrono.m;
        span[2].innerHTML = Chrono.s;
        span[3].innerHTML = Chrono.ms;
    }
}

let Chrono = new createHour();
let interval = 0;
let span = document.getElementsByTagName("span");

function run() {
    interval = setInterval(function() {
        /* console.log(Chrono.h,":",Chrono.m,":",Chrono.s); */
        span[0].innerHTML = Chrono.h;
        span[1].innerHTML = Chrono.m;
        span[2].innerHTML = Chrono.s;
        span[3].innerHTML = Chrono.ms;
        add(Chrono);
    } ,100); 
}

function add(heurProps) {
    if (heurProps.ms==10)
    {
        heurProps.ms=0;
        heurProps.s+=1;
    };
    if (heurProps.s==60)
    {
        heurProps.s=0;
        heurProps.m+=1;
    };
    if (heurProps.m==60)
    {
        heurProps.m=0;
        heurProps.h+=1;
    };
    heurProps.ms++;
}
 









 













