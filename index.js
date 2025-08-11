import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// get api key from external file
import userData from "./userData.json" assert { type: 'json' };

const app = express();
const port = 3000;
const WEA_API_URL = "https://api.openweathermap.org/data/2.5";

// get api key from file, change this to your own api key
const apiKey = userData.apiKeys[1];

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.render("index.ejs", {content: "Search for your city"});
});


app.post("/weather", async (req, res) =>{
    const city = req.body.city;
    const FOR_URL = `${WEA_API_URL}/forecast?q=${city}&units=metric&appid=${apiKey}`
    const WEA_URL = `${WEA_API_URL}/weather?q=${city}&units=metric&appid=${apiKey}`
    try {
        const forecastResult = await axios.get(FOR_URL);
        const weatherResult = await axios.get(WEA_URL);
        const [currWea, currTemp, currFeels, currIcon, place] = getCurrentInfo(weatherResult.data)
        console.log(currWea, currTemp, currFeels, currIcon, place)
        const forecasts = forecastResult.data.list;
        //const message = `${forecasts[0].weather[0].description} \n in ${result.data.city.name}, ${result.data.city.country}.`;
        //res.render("index.ejs", {content: message});
        //console.log(forecasts[0], forecasts[1]);
        console.log(weatherResult.data);
    } catch (error) {
        console.log(error);
    } 
}) 


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})


function getCurrentInfo(weatherData){
    const currWea = weatherData.weather[0].description;
    const currIcon = weatherData.weather[0].icon;
    const currTemp = weatherData.main.temp;
    const currFeels = weatherData.main.feels_like;
    const place = `${weatherData.name}, ${weatherData.sys.country}`;
    return [currWea, currTemp, currFeels, currIcon, place];
}
