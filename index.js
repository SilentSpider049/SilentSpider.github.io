function msg() {
    let userInput = document.querySelector("#userInput")
    let message = document.querySelector("#message")
    message.innerHTML = "Welcome, " + userInput.value + "!"
}