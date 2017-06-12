/**
 * Created by cw on 2017-06-12.
 */
'use strict';

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
        const cardRanking = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];
        let blackHand = inputString.split(' ').slice(1,6);
        let whiteHand = inputString.split(' ').splice(8,12);
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
        for (let i = 0; i < blackHand.length; i++) {
            hands.player1.cards[i].value = blackHand[i].charAt(0);
            hands.player1.cards[i].color = blackHand[i].charAt(1);

            hands.player2.cards[i].value = whiteHand[i].charAt(0);
            hands.player2.cards[i].color = whiteHand[i].charAt(1)
        }
    }
};

comparer('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH');

module.exports = {
    validator,
    comparer
};