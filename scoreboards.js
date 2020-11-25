if (localStorage.getItem('players')) {
    players = JSON.parse(localStorage.getItem('players'))
} else {
    players = []
}

let table = document.getElementById("scoreBoard")
//criação da tabela de classificação
function createtable() {
    let arr = JSON.parse(localStorage.getItem('players'));
    
  arr = arr.map(
    player => ({ name: player.name, rank: player.rank, wins:player.wins, games:player.games, ratio:player.ratio }) 
    )
console.log(arr);

//ordenação dos jogadores por rácio
  arr.sort(function(a,b) {
    if(a.ratio < b.ratio) return 1
    if(a.ratio > b.ratio) return -1
    else return 0
  })


    arr.forEach(function (obj) {
        //console.log(obj.name);

        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
       
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        let cell4 = document.createElement("td");
        cell1.innerHTML = obj.name;
     
        cell2.innerHTML = obj.games;
        cell3.innerHTML = obj.wins;
        cell4.innerHTML = Math.floor(obj.ratio*100)/100;

        
        row.appendChild(cell1);
       
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        table.appendChild(row); 
    })

}




createtable();
