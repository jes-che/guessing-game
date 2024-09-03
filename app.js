let maximum = parseInt(prompt("Enter the maximum number:"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number:"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess (0 ~ the maximun number) or 'q' to quit:");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q" || guess === null) break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess! Enter a number or 'q' to quit:");
    }
}

if (guess === "q" || guess === null) {
    document.getElementById("message").innerHTML = "OH NO YOU QUIT!";
    document.getElementById("restart").addEventListener("click", function() {
        window.location.reload();
        return false;
    });
} else {
    document.getElementById("message").innerHTML = "CONGRATS! YOU WIN!";
    document.getElementById("attempt").innerHTML = `It took you ${attempts} guess(es)`;
    document.getElementById("restart").addEventListener("click", function() {
        window.location.reload();
        return false;
    });
}