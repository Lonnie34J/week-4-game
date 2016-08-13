$(document).ready(function(){

userWins=0;
userLosses=0;
userScore=0;
gemScore = $("#gemPower");
gemScore.html(userScore);


//generates random number for evil power score
var compScoreTwo=Math.floor(Math.random()*100+20);

//adds the randomly generated number to the page
var newCompScore = $("#compScore");
newCompScore.html(compScoreTwo);


//starts game
function start(){
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

	console.log(userScore+=amethyst);
	gemScore = $("#gemPower");
	gemScore.html(userScore);	
	
});

$("#pearl").on("click", function(){

	console.log(userScore+=pearl);
	gemScore = $("#gemPower");
	gemScore.html(userScore);

});

$("#steven").on("click", function(){

	console.log(userScore+=steven);
	gemScnore = $("#gemPower");
	gemScore.html(userScore);

});

$("#garnet").on("click", function(){

	console.log(userScore+=garnet);
	gemScore = $("#gemPower");
	gemScore.html(userScore);

});
}

function finish(){
	if (userScore>compScoreTwo){
		userLosses++;
		alert("you loss");
	}

	else if(userScore==compScoreTwo){
		userWins++;
		alert("you win");
	}

}


start();
finish();


});