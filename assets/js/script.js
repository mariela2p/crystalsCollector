$(document).ready(function(){

//Create random numbers between 19 - 120
var randomNumber = Math.floor((Math.random() * 101)+19);
console.log(randomNumber);


//Asign the number to the id in html
$("#numberToMatch").append(randomNumber);


//Declare variables for Score 

var wins = 0
var losses = 0
var totalScore = 0
var numberToMatch =[]; 


//Create random numbers between 1 - 12 for each Crystal defining a variable
var greenCrystal = Math.floor((Math.random() * 12) + 1);
var purpleCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);
var redCrystal = Math.floor((Math.random() * 12) + 1);

//Asign them to each Crystal in html

$("#green").html(greenCrystal);
	console.log(greenCrystal);

$("#purple").html(purpleCrystal);
	console.log(purpleCrystal);

$("#yellow").html(yellowCrystal);
	console.log(yellowCrystal);

$("#red").html(redCrystal);
	console.log(redCrystal);

//set up click for jewels

$("#green").on("click", function() {
			totalScore = totalScore + greenCrystal;
			console.log(totalScore); 
			$("#totalScore").text(totalScore);

});

$("#purple").on("click", function() {
			totalScore = totalScore + purpleCrystal;
			console.log(totalScore); 
			$("#totalScore").text(totalScore);

});

$("#yellow").on("click", function() {
			totalScore = totalScore + yellowCrystal;
			console.log(totalScore); 
			$("#totalScore").text(totalScore);

});

$("#red").on("click", function() {
			totalScore = totalScore + redCrystal;
			console.log(totalScore); 
			$("#totalScore").text(totalScore);
});

//Set win/lose conditions
//Add the wins to the "wins"
//Add the loses to the "loses"
if (totalScore === numberToMatch){
	wins = wins + 1;
	$("#wins").text("Wins: " + wins);
};
if (totalScore === numberToMatch){
	losses = losses + 1;
	$("#losses").text("Losses: " + losses);
};

});

//Reset the totalScore after wining or loosing




//Reset the value of the Crystals


