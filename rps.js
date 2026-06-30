let userScore = 0;
let computerScore = 0;

function playGame(userChoice)
{
    let choices = ["stone", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];
    document.getElementById("user-choice").innerText =
        "Your Choice: " + userChoice;
    document.getElementById("computer-choice").innerText =
        "Computer Choice: " + computerChoice;
    let result = "";
    if(userChoice === computerChoice)
    {
        result = "It's a Draw!";
    }

    else if(
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    )
    {
        result = "You Win! 🎉";
        userScore++;
    }

    else
    {
        result = "Computer Wins! 🤖";
        computerScore++;
    }

    document.getElementById("result").innerText = result;

    document.getElementById("user-score").innerText =
        userScore;

    document.getElementById("computer-score").innerText =
        computerScore;
}
function resetGame()
{
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").innerText = 0;
    document.getElementById("computer-score").innerText = 0;
    document.getElementById("user-choice").innerText =
        "Your Choice: -";
    document.getElementById("computer-choice").innerText =
        "Computer Choice: -";
    document.getElementById("result").innerText =
        "Choose an option!";
}