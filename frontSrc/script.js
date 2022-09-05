const cityHolder = document.querySelector(".city-holder")
const tempHolder = document.querySelector(".temp-holder")
const descHolder = document.querySelector(".desc-holder")
const myForm = document.getElementsByTagName("form")

myForm[0].onsubmit = function () {
    const url = "http://localhost:8200/result"
    fetch(url)
    .then(response => response.text())
    .then(result => {
        result = JSON.parse(result)
        cityHolder.innerText = result.name
        tempHolder.innerText = result.main.temp
        descHolder.innerText = result.weather[0].description
    })
        
}