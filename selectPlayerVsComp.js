if (localStorage.getItem('players')) {
    players = JSON.parse(localStorage.getItem('players'))
} else {
    players = []
}

let selectedOne

let list = document.getElementById("playerOne")

//seleção do jogador que vai jogar contra o computador
function selectPlayerOne() {
    let arr = JSON.parse(localStorage.getItem('players'));
    if (arr === null) {
        alert("Deve criar os jogadores no menu inicial")
        document.querySelector("#play").disabled = true;
    } else {
        arr.forEach(function (obj) {

            let option = document.createElement("option");
            option.text = obj.name;
            list.add(option);

        })

    }

}

//botão que inicia o jogo e mostra os detalhes do jogador ao lado do tabuleiro
document.getElementById("play").onclick = function () {

    selectedOne = list.value
    for (let i = 0; i < players.length; i++) {
        const currentPlayer = players[i];

        if (selectedOne === currentPlayer.name) {

            document.getElementById("playerOneName").innerHTML += `<p>Nome: ${currentPlayer.name}</p> <hr width="250px"> <p>Vitórias: ${currentPlayer.wins}</p>  <hr width="250px"> <p>Jogos: ${currentPlayer.games}</p>  <hr width="250px"> <p>Pontos: ${currentPlayer.rank}</p>`
            document.querySelector("#statsOne").style.visibility = "hidden"
        }

    }
    document.querySelector("#play").disabled = true;
    gameTable();
}

selectPlayerOne();