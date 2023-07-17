let turn = "X"
let isgameover = false
let endgame=false
const winningMessageTextElement =document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById('winningMessage')





//function to change the turn
const changeturn = () => {
    return turn === 'X' ? "O" : "X"

}

// function endGame(draw){
//     if (draw) {
//         winningMessageTextElement.innerText = 'Draw!'

//     } else {
//         winningMessageTextElement.innerText = `${X ? " X's " :" O's "} Wins! `
//     }
//     winningMessageElement.classList.add("show")
// }









// function to check for a win
const checkwin = () => {
    let celltext = document.getElementsByClassName('celltext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((celltext[e[0]].innerText === celltext[e[1]].innerText) && (celltext[e[2]].innerText === celltext[e[1]].innerText) && (celltext[e[0]].innerText !== "")) {
            console.log("player won")
            isgameover = true
            winningMessageTextElement.innerText = ` ${celltext[e[0]].innerText} Wins! `
            // document.querySelector('.winningMessage').innerText = celltext[e[0]].innerText + " Won"
            winningMessageElement.classList.add("show")
            reset.addEventListener('click', ()=>{
                let celltexts = document.querySelectorAll('.celltext');
                Array.from(celltexts).forEach(element => {
                    element.innerText =""
                    console.log("clicked")
                    winningMessageElement.classList.remove("show")
 
                });
            
            })  
           


        }
       
    })
}



//game logic
let cells = document.getElementsByClassName("cell");
Array.from(cells).forEach(element => {                         //element here is the cell
    let celltext = element.querySelector('.celltext');
    element.addEventListener('click', () => {
        if (celltext.innerText === '') {
            celltext.innerText = turn;
            turn = changeturn();
            checkwin();

            // document.getElementsByClassName("turn")[0].innerText="turn for "+turn
        }

    })
})


// Add onclick listener to reset button
