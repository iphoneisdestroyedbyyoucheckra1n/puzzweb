document.getElementByClass("puzzletext").style.display = "none";
document.getElementById("revealbutton").addEventListener("click", revealpuzzle);

function revealpuzzle() {
  document.getElementByClass("puzzletext").style.display = "block";
}
