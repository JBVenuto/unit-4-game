//Global variables that will be used to run the game
//Target number for the user to get to
var target;
//Value of each jewel
var green;
var purple;
var red;
var yellow;
//User's score
var userScore;

//Function to start the game
function startGame () {
    //Generate random numbers for the target number and the four crystals
    target = Math.floor(Math.random() * 102) + 19;
    green = Math.floor(Math.random() * 12) + 1;
    purple = Math.floor(Math.random() * 12) + 1;
    red = Math.floor(Math.random() * 12) + 1;
    yellow = Math.floor(Math.random() * 12) + 1;
    //Set the user's score to zero at the start of the game
    userScore = 0;

}
//Run start game function
startGame();

//Print the values of the jewels in the console for testing
console.log(green);
console.log(purple);
console.log(red);
console.log(yellow);

$(document).ready(function() {
    //Checks to see what button was clicked and add that button's value to the user's score

    $("#greenJewel").on("click", function() {

        userScore + green;
        alert("This jewel is worth " + green +" points.");
    })
    $("#purpleJewel").on("click", function() {
        userScore + purple;
    })
    $("#redJewel").on("click", function() {
        userScore + red;
    })
    $("#yellowJewel").on("click", function() {
        userScore + yellow;
    })

})
console.log("User score: " + userScore);

//Check to see if the user's score is equal to or over the target number

