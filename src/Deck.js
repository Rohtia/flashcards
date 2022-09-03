const Card = require('../src/Card.js');
const Turn = require('../src/turn.js');

class Deck {
    constructor (cards) {
        this.cards = cards;
        this.count;
        this.countCards = function countCards () {
            this.count = this.cards.length;
        }
    }
}

module.exports = Deck;