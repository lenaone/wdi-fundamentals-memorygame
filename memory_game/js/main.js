var cards = [
{ rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png" },

{rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png" },

{rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png" },

{rank: "king",
suit: "diamons",
cardImage: "images/king-of-diamonds.png" }
];
cardsInPlay = [];
matchesWon = 0;
matchesLost = 0;
var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			won();
		} else {
		  lost();
		}
	}
};

var won = function () {
  alert("You found a match!");
  matchesWon++;
  document.getElementById('won_quantity').innerHTML = matchesWon;
};

var lost = function () {
  alert("Sorry, try it again.");
  matchesLost++;
  document.getElementById('lost_quantity').innerHTML = matchesLost;
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	checkForMatch();
};

var reset = function () {
  cardsInPlay = [];
  document.getElementById('game-board').innerHTML = "";
  createBoard();
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}

	document.getElementById('won_quantity').innerHTML = matchesWon;
	document.getElementById('lost_quantity').innerHTML = matchesLost;
  var resetButton = document.getElementById('reset_button');
  resetButton.addEventListener("click", reset);

};

createBoard();
