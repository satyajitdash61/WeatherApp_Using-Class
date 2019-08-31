// Array Declaration


const arr = [{ city: "Bengaluru", state: "Karnataka", temp: 30, sky: "Cloudy" },
{ city: "Bhubaneswar", state: "Odisha", temp: 40, sky: "Sunny" },
{ city: "Kolkata", state: "West bengal", temp: 35, sky: "Cloudy" },
{ city: "Pune", state: "Maharastra", temp: 35, sky: "Sunny" },
];

// global variables

let city = '';
let op = '';
let data = {};
let temperature = '';
let temperatureC = '';

// calling onChange function


function setCity() {
    city = document.getElementById("drop").value;

// filtering city

    op = arr.filter((a) => a.city === city);

    // in key value pair

    data = {
        state: op[0].state,
        sky: op[0].sky,
        temp: op[0].temp,
    }
    // craeting object of WeatherReport

    let report = new WeatherReport(data);
    temperatureC = report.getTemp();
    temperature = report.getTemp();
    // console.log(report.getState(),report.getTemp(),report.getSky());
    document.getElementById("p_one").innerHTML = city + ", " + report.getState();
    document.getElementById("p_seven").innerHTML = report.getTemp();
    document.getElementById("p_six").innerHTML = report.getSky();

    if(data.sky=="Sunny"){
        document.getElementById("myImg").className='fas fa-sun';
    }else{
        document.getElementById("myImg").className='fas fa-cloud';
    }

}
// accessing system information

let currentdate = new Date();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("p_two").innerHTML=days[currentdate.getDay()]
if(currentdate.getHours()<=12){
   document.getElementById("p_four").innerHTML=currentdate.getHours();
}   
else{
    document.getElementById("p_four").innerHTML=((currentdate.getHours())%12);
}
document.getElementById("p_twelve").innerHTML=": "+currentdate.getMinutes();

if(currentdate.getHours()<=12){
    document.getElementById("p_five").innerHTML='am';
}
else{
    document.getElementById("p_five").innerHTML='pm';

}

function f(){
    let fa=((temperatureC*(9/5))+32);
    document.getElementById("p_seven").innerHTML=fa;
}
function c(){
    document.getElementById("p_seven").innerHTML=temperature;
}



