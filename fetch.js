const p = document.getElementById("p")
const states = document.getElementById("states")
const searchInput = document.getElementById("searchInput")


const countries = async () =>{
  
    const response = await fetch("https://restcountries.com/v2/all")
    const data = await response.json()
    return data
  }

const another = async () =>{
    const data = await countries()
    console.log(data)
    data.forEach((country, index)=>{
    
    let independence = country.independent === true ?  "independent state" : "dependent territory"
    let card = document.createElement("div")
    card.index = index
    card.classList.add("content")
    card.id = country.name
    card.innerHTML= `<img src="${country.flag}" width=100></img><br> <br> <b>${country.name}</b><br> <br>
    capital: ${country.capital}<br> <br>population: ${country.population} <br> <br> area: ${country.area}
    <br> <br>${independence}`
    let button = document.createElement("button")
    button.classList.add("deleteBtn")
    let deleteBtn = document.createElement("img")
    deleteBtn.setAttribute("src", "delete.png")
    button.append(deleteBtn)
    card.append(button)
    states.append(card)
    deleteBtn.addEventListener("click", (e)=>{
        let text = "You really don't like them that much?"
        confirm(text) == true ? deleteBtn.parentElement.parentElement.remove() : ""
        e.target.value = card.id === "Russian Federation" ? alert("We fully agree with You") : ""
    })

    searchInput.addEventListener("input", (e)=>{
        let value = e.target.value.toLowerCase()
        const isVisible = card.id.toLowerCase().includes(value)
        card.classList.toggle("hide", !isVisible)
    })
    
   })

}   

    another()
