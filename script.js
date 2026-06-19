const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

const apiKey = "796afdaa4aa7c2a8c6f2ab1a50b39cd6";

searchBtn.addEventListener("click", async () => {

    const city = cityInput.value.trim();

    if(city === ""){
        weatherResult.innerHTML = "Please enter a city.";
        return;
    }

    try{

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        console.log(data);

        if(data.cod != 200){
          weatherResult.innerHTML = data.message;
          return;
        }

        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <h3>${data.main.temp}°C</h3>
            <p>${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>wind speed: ${data.wind.speed} m/s</p>
        `;

    }catch(error){

        weatherResult.innerHTML = "Something went wrong.";

    }

});
