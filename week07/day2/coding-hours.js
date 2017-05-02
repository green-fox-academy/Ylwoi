/**
 * Created by cw on 2017-05-02.
 */
'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var averageDailyHours = 6;
var semesterWeeks = 17;
var semesterWorkdays = semesterWeeks * 5;
var workHours = semesterWorkdays*averageDailyHours;
var averageWorkhours = 52;
var codeHoursWeek = averageDailyHours * 5;

console.log('The attendee codes on workdays ', workHours , ' hours');
console.log('The percentage of the coding hours in the semester is ', codeHoursWeek/averageWorkhours*100, ' %.');