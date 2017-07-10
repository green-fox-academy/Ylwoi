'use strict';

function stringToList(string, letter) {
  let list = [];
  let cacheWord = '';
  for (let i=0; i < string.length; i++) {
    if(string[i] !== letter) {
      cacheWord += string[i]
    }
    if (string[i] === letter) {
      if (cacheWord !== '') {
        list.push(cacheWord);
        cacheWord = '';
      }

    }
    if (i === string.length-1) {
      if (cacheWord !== '') {
        list.push(cacheWord)
      }
    }
  }
  return list;
}

console.log(stringToList('a,bcd,e', ','));

console.log(stringToList('one!two!three!e!','!'));