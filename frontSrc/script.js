const cityHolder = document.querySelector(".city-holder")
const tempHolder = document.querySelector(".temp-holder")
const descHolder = document.querySelector(".desc-holder")
const iconHolder = document.querySelector(".icon-holder")
const btn = document.querySelector(".go")

const myForm = document.getElementsByTagName("form")

// btn.onclick = function () {
myForm[0].onsubmit = function () {
    const url = "http://localhost:3000/result"
    fetch(url)
    .then(response => {
        if (response.ok) { // if (response.status == 200)
            response.text().then(result => {
                let jased = JSON.parse(result)
                cityHolder.innerText = jased.name
                tempHolder.innerText = jased.main.temp
                descHolder.innerText = jased.weather[0].description
                iconHolder.setAttribute("src", `http://openweathermap.org/img/wn/${jased.weather[0].icon}@2x.png`)
            })
        }
    })
    
        
}