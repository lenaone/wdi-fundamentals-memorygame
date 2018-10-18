cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
var checkForMatch = function () {

}
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};

flipCard(0);
flipCard(2);