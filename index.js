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
console.log(apiKey);

app.get("/", async (req, res) =>{
    const city = "London";
    const WEA_URL = `${WEA_API_URL}/forecast?q=${city}&units=metric&appid=${apiKey}`
    try {
        const result = await axios.get(WEA_URL);
        console.log(result.data.list[0]);
    } catch (error) {
        console.log(error);
    }
}) 


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})
