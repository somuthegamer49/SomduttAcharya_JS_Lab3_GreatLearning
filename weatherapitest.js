import { WeatherAPI } from "./weatherapi.js";
function constructURLTest(){
    let api = new WeatherAPI();
    api.constructURL("Mumbai");
}
constructURLTest();

function invokeURLtest(){
    let api = new WeatherAPI();
    let data = api.invokeURL();
    console.log(data)
}
invokeURLtest();
