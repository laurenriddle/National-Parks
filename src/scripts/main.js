const parks = () => fetch("http://localhost:8088/parks")
    .then(result => result.json())
    .then(parsedParks => {
        parsedParks.forEach(parks => {
            console.log(buildParkHtml(parks))
            const parksContainer = document.querySelector("#container")
            parksContainer.innerHTML += buildParkHtml(parks)
        })
    })

parks()

const buildParkHtml = (parks) => `
  <article>
  <h3>${parks.name}</h3>
  <p>${parks.state}</p>
</article>
`



