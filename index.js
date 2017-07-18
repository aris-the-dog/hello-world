/* hi im TOM, technical operating memory
* File: index.js
* Author: Malcolm_Cuthbertson
* purpose: This is my hello world application
* History 7/17/2017 - File Created
*/

var msg1 = 'Hi im TOM, technical operating memory.';
var msg2 = 'Things you may ask me include...';

function checkForTOM(message) {
if (message.includes('TOM')) {
    return 'Things you may ask me include...';
} else {
    return 'What is your favorite color?, Tell me a joke. or What is 27+48?'

}
}

console.log(checkForTOM(msg1));
console.log(checkForTOM(msg2));

var twentyseven = 27;
var fourtyeight = 48;


console.log('By the way, 27+48=');

function add(part1, part2) {
    return part1 + part2;
}
console.log(add(twentyseven, fourtyeight));
