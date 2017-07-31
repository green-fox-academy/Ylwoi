/**
 * Created by cw on 2017-06-12.
 */
'use strict';

let hands = {
    player1: {
        cards: [
            {value: '', color: ''},
            {value: '', color: ''},
            {value: '', color: ''},
            {value: '', color: ''},
            {value: '', color: ''}
        ]
    },
    player2: {
        cards: [
            {value: '', color: ''},
            {value: '', color: ''},
            {value: '', color: ''},
            {value: '', color: ''},
            {value: '', color: ''}
        ]
    }
};

const validator = function(inputString) {
    let inputArray = inputString.split(' ');
    let condition = true;
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray.length; j++) {
            if (i != j && inputArray[i] === inputArray[j]) {
                condition *= false;
            } else {
                condition *= true;
            }
        }
    }
    console.log(condition);
    return condition;
//
};

const comparer = function(inputString) {
    if (validator(inputString)) {
        cardEncoder(inputString);


        return highCardValidator();

    }
};

const cardEncoder = function(inputString) {
    const cardRanking = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];
    let blackHand = inputString.split(' ').slice(1,6);
    let whiteHand = inputString.split(' ').splice(8,12);

    for (let i = 0; i < blackHand.length; i++) {
        if (blackHand[i].charAt(0) >= 2 && blackHand[i].charAt(0) <= 9) {
            hands.player1.cards[i].value = blackHand[i].charAt(0);
        } else if (blackHand[i].charAt(0) === 'T') {
            hands.player1.cards[i].value = 10;
        } else if (blackHand[i].charAt(0) === 'J') {
            hands.player1.cards[i].value = 11;
        } else if (blackHand[i].charAt(0) === 'Q') {
            hands.player1.cards[i].value = 12;
        } else if (blackHand[i].charAt(0) === 'K') {
            hands.player1.cards[i].value = 13;
        } else if (blackHand[i].charAt(0) === 'A') {
            hands.player1.cards[i].value = 14;
        };
        hands.player1.cards[i].color = blackHand[i].charAt(1);

        if (whiteHand[i].charAt(0) >= 2 && whiteHand[i].charAt(0) <= 9) {
            hands.player2.cards[i].value = whiteHand[i].charAt(0);
        } else if (whiteHand[i].charAt(0) === 'T') {
            hands.player2.cards[i].value = 10;
        } else if (whiteHand[i].charAt(0) === 'J') {
            hands.player2.cards[i].value = 11;
        } else if (whiteHand[i].charAt(0) === 'Q') {
            hands.player2.cards[i].value = 12;
        } else if (whiteHand[i].charAt(0) === 'K') {
            hands.player2.cards[i].value = 13;
        } else if (whiteHand[i].charAt(0) === 'A') {
            hands.player2.cards[i].value = 14;
        }
        hands.player2.cards[i].color = whiteHand[i].charAt(1)
    }
};

const highCardValidator = function() {

    let player1CardsOrdered = [];
    let player2CardsOrdered = [];
    for (let i = 0; i < 5; i++) {
        player1CardsOrdered.push(parseInt(hands.player1.cards[i].value));
        player2CardsOrdered.push(parseInt(hands.player2.cards[i].value));
    }
    player1CardsOrdered.sort(function(a, b) {
        return a - b;
    });
    player2CardsOrdered.sort(function(a, b) {
        return a - b;
    });
    console.log(player1CardsOrdered);
    console.log(player2CardsOrdered);

    for (let i = 4; i >= 0; i--) {
        if (player1CardsOrdered[i] > player2CardsOrdered[i]) {
            return 'Black wins. - with high card: ' + cardDecoder(player1CardsOrdered[i]);
        } else if (player1CardsOrdered[i] < player2CardsOrdered[i]) {
            return 'White wins. - with high card: ' + cardDecoder(player2CardsOrdered[i]);
        }
    }
    return 'Tie.'
}

const cardDecoder = function(num) {
    if (num === 10) {
        return 'Ten';
    } else if (num === 11) {
        return 'Jumbo';
    } else if (num === 12) {
        return 'Queen';
    } else if (num === 13) {
        return 'King';
    } else if (num === 14) {
        return 'Ace';
    } else {
        return num
    }
};


console.log(comparer('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH'));

module.exports = {
    validator,
    comparer
};