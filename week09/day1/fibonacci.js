/**
 * Created by cw on 2017-05-15.
 */
function fibonacci(index) {
    if (typeof index === "number") {
        index = Math.ceil(index);
        return (Math.pow((1 + Math.sqrt(5)), index) - Math.pow((1 - Math.sqrt(5)), index)) / (Math.sqrt(5) * Math.pow(2, index));
    } else {
        return 'It is not an integer'
    }

}

console.log(fibonacci('1'));

module.exports = fibonacci;