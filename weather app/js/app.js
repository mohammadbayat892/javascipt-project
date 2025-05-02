const apiKey = "36b9b98399f8df9aeb46a8fd7a7a8988"; 
const searchButton = document.getElementById("search");
const cityInput = document.getElementById("city");
const loader = document.getElementById("loader");
const weatherInfo = document.getElementById("weather-info");

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (!city) return alert("Please enter a city name!");

    loader.style.display = "block";
    weatherInfo.classList.add("hidden");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            loader.style.display = "none";

            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }

            document.getElementById("city-name").textContent = data.name;
            document.getElementById("temperature").textContent = `${data.main.temp}°C`;
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("humidity").textContent = `${data.main.humidity}%`;
            document.getElementById("wind-speed").textContent = `${data.wind.speed} km/h`;
            document.getElementById("icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            weatherInfo.classList.remove("hidden");
        })
        .catch(() => {
            loader.style.display = "none";
            alert("An error occurred. Please try again.");
        });
});
