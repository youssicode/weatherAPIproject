const apiKeys = require("./apiKeys")

const fetch = require('node-fetch')
const express = require("express")
const app = express()
app.use(express.static(__dirname))
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3000
app.listen(port, function () {
    console.log("Weather Project Server running on port: " + port)
})

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})


let cityName
let unitName
let APIdata
let newData
app.post("/result", function (req, res) {
    newData = true
    cityName = req.body.city
    unitName = req.body.unit
    let weather_api_key = apiKeys.weather_api_key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unitName}&appid=${weather_api_key}`
    fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.text()
            } else {
                console.log(Error("Data Not Ready Yet"))
            }
        })
        .then(data => {
            APIdata = JSON.parse(data)
        })
})

app.get("/result", function (req, res) {
    async function send() {
        if (APIdata && newData) {
            await res.json(APIdata)
            newData = false
            APIdata = ''
        } else {
            setTimeout(() => {
                send()
            }, 500);
        }
    }
    send().catch(reason => {
        throw new Error("Data delevery failed: " + reason)
    })
})

// const axios = require("axios")
//     //! using 'Axios' module
//     // axios
//     // .get("https://api.openweathermap.org/data/2.5/weather?q=rabat&units=metric&appid=${weather_api_key}")
//     // .then(res => console.log(res))
//     // .then(text => {
//     //     text = JSON.parse(text)
//     //     resultCity = text.name
//     //     resultTemperature = text.main.temp
//     // })






