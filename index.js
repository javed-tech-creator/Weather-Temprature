const apiKey = "8b718b4d2935b7625fe3a17cf8ced283";


//Your Provided Openweather key

function getWeather(){
    const city=document.getElementById("cityInput").value;
    const weatherDetails=document.getElementById("WeatherDetails");
    if(city===""){
        weatherDetails.innerHTML="<p>Please enter a city</p>";
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        if(data.cod==="404"){
            weatherDetails.innerHTML="<p>City Not Found</p>";
        }
    else{
        weatherDetails.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
        <h3>Temprature:${data.main.temp}</h3>`
    }
    })
    .catch((error)=>{
        weatherDetails.innerHTML="<p>Error</p>";
    });
    }
