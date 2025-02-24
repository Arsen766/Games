let arr = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
];

document.querySelector(".back").addEventListener("click", () => window.location.href = "../index.html");
let again = document.querySelector(".again");

let score_count1 = 0;
let score_count2 = 0;
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");

const player1 = 1;
const player2 = 0;
let currentPlayer = player1;
let gameOver = false;

let table = document.querySelectorAll("#item");

function resetGame() {
    arr = [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
    ];
    table.forEach((item) => (item.innerHTML = ""));
    currentPlayer = player1;
    gameOver = false;
    again.style.display = 'none';
    document.querySelectorAll("h2").forEach((item) => item.style.display = "none");
}

function checkGameEnd() {
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] && arr[i][0] !== 2) {
            return true;
        }
        if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] && arr[0][i] !== 2) {
            return true;
        }
    }
    if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] !== 2) {
        return true;
    }
    if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0] && arr[0][2] !== 2) {
        return true;
    }
    return false;
}

function isDraw() {
    return arr.every(row => row.every(cell => cell !== 2));
}

again.addEventListener("click", resetGame);

table.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (gameOver) return;
        let row = Math.floor(index / 3);
        let col = index % 3;

        if (arr[row][col] !== 2) {
            alert("Cell already occupied!");
            return;
        }

        arr[row][col] = currentPlayer;
        item.innerHTML = `<h1>${currentPlayer === player1 ? "X" : "O"}</h1>`;

        if (checkGameEnd()) {
            gameOver = true;
            if (currentPlayer === player1) {
                score1.innerHTML = `${++score_count1}`;
                document.getElementById("Player1").style.display = "block"; 
            } else {
                score2.innerHTML = `${++score_count2}`;
                document.getElementById("Player2").style.display = "block"; 
            }
            again.style.display = 'flex';
        } else if (isDraw()) {
            gameOver = true;
            document.getElementById("IsDraw").style.display = "block"; 
            again.style.display = 'flex';
        } else {
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    });
});