import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import userData from "./userData.json" assert { type: 'json' };

const app = express();
const port = 3000;
const GEO_API_URL = "http://api.openweathermap.org/geo/1.0";
const WEA_API_URL = "https://api.openweathermap.org/data/3.0";
const apiKey = userData.apiKey;


app.use(express.static("public"));
console.log(apiKey);

/*
app.get("/", async (req, res) =>{
    const city = "London";
    const GEO_URL = `${GEO_API_URL}/direct?q=${city}&appid=${apiKey}`
    try {
        const result = await
    }
}) */


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})
