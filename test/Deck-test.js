const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/turn.js');

const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter',    'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');       

describe('Deck', function() {

    it('should instantiate an instance of Deck', function () {
        var deck = new Deck ();

        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should know how many cards it has', function() {
        var deck = new Deck ([card1, card2, card3]);

        deck.countCards();

        expect(deck.count).to.equal(3) //what's the length?
    });
});