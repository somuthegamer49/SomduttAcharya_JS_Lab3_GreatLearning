import { WeatherUtils } from "./weatherutils.js";
import { WeatherAPI } from "./weatherapi.js";

async function convertJSONtest(){
    let weather_details = new WeatherUtils();
    let api = new WeatherAPI();
    let invoked = await api.invokeURL();
    let data = weather_details.convertJSON(invoked);
    console.log(data);
}
convertJSONtest();