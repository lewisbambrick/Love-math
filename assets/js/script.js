document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
               checkAnswer();
            }
            else { 
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition") 
}) 

function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }
    else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2)
    }
    else if (gameType === "division"){
        displayDivisionQuestion(num1,num2)
    }
    else if (gameType === "subtract"){
        displaySubtractQuestion(num1,num2)
    }
    else { 
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`
    }
}
/**
 * Checkes the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

        if (isCorrect){
            alert('Hey! You got the correct answer!')
            incrementScore();
        }
        else {
            alert(`awhhhh...you got ${userAnswer} but the correct answer is ${calculatedAnswer[0]}`);
            incrementWrongAnswer();
        }
    runGame(calculatedAnswer[1]);
}
/**
 * Gets the operands(the numbers) and the operator (plus, minus, etc)
 * directly from the DOM, and returnes the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
return[operand1 + operand2, "addition"];
    }
    else if (operator === "x"){
        return[operand1 * operand2, "multiply"];
    }
    else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }
}
/**
 * gets the current score from the DOM and increases it by 1
 */
function incrementScore(){
let oldScore = parseInt(document.getElementById('score').innerText);
document.getElementById('score').innerText = ++oldScore;
}

/**
 * gets the current incorrect answer number from the DOM and increases it by 1
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
    }

function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+" ;

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x" ;
}

function displayDivisionQuestion(){
    
}