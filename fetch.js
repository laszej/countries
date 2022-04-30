const p = document.getElementById("p")
const states = document.getElementById("states")

const countries = async () =>{
  
    const response = await fetch("https://restcountries.com/v2/all")
    const data = await response.json()
    return data
  
}

const another = async () =>{
    const data = await countries()
    console.log(data)
    data.forEach((country, index)=>{
    console.log(data.index)  
    let independence = country.independent === true ?  "niepodległe państwo" : "kraj zależny"
    let card = document.createElement("div")
    card.index = index
    card.classList.add("content")
    card.id = country.name
    card.innerHTML+= `<img src="${country.flag}" width=100></img><br> <br> <b>${country.name}</b><br> <br>
    capital: ${country.capital}<br> <br>population: ${country.population} <br> <br> area: ${country.area}
    <br> <br>${independence}`
    let button = document.createElement("button")
    button.classList.add("deleteBtn")
    let deleteBtn = document.createElement("img")
    deleteBtn.setAttribute("src", "delete.png")
    button.append(deleteBtn)
    card.append(button)
    states.append(card)
    deleteBtn.addEventListener("click", ()=>{deleteBtn.parentElement.parentElement.remove()})
   })
   
}   

    another()
