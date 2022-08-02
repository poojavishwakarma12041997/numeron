
var URLParams = new URLSearchParams(window.location.search)
var score = URLParams.get("score")
var scoreBoard = document.getElementById("score-board")
scoreBoard.innerHTML = score

var playAgainButton = document.querySelector("#play-again-button")

playAgainButton.onclick = () => {
    location.href = "./game.html"
}
