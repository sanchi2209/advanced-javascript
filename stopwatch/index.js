let second=0;
let minute=0;
let hour=0;

let startbtn=document.getElementById("start");
let pausebtn=document.getElementById("pause");
let stopbtn=document.getElementById("stop");

let spansecond=document.getElementById("second");
let spanminute=document.getElementById("minute");
let spanhour=document.getElementById("hour");

startbtn.disabled=false;
pausebtn.disabled=true;
stopbtn.disabled=true;

let  stopInterval
function start(){
    startbtn.disabled=true;
    pausebtn.disabled=false;
    stopbtn.disabled=false;
  stopInterval= setInterval(()=>{
    second++;
    if(second<10){
        spansecond.innerHTML='0'+second;
    }
    else{
        spansecond.innerHTML=second;
    }
    if(second>59){
        spansecond.innerHTML="00"
        minute++
    if(minute<10){
        spanminute.innerHTML='0'+minute;
    }
    else{
        spanminute.innerHTML=minute;
    }
    if(minute>59){
        spanminute.innerHTML="00"
        minute=0;
        hour++
    if(hour<10){
        spanhour.innerHTML='0'+hour;
    }
    else{
        spanhour.innerHTML=hour;
    }
}
    
   }
   },1000)
    
}

function pause(){
    if(pausebtn.innerHTML=="pause"){
        pausebtn.innerHTML="continue";
        clearInterval(stopInterval);
    }
    else{
        pausebtn.innerHTML="pause";
        start();
    }
}

function stop(){
    spanhour.innerHTML="00"
    spansecond.innerHTML="00"
    spanminute.innerHTML="00"
 second=0;
 minute=0;
hour=0;
clearInterval(stopInterval);
}
