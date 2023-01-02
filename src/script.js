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

const playerOne = new Player(name1)
const playerTwo = new Player(name2)
const players = [playerOne, playerTwo]

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
