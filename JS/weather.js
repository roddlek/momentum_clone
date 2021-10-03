const API_KEY = "3bb426711d626dd0415e6c91d2b9e5dd";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
              .then((data) => {
                  const outside = document.querySelector('#weather span:first-child');
                  const city = document.querySelector('#weather span:last-child');
                  city.innerText = `${data.name} / ${data.main.temp}°`;
                  outside.innerText = data.weather[0].main;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);