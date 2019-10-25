let parksClass= ""

const parks = () => fetch("http://localhost:8088/parks")
    .then(result => result.json())
    .then(parsedParks => {
        parsedParks.forEach(parks => {
            if (parks.visited === true) {
                parksClass = "green"
            } else {
                parksClass = "red"
            }
            const parksContainer = document.querySelector("#container")
            parksContainer.innerHTML += buildParkHtml(parks)
        })
    })

parks()

const buildParkHtml = (parks) => `
  <article class="${parksClass}">
  <h3>${parks.name}</h3>
  <p>${parks.state}</p>
</article>
`
