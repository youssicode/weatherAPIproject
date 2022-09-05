const port = 8200
const fetch = require('node-fetch')
const express = require("express")
const app = express()
app.use(express.static(__dirname))
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, function() {
    console.log("Weather Project Server running on port: " + port)
 })

 app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html") 
})


let cityName
let unitName
let APIdata
app.post("/", function(req, res) {
    cityName = req.body.city
    unitName = req.body.unit
    let APIid = "8e1dc44f8ada95b32eff21edbf5f5071"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unitName}&appid=${APIid}`
    fetch(url)
    .then(response => response.text())
    .then(data => {
        APIdata = JSON.parse(data)
    })
})

app.get("/result", function (req, res) {
    res.send(APIdata)
})



    
// const axios = require("axios")
//     //! using 'Axios' module
//     // axios
//     // .get("https://api.openweathermap.org/data/2.5/weather?q=rabat&units=metric&appid=8e1dc44f8ada95b32eff21edbf5f5071")
//     // .then(res => console.log(res))
//     // .then(text => {
//     //     text = JSON.parse(text)
//     //     resultCity = text.name
//     //     resultTemperature = text.main.temp
//     // })
    





