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
var checkForMatch = function () {

}
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};

flipCard(0);
flipCard(2);