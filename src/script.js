const imgX = document.createElement('img')
imgX.src = './images/Picture2.png'
const imgO = document.createElement('img')
imgO.src = './images/Picture1.png'

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
}

const playerOne = new Player(name1)
const playerTwo = new Player(name2)
const players = [playerOne, playerTwo]

// let gameboard = []
// const createBoard = () => { }

// class Gameboard {
//     constructor(players) {
//         this.players = players
//     }
// }

const Gameboard = {
    players,
    // board: [imgX, imgO, false, imgX, imgO, imgX, imgX, imgO, ""],
    board: Array(9).fill(false),
    // store gameboard as array
    // store players as object
    updateDisplay: function () {
        for (let i = 0; i < 9; i++) {
            console.log('updating')
            console.log(gridInput[i])
            if (Gameboard.board[i]) {
                gridInput[i].innerHTML = this.board[i].outerHTML
            } else {
                console.log('array item empty')
            }

            // add if statement to protect against undefined or null
        }
    }
}

// for loop to display array object

const grid = document.getElementsByClassName('grid-item')
const gridInput = Array.from(grid)

const moveMaker = (e) => {
    let squareSelect = e.target.id
    console.log('move made' + squareSelect)
    Gameboard.board[squareSelect] = imgO
    Gameboard.updateDisplay()
    // if (Gameboard.board.length === 9) {
    //     return console.log('tie')
    // }
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
