/**
 * Created by cw on 2017-05-03.
 */
'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";

todoText = todoText.split(',');
todoText.push(' - Download games\n');
todoText.push('\t- Diablo');
todoText = todoText.toString();
console.log(todoText);