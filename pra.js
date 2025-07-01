function fetchWeather() { 
    return new Promise((resolve) => { 
    setTimeout(() => resolve("Weather Data Received"), 2000); 
    }); 
    } 
    fetchWeather().then((data) => console.log(data));
    
    async function getUser() { 
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1"); 
        let user = await response.json(); 
        console.log(`User: ${user.name}, Email: ${user.email}`); 
        } 
        getUser();

        function getUser() { 
            return fetch("https://jsonplaceholder.typicode.com/users/1") 
            .then(response => response.json()) 
            .then(user => console.log(user.name)); 
            } 
            getUser(); 
    

    async function getWeather(city) { 
        try { 
        let response = await 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YO
         UR_API_KEY&units=metric`); 
        let data = await response.json(); 
        console.log(`Weather in ${city}: ${data.weather[0].description}, Temp: 
        ${data.main.temp}°C`); 
        } catch (error) { 
        console.log("Error fetching weather data!"); 
        } 
        } 
        getWeather("New York");