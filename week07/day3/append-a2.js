/**
 * Created by cw on 2017-05-03.
 */
'use strict';
// - Create a variable named `nimals`
//   with the following content: `["kuty", "macs", "cic"]`
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops

var nimals = ["kuty", "macs", "cic"];
nimals = nimals.map(function(e){
    return e+='a';
});
console.log(nimals);