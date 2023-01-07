// class Player {
//     constructor(name) {
//         this.name = name
//     }
// }


// resultPopUp: function (x) {
//     let gameOverScreen = document.getElementById('win-screen')
//     let gameResult = document.getElementById('game-result')
//     if (x === 'tie') {
//         gameResult.textContent = `It's a Tie!`
//         gameOverScreen.style.zIndex = '2'
//         gameOverScreen.classList.add('elementToFadeInAndOut')
//         setTimeout(function () {
//             gameOverScreen.classList.remove('elementToFadeInAndOut')
//             gameOverScreen.style.zIndex = '-1'
//         }, 2000);
//     } else if (x === 'playerone') {
//         gameResult.textContent = `${this.players[0].getName} wins!`
//         gameOverScreen.style.zIndex = '2'
//         gameOverScreen.classList.add('elementToFadeInAndOut')
//         setTimeout(function () {
//             gameOverScreen.classList.remove('elementToFadeInAndOut')
//             gameOverScreen.style.zIndex = '-1'
//         }, 2000);
//     } else if (x === 'playertwo') {
//         gameResult.textContent = `${this.players[1].getName} wins!`
//         gameOverScreen.style.zIndex = '2'
//         gameOverScreen.classList.add('elementToFadeInAndOut')
//         setTimeout(function () {
//             gameOverScreen.classList.remove('elementToFadeInAndOut')
//             gameOverScreen.style.zIndex = '-1'
//         }, 2000);
//     }
// }
