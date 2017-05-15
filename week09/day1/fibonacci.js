/**
 * Created by cw on 2017-05-15.
 */
function fibonacci(index) {
    return (Math.pow((1 + Math.sqrt(5)), index) - Math.pow((1 - Math.sqrt(5)), index)) / (Math.sqrt(5) * Math.pow(2, index));
}

module.exports = fibonacci;