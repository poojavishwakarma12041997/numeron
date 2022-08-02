// Select the play button and redirect to game.html

const play = document.getElementById("play-button")
// dom-element.onclick = function()

play.onclick = () => {
    location.href = "./game.html"
}
