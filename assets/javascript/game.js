$(document).ready(function(){

userWins=0;
userLosses=0;
userScore=0;
//generates random number for evil power score
var compScoreTwo=Math.floor(Math.random()*120)+19;

//adds the randomly generated number to the page
var newCompScore = $("#compScore");
newCompScore.html(compScoreTwo);


//crystal gems random numbers
amethyst=Math.floor(Math.random()*12)+1;
console.log("amethyst:"+ amethyst);

pearl= Math.floor(Math.random()*12)+1;
console.log("pearl:"+ pearl);

steven=Math.floor(Math.random()*12)+1;
console.log("steven:"+ steven);

garnet=Math.floor(Math.random()*12)+1;
console.log("garnet:"+ garnet);








//gem on click functions
$("#amethyst").on("click", function(){

	var gemScore = $("#gemPower");
	gemScore.html(userScore);
	
	console.log(userScore+=amethyst);
});

$("#pearl").on("click", function(){

	var gemScore = $("#gemPower");
	gemScore.html(userScore);

	console.log(userScore+=pearl);
});

$("#steven").on("click", function(){

	var gemScore = $("#gemPower");
	gemScore.html(userScore);

	console.log(userScore+=steven);
});

$("#garnet").on("click", function(){

	var gemScore = $("#gemPower");
	gemScore.html(userScore);

	console.log(userScore+=garnet);
});


});