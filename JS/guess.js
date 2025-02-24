const start = document.getElementById("start");
const back = document.getElementsByClassName("below")[0];
const sub = document.getElementById("subNegative");
const check = document.getElementById("check");
const currentInput = document.getElementById("current");
const subStart = document.getElementById("subStart");
const above = document.getElementsByClassName("above")[0];

const toggleElement = (element, displayStyle) => {
    element.style.display = displayStyle;
};

const showMessage = (message) => {
    sub.textContent = message;
};

const resetInput = () => {
    currentInput.value = "";
};

let checkHandler;
let keypressHandler;

const startGame = () => {

    let attempts = 0;
    const targetNumber = Math.floor(Math.random() * 100);

    toggleElement(subStart, "none");
    toggleElement(start, "none");
    toggleElement(sub, "block");
    showMessage("");
    resetInput();

    keypressHandler = (e) => {
        if (e.key === "Enter") {
            check.click();
        }
    };
    currentInput.addEventListener("keypress", keypressHandler);

    checkHandler = () => {

        const userGuess = +currentInput.value;

        if (checkNumber(userGuess)) {
            showMessage("This number is negative");
            resetInput();
            return;
        }

        if (currentInput.value.trim() === "" || isNaN(userGuess)) {
            showMessage("Please enter a valid number!");
            return;
        }

        attempts++;
        if (userGuess === targetNumber) {
            showMessage(`You guessed the number in ${attempts} attempts!`);
            above.textContent = "Play again";
            toggleElement(start, "block");
            resetInput();

            currentInput.removeEventListener("keypress", keypressHandler);
            check.removeEventListener("click", checkHandler);

        } 
        else if (userGuess < targetNumber) {
            showMessage("The intended number is greater. Try again!");
        } 
        else {
            showMessage("The intended number is less. Try again!");
        }

        resetInput();
    };

    check.addEventListener("click", checkHandler);

    const restartGame = () => {
        currentInput.removeEventListener("keypress", keypressHandler);
        check.removeEventListener("click", checkHandler);
        startGame();
    };

    start.removeEventListener("click", restartGame);
    start.addEventListener("click", restartGame);

};

start.addEventListener("click", startGame);

back.addEventListener("click", () => (window.location.href = "../index.html"));

function checkNumber(value) {
    return value < 0;
}
