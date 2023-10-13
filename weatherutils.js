
class WeatherUtils{
     convertJSON(ResponseJSON) {
        const weatherDetails={
            Location_Place: `${ResponseJSON.name} , ${ResponseJSON.sys.country}`,
            TodayDate: WeatherUtils.getDate(),
            Temperature:ResponseJSON.main.temp,
            TemperatureType:ResponseJSON.weather[0].main,
            LowTemperature:ResponseJSON.main.temp_min,
            HighTemperature:ResponseJSON.main.temp_max
        }      
        return weatherDetails;
    }
    static getDate(){
        const date = new Date()
        return date.toLocaleDateString("us-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
          })
        }
    }

export {WeatherUtils};