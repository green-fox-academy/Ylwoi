/**
 * Created by cw on 2017-05-03.
 */
'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1}
];

// create a function that takes a list of students and logs:
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candyCounter (list) {
    var allCandies = 0;
    list.forEach(function (e) {
        allCandies += e['candies'];
    });
    return allCandies
}

function ageCounter (list) {
    var ages = 0;
    list.forEach(function (e) {
        if (e['candies'] < 5) {
            ages += e['age'];
        }
    });
    return ages
}

console.log(candyCounter(students));
console.log(ageCounter(students));