let randomBtn = document.querySelector("#random")

function randomRestaurant () {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        randomBtn.setAttribute("href", "https://www.cttacos.com/")
    } else if (randomNumber === 2) {
        randomBtn.setAttribute("href", "https://oceanandacre.com/")
    } else {
        randomBtn.setAttribute("href", "https://hobnobatlanta.com/")
    }
}

randomBtn.addEventListener("click", randomRestaurant)