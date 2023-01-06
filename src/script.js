const imgX = document.createElement('img')
imgX.src = './images/Picture2.png'
imgX.id = 'imgX'
const imgO = document.createElement('img')
imgO.src = './images/Picture1.png'
imgO.id = 'imgO'

let p1name = document.getElementById('p1-name')
let p2name = document.getElementById('p2-name')
let p2displayname = document.getElementById('p2-display-name')
let p1displayname = document.getElementById('p1-display-name')
const name1 = "Player One"
const name2 = "Player Two"

class Player {
    constructor(name) {
        this.name = name
        this.wins = 0
        this.loss = 0
    }
    set updateName(newName) {
        this.name = newName
    }
    get getName() {
        return this.name
    }
    get getWins() {
        return this.wins
    }
    get getLoss() {
        return this.loss
    }
}

const playerOne = new Player(name1)
const playerTwo = new Player(name2)
const players = [playerOne, playerTwo]

const Gameboard = {
    players,
    // board: [imgX, imgO, false, imgX, imgO, imgX, imgX, imgO, ""],
    board: Array(9).fill(false),
    isPlayerOneTurn: true,
    updateDisplay: function (i) {
        if (Gameboard.board[i] && gridInput[i] !== undefined) {
            gridInput[i].innerHTML = this.board[i].outerHTML
            Gameboard.isPlayerOneTurn = !Gameboard.isPlayerOneTurn
            this.updatePlayer()
            winCheck(imgO)
            winCheck(imgX)
        } else {
            console.log('square taken')
        }
    },
    updatePlayer: function () {
        const p1toggle = document.querySelector('#player-one');
        const p2toggle = document.querySelector('#player-two');
        if (this.isPlayerOneTurn) {
            console.log('false')
            p1toggle.classList.add('active')
            p2toggle.classList.remove('active')
        } else {
            console.log('true')
            p1toggle.classList.remove('active')
            p2toggle.classList.add('active')
        }
    },
    clearBoard: function () {
        console.log('boardclear')
        gridInput.forEach(input => input.innerHTML = "")
        this.board = []
        this.board = Array(9).fill(false)
    }
}

function winCheck(value) {
    let x = value;
    const p1win = document.getElementById('p1wins')
    const p1loss = document.getElementById('p1loss')
    const p2win = document.getElementById('p2wins')
    const p2loss = document.getElementById('p2loss')
    const isEqual = (a, b, c, x) => a === x && b === x && c === x;
    function tieCheck() {
        if (!Gameboard.board.includes(false)) {
            return console.log('tie')
        }
    }
    const updateScore = (x) => {
        if (x === imgO) {
            playerOne.wins++
            playerTwo.loss++
        } else if (x === imgX) {
            playerOne.loss++
            playerTwo.wins++
        }
        p1win.innerText = playerOne.getWins
        p1loss.innerText = playerOne.getLoss
        p2win.innerText = playerTwo.getWins
        p2loss.innerText = playerTwo.getLoss
        setTimeout(function () {
            Gameboard.clearBoard()
        }, 1000);
    }

    if (isEqual(Gameboard.board[0], Gameboard.board[1], Gameboard.board[2], x)) {
        return updateScore(x)
    } else if (isEqual(Gameboard.board[0], Gameboard.board[3], Gameboard.board[6], x)) {
        return updateScore(x)
    } else if (isEqual(Gameboard.board[0], Gameboard.board[4], Gameboard.board[8], x)) {
        return updateScore(x)
    } else if (isEqual(Gameboard.board[1], Gameboard.board[4], Gameboard.board[7], x)) {
        return updateScore(x)
    } else if (isEqual(Gameboard.board[2], Gameboard.board[5], Gameboard.board[8], x)) {
        return updateScore(x)
    } else if (isEqual(Gameboard.board[3], Gameboard.board[4], Gameboard.board[5], x)) {
        return updateScore(x)
    } else if (isEqual(Gameboard.board[6], Gameboard.board[7], Gameboard.board[8], x)) {
        return updateScore(x)
    } else {
        tieCheck()
    }
}

const grid = document.getElementsByClassName('grid-item')
const gridInput = Array.from(grid)

const moveMaker = (e) => {
    let squareSelect = e.target.id
    console.log('move made' + squareSelect)
    if (Gameboard.isPlayerOneTurn === true) {
        Gameboard.board[squareSelect] = imgO
        Gameboard.updateDisplay(squareSelect)
    } else {
        Gameboard.board[squareSelect] = imgX
        Gameboard.updateDisplay(squareSelect)
    }
}

gridInput.forEach(element => {
    element.addEventListener('click', moveMaker)
});

// taking input value and setting player name
const nameCheck = (input) => {
    if (input.trim() === "") {
        return false;
    }
    return true
}

const updateP2 = () => {
    let testText = p2name.value.trim()
    if (nameCheck(testText) === false) {
        return
    }
    playerTwo.updateName = titleCase(testText);
    p2displayname.textContent = playerTwo.getName
    p2name.value = ""
}

const updateP1 = () => {
    let testText = p1name.value.trim()
    if (nameCheck(testText) === false) {
        return
    }
    playerOne.updateName = titleCase(testText);
    p1displayname.textContent = playerOne.getName
    p1name.value = ""
}
const titleCase = (string) =>
    string[0].toUpperCase() + string.slice(1).toLowerCase();
