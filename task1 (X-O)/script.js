let p1Score = 0, p2Score = 0;
function startGame() {
  let p1name = document.getElementById("player1-input").value || "Player 1"
  let p2name = document.getElementById("player2-input").value || "Player 2"
  document.getElementById("player1-name").textContent = p1name;
  document.getElementById("dis1").textContent = p1name;
  document.getElementById("player2-name").textContent = p2name;
  document.getElementById("dis2").textContent = p2name;
  // document.getElementById("score").textContent = ' ${p1score}';
  // document.getElementById("player-2-score").textContent = p2name;

  document.querySelector('.maindiv').style.display = "none";

  document.querySelector('.game-container').style.display = "flex";
}

let cells = document.querySelectorAll(".cell");
let btnRestart = document.querySelector("#btn-restart");
let plays = ["", "", "", "", "", "", "", "", ""]
let allWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let currentP = "x"
let gameOver = false
initGame()
function initGame() {
  cells.forEach(c => c.addEventListener("click", clicked));
  btnRestart.addEventListener("click", restartGame)
sto1()
}
function clicked() {
  let currIndex = this.getAttribute("indexVal");

  if (plays[currIndex] != "" || gameOver) { return; }
  update(currIndex, this)
  switchP()
  checkWin()
}
function update(index, cell) {
  plays[index] = currentP;
  cell.innerText = currentP;

  cell.classList.remove((currentP == "x") ? "o" : "x")
  cell.classList.add((currentP == "x") ? "x" : "o")
  // cell.classList.remove(currentP)
}

function switchP() {
  if (currentP == "x") { sto2();currentP = "o" }
  else { sto1();currentP = "x" }
}
function sto1(){
  document.querySelector(".player-1").style.boxShadow = "0 0 40px #2CFEFF";
  document.querySelector(".player-1").style.border = "3px solid #2CFEFF";
  document.querySelector(".player-1").style.transitionDuration = "300ms";
  
  
  document.querySelector(".player-2").style.boxShadow = "0 0 30px #ff0000";
  document.querySelector(".player-2").style.border = "3px solid #ff0000";
  document.querySelector(".player-2").style.transitionDuration = "300ms";
}
function sto2(){
  document.querySelector(".player-1").style.boxShadow = "0 0 20px #2CFEFF";
  document.querySelector(".player-1").style.border = "3px solid #2CFEFF";
  document.querySelector(".player-1").style.transitionDuration = "300ms";
  
  
  document.querySelector(".player-2").style.boxShadow = "0 0 70px #ff0000";
  document.querySelector(".player-2").style.border = "3px solid #ff0000";
  document.querySelector(".player-2").style.transitionDuration = "300ms";
}

function checkWin() {
  for (let op of allWins) {
    if (plays[op[0]] == "" || plays[op[1]] == "" || plays[op[2]] == "") { continue; }
    if (plays[op[0]] == plays[op[1]] && plays[op[1]] == plays[op[2]]) {
      if (currentP == "o") {
        p1Score++;
        document.getElementById("score1").innerText = p1Score;
        document.querySelector(".player-1").style.boxShadow = "0 0 30px #2bed1d";
        document.querySelector(".player-1").style.border = "3px solid #2bed1d";
        document.querySelector(".player-1").style.transitionDuration = "300ms";
        for (let i of op) {
          cells[i].style.boxShadow = "0 0 30px #2bed1d";
          cells[i].style.border = "2px solid #2bed1d";
          cells[i].style.width = "83px";
          cells[i].style.height = "83px";
          cells[i].style.transitionDuration = "300ms"

        }
        gameOver = true
        return
      }
      else if (currentP == "x") {
        p2Score++;
        document.getElementById("score2").innerText = p2Score;
        document.querySelector(".player-2").style.boxShadow = "0 0 30px #2bed1d";
        document.querySelector(".player-2").style.border = "3px solid #2bed1d";
        document.querySelector(".player-2").style.transitionDuration = "300ms";
        for (let i of op) {
          cells[i].style.boxShadow = "0 0 30px #2bed1d";
          cells[i].style.border = "2px solid #2bed1d";
          cells[i].style.width = "83px";
          cells[i].style.height = "83px";
          cells[i].style.transitionDuration = "300ms"

        }
        gameOver = true
        return

      }}
      
  }
  if (!plays.includes("") ){
    document.querySelector(".player-1").style.boxShadow = "0 0 30px #737979";
document.querySelector(".player-1").style.border = "3px solid #737979";
document.querySelector(".player-1").style.transitionDuration = "300ms";

document.querySelector(".player-2").style.boxShadow = "0 0 30px #737979";
document.querySelector(".player-2").style.border = "3px solid #737979";
document.querySelector(".player-2").style.transitionDuration = "300ms";
cells.forEach(e => {
// e.innerText = ""
e.style.boxShadow = "0 0 0";
e.style.border = "2px solid #737979";
e.style.width = "80px";
e.style.height = "80px";

e.style.transitionDuration = "300ms"
});

  }

}

function restartGame() {
  document.querySelector(".player-1").style.boxShadow = "0 0 30px #2CFEFF";
  document.querySelector(".player-1").style.border = "3px solid #2CFEFF";
  document.querySelector(".player-1").style.transitionDuration = "300ms";

  document.querySelector(".player-2").style.boxShadow = "0 0 30px #ff0000";
  document.querySelector(".player-2").style.border = "3px solid #ff0000";
  document.querySelector(".player-2").style.transitionDuration = "300ms";
  plays.fill("")
  cells.forEach(e => {
    e.innerText = ""
    e.style.boxShadow = "0 0 0";
    e.style.border = "2px solid #2CFEFF";
    e.style.width = "80px";
    e.style.height = "80px";

    e.style.transitionDuration = "300ms"
  });
  gameOver = false
  currentP = "x";

}

