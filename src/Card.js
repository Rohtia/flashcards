class Card {
    constructor (num, question, options, answer) {
        this.cardNumber = num;
        this.question = question;
        this.answers = options;
        this.correctAnswer = answer;
    }
}

module.exports = Card;