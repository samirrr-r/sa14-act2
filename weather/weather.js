console.log("script runs")
document.addEventListener("submit", async () => {
    try{
    const city = document.getElementById("city")
    const body = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a10657fc8b534e6e950222818242603&q=${city.value}&days=5&aqi=yes&alerts=no`).then((response) => response.json())
    const form = document.getElementsByTagName("form")[0]
    const pElement = document.createElement("p")
    const imgElement = document.createElement("img")
    pElement.innerText = `Location: ${body.location.name} \n Time: ${body.location.localtime} \n Current Temperature: ${body.current.temp_f}\n
    Humidity: ${body.current.humidity}\n Day 1 ${body.forecast.forecastday[0].day.avgtemp_f}\n Day 2 ${body.forecast.forecastday[1].day.avgtemp_f}
    Day 3 ${body.forecast.forecastday[2].day.avgtemp_f}\n Day 4 ${body.forecast.forecastday[3].day.avgtemp_f}\n Day 5 ${body.forecast.forecastday[4].day.avgtemp_f}`
   
    imgElement.src = body.current.condition.icon
    form.insertAdjacentElement("afterend", pElement)
    form.insertAdjacentElement("afterend", imgElement)
    } catch(err)
    {
        console.error("Error fetching data from source", err)
    }

})
