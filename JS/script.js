document.getElementById("TicTacToe").addEventListener("click", () => window.location.href = "pages/tictactoe.html");
document.getElementById("GuessNumber").addEventListener("click", () => window.location.href = "pages/guess.html");

document.getElementById("exit").addEventListener("click", () => {

    if (confirm("Are you sure you want to close this page?")) {
        window.location.href = "about:blank";
    }

});