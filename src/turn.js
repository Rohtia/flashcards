class Turn {
    constructor (guess, card) {
        this.card = card;
        this.guess = guess;
        this.correct;
        this.feedback;
        this.returnGuess = function returnGuess(guess) {
            if (guess) {
                return guess;
            }
        }
        this.evaluateGuess = function evaluateGuess() {
            if (this.guess == this.card.correctAnswer) {
                this.correct = true;
            } else {
                this.correct = false;
            }
        }
        this.giveFeedback = function giveFeedback () {
            if (this.correct) {
                this.feedback = 'Correct!';
            } else {
                this.feedback = 'Incorrect';
            }
        }
    } //close constructor

   
}

module.exports = Turn;