const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card.js');

const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
});

it("should take the user's guess", function () {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
});

it('should have the current card in play', function(){
    const turn = new Turn('object', card);
    expect(turn.card.cardNumber).to.equal(1);
});

it('should return the guess', function() { //returnGuess()
    const turn = new Turn('object', card);
    var guess = turn.guess //???

    expect(turn.guess).to.equal('object');
});

it('should return the card', function() { //returnCard()
    const turn = new Turn('object', card);
    
    expect(turn.card).to.equal(card);
});

it('should check if guess is correct', function() {
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('array', card);

    turn1.evaluateGuess();
    turn2.evaluateGuess();

    expect(turn1.correct).to.equal(true);
    expect(turn2.correct).to.equal(false);
});

it('should return feedback on the answer', function() {
    const turn1 = new Turn ('object', card);
    const turn2 = new Turn ('array', card);

    turn1.evaluateGuess();
    turn2.evaluateGuess();

    turn1.giveFeedback();
    turn2.giveFeedback();

    expect(turn1.feedback).to.equal('Correct!');
    expect(turn2.feedback).to.equal('Incorrect');
});