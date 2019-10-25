const buildParkHtml = (parks, forecast) => `
  <article class="${parksClass}">
  <h3>${parks.name}</h3>
  <p>${parks.state}</p>
  <p>Weather:</p>
    <ul>
    <li>${forecast.currently.summary}</li>
    <li>${forecast.hourly.summary}</li>
    <li>${forecast.daily.summary}</li>
    </ul>
</article>
`
let parksClass = ""

const parks = () => fetch("http://localhost:8088/parks")
    .then(result => result.json())
    .then(parsedParks => {
        parsedParks.forEach(parks => {
            let latitude = parks.latitude
            let longitude = parks.longitude
            const forecast = () => fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/642798d103ac0b1a688bf764f0d47d16/${latitude},${longitude}`)
            forecast()
            .then(response => console.log(response.json()))
            .then(parks => {
                if (parks.visited === true) {
                    parksClass = "green"
                } else {
                    parksClass = "red"
                }
                const parksContainer = document.querySelector("#container")
                parksContainer.innerHTML += buildParkHtml(parks, forecast)
            }
            )
        }
        )
    })
    
parks()
// fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/642798d103ac0b1a688bf764f0d47d16/37.8267,-123.4233`)
//     .then(response => console.log(response.json()))