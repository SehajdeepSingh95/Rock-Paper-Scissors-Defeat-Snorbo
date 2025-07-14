let your_Score = 0;
let snorbo_Score = 0;

function getSnorboChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function game(playerChoice) {
    let snorboChoice = getSnorboChoice();

    let resultMessage = "";
    let snorboImage = "assets/Snorbo_Happy.png";

    if (playerChoice === snorboChoice) {
        resultMessage = "It's a tie!";
        snorboImage = "assets/Snorbo_Happy.png";
    } 
    else if (
        (playerChoice === 'rock' && snorboChoice === 'scissors') ||
        (playerChoice === 'paper' && snorboChoice === 'rock') ||
        (playerChoice === 'scissors' && snorboChoice === 'paper')
    ) {
        your_Score++;
        resultMessage = "Snorbo lost!";
        snorboImage = "assets/Snorbo_Sad.png";
    }
    else {
        snorbo_Score++;
        resultMessage = "Snorbo won!";
        snorboImage = "assets/Snorbo_Happy.png";
    }

    document.getElementById("player-score").textContent = your_Score;
    document.getElementById("snorbo-score").textContent = snorbo_Score;

    document.querySelector(".snorbo-img").src = snorboImage;
    document.querySelector(".snorbo-status").textContent = resultMessage;
}
