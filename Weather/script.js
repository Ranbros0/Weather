const apiKey = 'e5de77b142a9c1f4078fe968f4e39f9f';  // Вставте ваш API-ключ OpenWeatherMap

function getWeather() {
    const city = document.getElementById('Kiev').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

    // Створення AJAX-запиту
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Місто не знайдено');
            return response.json();
        })
        .then(data => {
            // Витягуємо потрібні дані
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const weatherDescription = data.weather[0].description;

            // Відображення результату
            document.getElementById('weather-result').innerHTML = `
                <h3>Погода у ${city}</h3>
                <p>Температура: ${temperature}°C</p>
                <p>Вологість: ${humidity}%</p>
                <p>Швидкість вітру: ${windSpeed} м/с</p>
                <p>Опис: ${weatherDescription}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p>${error.message}</p>`;
        });
}
