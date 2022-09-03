const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})


app.listen(3000, function () {
   console.log("Weather Project Server running on port 3000.")
})