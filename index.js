function msg() {
    let userInput = document.querySelector("#userInput")
    let message = document.querySelector("#message")
    message.innerHTML = "Welcome, " + userInput.value + "!"
}

let container = document.getElementById("container")
let showGif = document.getElementById("showGif")
let showImage = document.getElementById("showImage")
showGif.addEventListener("click", function() {
    showImage.style.display = "block"
    container.style.display = "block"
})