
const Result = document.querySelector(".Result");
let playerScore = 1
let computerScore = 1;
const player_Score = document.querySelector(".playerScore")
const computer_Score = document.querySelector(".computerScore")
const btnRock = document.getElementById("rock")
const btnPaper =document.getElementById("paper")
const btnScissors =document.getElementById("scissors")
const userInput = document.querySelector(".userInput")
const computerInput = document.querySelector(".computerInput")


function win () {
    player_Score.innerHTML= playerScore++
}
function loss (){
    computer_Score.innerHTML=computerScore++ 
}
function Computer(){
    const choiceArray = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random()*3);
    return choiceArray[randomNumber]
    
} 

function user(userChoice) {
 const computerChoice = Computer()
 userInput.innerHTML = `USER: ${userChoice}`
computerInput.innerHTML = `COMPUTER: ${computerChoice}`
 switch (userChoice + computerChoice) {
    case ("rockscissors"):
    case ("paperrock"):
    case ("scissorspaper"):
        win()
        Result.innerHTML = ` USER WINS.`        
        break;
    case ("rockpaper"):
    case ("paperscissors"):
    case ("scissorsrock"):
       loss()
        Result.innerHTML = "COMPUTER WINS." 
        break;
    case ("rockrock"):
    case ("paperpaper"):
    case ("scissorsscissors"):
        console.log("Its a draw"); 
        Result.innerHTML = "ITS A DRAW"                 
    default:
        break;
 }

}


function main(){
    btnRock.addEventListener("click", () =>{
        user("rock") 
    })
    btnPaper.addEventListener("click",()=>{
        user("paper")
    })
    btnScissors.addEventListener("click",()=>{
        user("scissors")
    })

    
    
} main()


