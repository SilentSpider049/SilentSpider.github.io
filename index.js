function msg() {
    let userInput = document.querySelector("#userInput")
    let message = document.querySelector("#message")
    message.innerHTML = "Welcome, " + userInput.value + "!"
}

let showGif = document.getElementById("showGif")
let showImage = document.getElementById("showImage")
showGif.addEventListener("click", function() {
    showImage.style.display = "block"
    showImage.style.textAlign = "center"
})