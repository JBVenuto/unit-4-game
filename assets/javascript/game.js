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
//Wins and loses
var wins = 0;
var loses = 0;

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
console.log(target);
console.log(green);
console.log(purple);
console.log(red);
console.log(yellow);

$(document).ready(function() {
    //Display the user's score and target number
    // document.getElementById("endNumber").innerHTML = "The target score is" + target ".";
    // document.getElementById("userSum").innerHTML = userScore;

    //Checks to see what button was clicked and add that button's value to the user's score
    $("#greenJewel").on("click", function() {
        userScore += green;
        console.log("User scroe: " + userScore);
    })
    $("#purpleJewel").on("click", function() {
        userScore += purple;
        console.log("User scroe: " + userScore);
    })
    $("#redJewel").on("click", function() {
        userScore += red;
        console.log("User scroe: " + userScore);
    })
    $("#yellowJewel").on("click", function() {
        userScore += yellow;
        console.log("User scroe: " + userScore);
    })


    //Display the user's score for the user to see
    // $("#userSum").append(userScore);

    //When a crystal is clicked check to see if the user score is at the target score or above
    $(".crystals").on("click", function () {

        //Displays the user's score
        $("#userSum").text("Your current score is " + userScore);
        //Check to see if the user's score is equal to the target number
        if (userScore === target) {
            alert("Congratulations! You reached the target score!");
            wins++;
            startGame();
        }

        //Check to see if the user goes over the target score
        if(userScore > target) {
            alert("Oh no! You passed the target score! Give it another try!");
            loses++;
            startGame();
        }
    })
})