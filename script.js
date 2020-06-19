
// Announces string to the game log
function announce(string) {
  const content = document.querySelector('#logcontent');      
  content.textContent = string;
}

let playerScore = 0;
let computerScore = 0;
let animationTime = 3000;

function swapPicP(a) {
  const pic = document.querySelector('#playerhand');
  setTimeout(function(){
    pic.src = a;
    }, animationTime - 200);
}   

function swapPicC(a) {
  const pic = document.querySelector('#computerhand');
  setTimeout(function(){
    pic.src = a;
    }, animationTime - 200);
}  

function resetPics() {
  const picP = document.querySelector('#playerhand');
  const picC = document.querySelector('#computerhand');
  picP.src = "rockf.png";
  picC.src = "rock.png";
}

function animate() {
  resetPics();
  const picP = document.querySelector('#playerhand');
  const picC = document.querySelector('#computerhand');
  picP.classList.add('animated');
  picC.classList.add('animated');
  setTimeout(function(){
    picP.classList.remove('animated');
    picC.classList.remove('animated');
    }, animationTime);
}

// buttons is a node list. It looks and acts much like an array.
const buttonNL = choicebuttons.querySelectorAll('button');

  // we use the .forEach method to iterate through each button
  buttonNL.forEach((button) => {
  
    // click listener for all buttons, plays round with button choice and updates score log
    button.addEventListener('click', (e) => {
      let choice = button.id;
      animate();
      playRound(choice);
      const pScoreInd = document.querySelector('#playerscore');
      pScoreInd.textContent = playerScore;
      const cScoreInd = document.querySelector('#computerscore');
      cScoreInd.textContent = computerScore;
    });
  }); 
    
// Computer chooses what to use
function computerPlay() {
  // Random number between 1 and 3    
  let choice = Math.floor((Math.random() * 3) + 1);
  switch (choice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors"
      break;
    }
}

// Plays a round
function playRound(playerChoice) {
  let computerChoice = computerPlay();
  console.log(`Player: ${playerChoice} Computer: ${computerChoice}`);
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "paper") {
        swapPicC("paper.png");
        announce("Paper beats rock! You lose this round!");
        computerScore++;
      }
      else if (computerChoice === "rock") {
        swapPicC("rock.png");
        announce("It's a tie!");
      }
      else {
        swapPicC("scissors.png");
        announce("Rock beats scissors! You win this round!");
        playerScore++;
      }
      swapPicP("rockf.png");
      break;
    case "paper":
      if (computerChoice === "scissors") {
        swapPicC("scissors.png");
        announce("Scissors beats paper! You lose this round!");
        computerScore++;
      }
      else if (computerChoice === "paper") {
        swapPicC("paper.png");
        announce("It's a tie!");
      }
      else {
        swapPicC("rock.png");
        announce("Paper beats rock! You win this round!");
        playerScore++;
      }
      swapPicP("paperf.png");
      break;
    case "scissors":
      if (computerChoice === "rock") {
        swapPicC("rock.png");
        announce("Rock beats scissors! You lose this round!");
        computerScore++;
      }
      else if (computerChoice === "scissors") {
        swapPicC("scissors.png");
        announce("It's a tie!");
      }
      else {
        swapPicC("paper.png");
        announce("Scissors beats paper! You win this round!");
        playerScore++;
      }
      swapPicP("scissorsf.png"); 
      break;
  }
  // Check for win conidition (5 points) and restart the game
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore >= 5) {
      const content = document.querySelector('#logcontent');      
      content.textContent += " The game is over and you win!"; 
      gamelog.appendChild(content);
    }
    else {
      const content = document.querySelector('#logcontent');      
      content.textContent += " The game is over and you lose!"; 
      gamelog.appendChild(content);
    }
    playerScore = 0;
    computerScore = 0;
  } 
}
