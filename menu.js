let players = [];
if (localStorage.getItem('players')) {
  players = JSON.parse(localStorage.getItem('players'))
} else {
  players = []
}



//abre a modal ara adicionar  um novo jogador
document.getElementById("newPlayer").onclick = function () {

  const modal = document.getElementById("addPlayerModal");

  modal.style.display = "block";
  document.querySelector("#msgError").style.visibility = "hidden"
  document.querySelector("#msgErrorNone").style.visibility = "hidden"
  document.querySelector('#addPlayer').value=''

  // fecha a modal quando se clica fora
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

document.getElementById("vsPlayer").onclick = function () {

  location.href = "playerVsPlayer.html";

}

document.getElementById("vsComp").onclick = function () {

  location.href = "playerVsAI.html"

}
document.getElementById("rank").onclick = function () {

  location.href = "scoreboards.html";




}

//criação de novo jogador e verificação se o nome já existe ou o campo está vazio, se estiver válido é adicionado à localstorage
document.getElementById("createPlayer").onclick = function () {
  let newPlayer = {}
  newPlayer.name = document.getElementById("addPlayer").value

  if (newPlayer.name === "") {
    document.querySelector("#msgError").style.visibility = "hidden"
    document.querySelector("#msgErrorNone").style.visibility = "visible"

  } else if (players.some(players => players.name === newPlayer.name)) {
    document.querySelector("#msgErrorNone").style.visibility = "hidden"
    document.querySelector("#msgError").style.visibility = "visible"


  } else {

    newPlayer.rank = 0
    newPlayer.games = 0
    newPlayer.wins = 0
    newPlayer.ratio = 0
    players[players.length] = newPlayer
    localStorage.setItem("players", JSON.stringify(players))
    document.getElementById("addPlayer").value = ""
    document.querySelector("#msgError").style.visibility = "hidden"
    document.querySelector("#msgErrorNone").style.visibility = "hidden"
    const modal = document.getElementById("addPlayerModal");
    modal.style.display = "none";

  }

}

//modal das regras
document.getElementById("rules").onclick = function () {
  const rulesModal = document.getElementById("rulesModal");
  rulesModal.style.display = "block";

  window.onclick = function (event) {
    if (event.target == rulesModal) {
      rulesModal.style.display = "none";
    }
  }




}