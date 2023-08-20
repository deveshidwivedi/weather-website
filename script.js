let weather={
    "apiKey":"b51e0b4ce9d510d6ef2f5d71acd8028b",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
  displayWeather: function(data){
        const {name}= data;
        const{icon, description}= data.weather[0];
        const{temp, humidity}= data.main;
        const{speed}= data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector("#city").innerHTML
    }
};
