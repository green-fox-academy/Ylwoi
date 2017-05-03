/**
 * Created by cw on 2017-05-03.
 */
'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer () {
    Object.values(arguments).forEach(function(e){
        console.log(e);
    });
}

printer('hello', 'bello', 4);