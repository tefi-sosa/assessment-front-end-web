let randomBtn = document.querySelector("#random")
let amount = document.querySelectorAll(".restaurantLink")


function randomRestaurant () {
    let randomNumber = Math.floor(Math.random() * amount.length)
    let randomHref = amount[randomNumber].getAttribute("href")
    randomBtn.setAttribute("href", randomHref)
}

randomBtn.addEventListener("click", randomRestaurant)