import { WeatherAPI } from "./weatherapi.js";
import { WeatherUtils } from "./weatherutils.js";
class WeatherApp {

    init(){
  
      this.addListener()
  
    }
  
    addListener(){

      const searchTextField = document.querySelector(".search-box");
  
      searchTextField.addEventListener("keypress", (event) => {
  
        const keyCode = event.keyCode;
        
        if (keyCode == 13){
  
          // ENTER
  
          const userInput = event.target.value;
  
          const weatherAPIObj = new WeatherAPI();
          weatherAPIObj.invokeURL(userInput)
            .then( (responseJSON) => {
  
              const responseObj = new WeatherUtils().convertJSON(responseJSON);
  
              // Location Element
              const locationElement = document.querySelector(".location .city")
              locationElement.innerText = responseObj.Location_Place; 
  
              // Date Element
              const dateElement = document.querySelector(".location .date")
              dateElement.innerText = responseObj.TodayDate; 
  
              // Temperature Element
              const temperatureElement = document.querySelector(".current .temp")
              temperatureElement.innerText = responseObj.Temperature; 
  
              // TemperatureType Element
              const temperatureTypeElement = document.querySelector(".current .weather")
              temperatureTypeElement.innerText = responseObj.TemperatureType; 
  
  
              // TemperatureType Element
              const lowHighTempElement = document.querySelector(".current .hi-low")
              lowHighTempElement.innerText = `${responseObj.LowTemperature} / ${responseObj.HighTemperature}` 
            })
            }
            }); 
          }
        }
          
export {WeatherApp}