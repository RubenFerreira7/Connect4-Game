 if (localStorage.getItem('players')) {
     players = JSON.parse(localStorage.getItem('players'))
 } else {
     players = []
 }

 let selectedOne
 let selectedTwo
 let list = document.getElementById("playerOne")
 let listTwo = document.getElementById("playerTwo");

 //função para selecionar o jogador1 da partida, e verificação se existem jogadores
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

 //função para selecionar o jogador2 da partida, e verificação se existem jogadores
 function selectPlayerTwo() {
     let arr = JSON.parse(localStorage.getItem('players'));

     arr.forEach(function (obj) {
    
         let option = document.createElement("option");
         option.text = obj.name;
         listTwo.add(option);
     
     })

 }

 //botão para iniciar a partida e verificação se os jogadores são os mesmos, se forem não deixa iniciar.
 //Cria também os cartões com as informações de cada jopgador, ao lado do tabuleiro de jogo
 document.getElementById("play").onclick = function () {

     selectedOne = list.value
     selectedTwo = listTwo.value


     if (selectedOne === selectedTwo) {

        Swal.fire('Os jogadores não podem ser os mesmos')
     } else {
         start === true


         for (let i = 0; i < players.length; i++) {
             const currentPlayer = players[i];

             if (selectedOne === currentPlayer.name || selectedTwo === currentPlayer.name) {
                 currentPlayer.games++
                 localStorage.setItem("players", JSON.stringify(players))
                 console.log(currentPlayer);

             }
             if (selectedOne === currentPlayer.name) {

                 document.getElementById("playerOneName").innerHTML += `<p>Nome: ${currentPlayer.name}</p> <hr width="250px"> <p>Vitórias: ${currentPlayer.wins}</p>  <hr width="250px"> <p>Jogos: ${currentPlayer.games}</p>  <hr width="250px"> <p>Pontos: ${currentPlayer.rank}</p>`
                 document.querySelector("#statsOne").style.visibility = "hidden"
             }

             if (selectedTwo === currentPlayer.name) {

                 document.getElementById("playerTwoName").innerHTML += `<p>Nome: ${currentPlayer.name}</p><hr width="250px"> <p>Vitórias: ${currentPlayer.wins}</p><hr width="250px"> <p>Jogos: ${currentPlayer.games}</p><hr width="250px"> <p>Pontos: ${currentPlayer.rank}</p>`
                 document.querySelector("#statsTwo").style.visibility = "hidden"
             }
         }
         document.querySelector("#play").disabled=true;
         gameTable();
     }
 }



 selectPlayerOne();
 selectPlayerTwo();