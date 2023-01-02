const imgX = document.createElement('img')
imgX.src = './images/Picture2.png'
const imgO = document.createElement('img')
imgO.src = './images/Picture1.png'

// let gameboard = []
// const createBoard = () => { }

const gameboard = {
    // store gameboard as array
    // store players as object
}

class Gameboard {
    constructor(players) {
        this.players = players
    }
}

class Player {
    constructor(name) {
        this.name = name
    }
    set updateName(newName) {
        this.name = newName
    }
    get getName() {
        return this.name
    }
}

// place at top
let name1 = "Player One"
let name2 = "Player Two"

const playerOne = new Player(name1)
const playerTwo = new Player(name2)
const players = [playerOne, playerTwo]

const nameCheck = (input) => {
    if (input.trim() === "") {
        return false;
    }
    return true
}


// add id to input and finish code

// make for p2

// const updateP1 = () => {
//     // let testText =
//     if (nameCheck(testText) === false) {
//         return
//     }
// }
