console.log("Hello World");
const kiTurnDisplay = document.getElementById('ki-turn');
const userTurnDisplay = document.getElementById('your-turn');
const resultDisplay = document.getElementById('result');
const userTurnButton = document.querySelectorAll("button");

let kiTurn;
let yourTurn;

console.log(userTurnButton);

userTurnButton.forEach(function (button) {
    console.log("Button", button);
    button.addEventListener('click', function(e) {
        console.log("Button ID:", e.target.id);
        yourTurn = e.target.id;
        userTurnDisplay.innerHTML = yourTurn;
        generateKITurn();
        compareTurns();
    })
})

function generateKITurn(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    if(randomNumber === 1) {
        kiTurn = "Schere"
    } else if (randomNumber === 2) {
        kiTurn = "Stein"
    } else {
        kiTurn = "Papier"
    }

    kiTurnDisplay.innerHTML = kiTurn;
}

function compareTurns() {
    if(yourTurn === kiTurn) {
        result = "Unentschieden!";
    } 
    if (yourTurn === "Stein" && kiTurn === "Papier") {
        result = "KI wins!";
    }
    if (yourTurn === "Stein" && kiTurn === "Schere") {
        result = "You are winning!";
    }
    if (yourTurn === "Schere" && kiTurn === "Papier") {
        result = "You are winning!";
    }
    if (yourTurn === "Schere" && kiTurn === "Stein") {
        result = "KI wins!";
    }
    if (yourTurn === "Papier" && kiTurn === "Stein") {
        result = "You are winning!";
    }
    if (yourTurn === "Papier" && kiTurn === "Schere") {
        result = "KI wins!";
    }
    resultDisplay.innerHTML = result;
}