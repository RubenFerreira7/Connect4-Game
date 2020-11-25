let gameBoard = [
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
];

//Botão para voltar ao menu
document.getElementById("return").onclick = function () {

    location.href = "menu.html";
}
let start = false

//se válido constrói o tabuleiro
if (start === true) {

    gameTable();
}
//funcionalidade da board
const gameTable = () => {


    const board = document.getElementById("board");
    let doc = ``;
    for (let i = 0; i < gameBoard.length; i++) {
        let row = gameBoard[i];
        for (let j = 0; j < row.length; j++) {
            const circle = gameBoard[i][j];
            const color = circle && circle.color || 'white';

            doc = doc + `<circle  onClick="clickCircle(${j},${i})" fill='${color}' r='40px' cx='${j * 90 + 60}px' cy='${i * 90 + 60}px'></circle>`;
        }

    }
    board.innerHTML = doc;
    computerPlay();
    randomPiece();
    verifyVertically();
    verifyHorizontally();
    verifyDiagonalBottomToTop();
    verifyDiagonalTopToBottom();

};

let currentColor = "red";
let count = 0

//colocçaõ das peças do jogador
window.clickCircle = (x) => {

    for (let i = gameBoard.length - 1; i >= 0; i--) {
        let row = gameBoard[i];
        let targetPlace = row[x]


        if (targetPlace && !targetPlace.color) {
            row[x] = {
                color: currentColor
            };
            count++

            gameTable();
            break;
        }

    }

}

//função da jogada do computador
function computerPlay() {
    for (let i = 5; i >= 0; i--) {
        let row = gameBoard[i];
        if (!row.color) {
            let randomRow = row[Math.floor(Math.random() * row.length)];

            if (!randomRow.color) {
                randomRow.color = "yellow"
                count++
                break;
            } else {
                row = gameBoard[i - 1];
                if (!row.color) {
                    let randomRow = row[Math.floor(Math.random() * row.length)];

                    if (!randomRow.color) {
                        randomRow.color = "yellow"
                        count++;
                        break;
                    }
                }
            }
        }
    }
}


//função da peça preta aleatória (regra destruturada)
function randomPiece() {

    if (count !== 0 && count % 3 === 0) {

        let randomRow = gameBoard[Math.floor(Math.random() * gameBoard.length)];
        let randomTarget = randomRow[Math.floor(Math.random() * randomRow.length)];
        if (!randomTarget.color) {
            randomTarget.color = "black"
        } else
            do {
                randomRow = gameBoard[Math.floor(Math.random() * gameBoard.length)];
                randomTarget = randomRow[Math.floor(Math.random() * randomRow.length)];
            } while (!randomTarget.color === false);
        randomTarget.color = "black"
    }

}

//verificar vencedor verticalmente 
function verifyVertically() {
    for (let i = 0; i < gameBoard.length; i++) {
        let row = gameBoard[i];
        for (let j = 0; j < row.length; j++) {
            let piece = gameBoard[i][j];
            if (piece && piece.color) {
                if (i === 0 || i === 1 || i === 2) {
                    if ((gameBoard[i + 1][j].color === piece.color && piece.color !== "black") &&
                        (gameBoard[i + 2][j].color === piece.color && piece.color !== "black") &&
                        (gameBoard[i + 3][j].color === piece.color && piece.color !== "black")
                    ) {
                        win = true;
                        if (piece.color === 'red') {
                            Swal.fire({
                                title: 'Vitória',
                                text: `${selectedOne} venceu na vertical `,
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Jogar novamente'
                            }).then((result) => {
                                if (result.value) {
                                    location.reload();

                                } else {

                                    location.href = "menu.html";
                                }
                            })
                        } else {

                            if (piece.color === 'yellow') {

                            }
                            Swal.fire({
                                title: 'Vitória',
                                text: `Computador venceu na vertical `,
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Jogar novamente'
                            }).then((result) => {
                                if (result.value) {
                                    location.reload();

                                } else {

                                    location.href = "menu.html";
                                }
                            })

                        }

                    }

                } else {

                    Draw()

                }
            }
        }
    }
}

// verificaçao de vencedor na horizontal
function verifyHorizontally() {
    for (let i = 0; i < gameBoard.length; i++) {
        let row = gameBoard[i];
        for (let j = 0; j < row.length; j++) {
            let piece = gameBoard[i][j];
            if (piece && piece.color) {
                if (j === 0 || j === 1 || j === 2 || j === 3 || j === 4) {
                    if ((gameBoard[i][j + 1].color === piece.color && piece.color !== "black") &&
                        (gameBoard[i][j + 2].color === piece.color && piece.color !== "black") &&
                        (gameBoard[i][j + 3].color === piece.color && piece.color !== "black")
                    ) {
                        win = true;
                        if (piece.color === 'red') {

                            Swal.fire({
                                title: 'Vitória',
                                text: `${selectedOne} venceu na horizontal `,
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Jogar novamente'
                            }).then((result) => {
                                if (result.value) {
                                    location.reload();

                                } else {

                                    location.href = "menu.html";
                                }
                            })
                        } else {

                            if (piece.color === 'yellow') {


                                Swal.fire({
                                    title: 'Vitória',
                                    text: `Computador venceu na horizontal `,
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Jogar novamente'
                                }).then((result) => {
                                    if (result.value) {
                                        location.reload();

                                    } else {

                                        location.href = "menu.html";
                                    }
                                })

                            }

                        }

                    } else {

                        Draw()
                    }
                }
            }
        }

    }
}

//verificar vencedor na diagonal de cima para baixo
function verifyDiagonalTopToBottom() {
    for (let i = 0; i < gameBoard.length; i++) {
        let row = gameBoard[i];
        for (let j = 0; j < row.length; j++) {
            let piece = gameBoard[i][j];
            if (piece && piece.color) {
                if (i === 0 || i === 1 || i === 2) {
                    if (j === 4 || j === 3 || j === 2 || j == 1 || j === 0) {
                        if ((gameBoard[i + 1][j + 1].color === piece.color && piece.color !== "black") &&
                            (gameBoard[i + 2][j + 2].color === piece.color && piece.color !== "black") &&
                            (gameBoard[i + 3][j + 3].color === piece.color && piece.color !== "black")
                        ) {
                            win = true;

                            if (piece.color === 'red') {

                                Swal.fire({
                                    title: 'Vitória',
                                    text: `${selectedOne} venceu na diagonal `,
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Jogar novamente'
                                }).then((result) => {
                                    if (result.value) {
                                        location.reload();

                                    } else {

                                        location.href = "menu.html";
                                    }
                                })

                            } else {

                                if (piece.color === 'yellow') {

                                }
                                Swal.fire({
                                    title: 'Vitória',
                                    text: `Computador venceu na diagonal `,
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Jogar novamente'
                                }).then((result) => {
                                    if (result.value) {
                                        location.reload();

                                    } else {

                                        location.href = "menu.html";
                                    }
                                })

                            }

                        }

                    }

                }
            }
        }
    }

}


//função que verifica se o tabuleiro está todo completo sem vencedor
function getGameDraw() {

    for (let i = 0; i < gameBoard[0].length; i++) {
        const element = gameBoard[0][i]
        if (!element.color) {
            return false;
        }
    }
    return true
}

//função que exibe a mensagem de empate
function Draw() {

    const isDraw = getGameDraw();
    if (isDraw === true) {

        Swal.fire({
            title: 'Empate',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Jogar novamente'
        }).then((result) => {
            if (result.value) {
                location.reload();
            } else {
                location.href = "menu.html";
            }
        })
    }
}

//verificar vencedor na diagonal de baixo para cima 
function verifyDiagonalBottomToTop() {
    for (let i = 5; i >= 0; i--) {
        let row = gameBoard[i];
        for (let j = 0; j < row.length; j++) {
            let piece = gameBoard[i][j];
            if (piece && piece.color) {
                if (i === 5 || i === 4 || i === 3) {
                    if (j === 4 || j === 3 || j === 2 || j == 1 || j === 0) {
                        if ((gameBoard[i - 1][j + 1].color === piece.color && piece.color !== "black") &&
                            (gameBoard[i - 2][j + 2].color === piece.color && piece.color !== "black") &&
                            (gameBoard[i - 3][j + 3].color === piece.color && piece.color !== "black")
                        ) {
                            win = true;
                            if (piece.color === 'red') {
                                Swal.fire({
                                    title: 'Vitória',
                                    text: `${selectedOne} venceu na diagonal `,
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Jogar novamente'
                                }).then((result) => {
                                    if (result.value) {
                                        location.reload();

                                    } else {
                                        location.href = "menu.html";
                                    }
                                })
                            } else {

                                if (piece.color === 'yellow') {
                                    Swal.fire({
                                        title: 'Vitória',
                                        text: `Computador venceu na diagonal `,
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'Jogar novamente'
                                    }).then((result) => {
                                        if (result.value) {
                                            location.reload();

                                        } else {

                                            location.href = "menu.html";
                                        }
                                    })
                                }
                            }
                        }

                    }
                }
            }
        }
    }
}

