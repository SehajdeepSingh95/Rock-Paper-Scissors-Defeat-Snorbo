let yourScore = 0;
let snorboScore = 0;

function getSnorboChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function emoji(choice) {
  if (choice === 'rock') return '🪨';
  if (choice === 'paper') return '📄';
  if (choice === 'scissors') return '✂️';
}

function game(playerChoice) {
  const snorboChoice = getSnorboChoice();

  document.getElementById('player-choice').textContent = emoji(playerChoice);
  document.getElementById('snorbo-choice').textContent = emoji(snorboChoice);

  let result = "";

  if (playerChoice === snorboChoice) {
    result = "It's a Draw!";
    snorboImage = "assets/Snorbo_Happy.png";
  } else if (
    (playerChoice === 'rock' && snorboChoice === 'scissors') ||
    (playerChoice === 'paper' && snorboChoice === 'rock') ||
    (playerChoice === 'scissors' && snorboChoice === 'paper')
  ) {
    result = "Snorbo Lost!";
    snorboImage = "assets/Snorbo_Sad.png";
    yourScore++;
  } else {
    result = "Snorbo Wins!";
    snorboScore++;
    snorboImage = "assets/Snorbo_Happy.png";
  }
  
  document.querySelector(".snorbo-img").src = snorboImage;
  document.getElementById("result-message").textContent = result;
  document.getElementById("player-score").textContent = yourScore;
  document.getElementById("snorbo-score").textContent = snorboScore;
}
