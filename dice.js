
let a = prompt("Enter Player 1 Name: ")
let b = document.querySelector("#player1").textContent = a
let c = prompt("Enter Player 2 Name: ")
let d = document.querySelector("#player2").textContent = c

var btn = document.getElementById("but")
var point1 = document.getElementById("point1");
var point2 = document.getElementById("point2");
var score1 = 0;
var score2 = 0;
var counter = 0;

btn.addEventListener("click", () => {

    if (counter < 10) {

        var randomnumber1 = Math.floor(Math.random() * 6) + 1;
        var randomimage1 = "./dicey" + randomnumber1 + ".png";
        var dice1 = document.querySelectorAll("img")[0]
        dice1.setAttribute("src", randomimage1)

        var randomnumber2 = Math.floor(Math.random() * 6) + 1;
        var randomimage2 = "./dicey" + randomnumber2 + ".png";
        var dice2 = document.querySelectorAll("img")[1]
        dice2.setAttribute("src", randomimage2)

        if (randomnumber1 > randomnumber2) {
            document.querySelector("h1").textContent = a + " Wins"
            score1 += 5; // Add 5 points to Player 1
            point1.textContent = score1; // Update the score in the HTML
        }
        else if (randomnumber2 > randomnumber1) {
            document.querySelector("h1").textContent = c + " Wins"
            score2 += 5; // Add 5 points to Player 2
            point2.textContent = score2; // Update the score in the HTML
        }
        else {
            document.querySelector("h1").textContent = "It's a Draw"
        }

        counter++;
    }
    else {
        btn.disabled = true; // Disable the button after 10 iterations

        if (score1 > score2) {
            document.querySelector("h1").textContent = a + " is Winner";
        } else if (score2 > score1) {
            document.querySelector("h1").textContent = c + " is Winner";
        } else {
            document.querySelector("h1").textContent = "Match Drawn!";
        }
    }

})