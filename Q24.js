//More Conditional Tests: You don’t have to limit the number of tests you 
//create to 10. If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to, and less 
//than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Code Solution
let name1 = 'Faizan';
console.log("Is name1=='Faizan' ? I predict true");
console.log(name1 == 'Faizan');
let name2 = 'Faizan';
console.log("Is name2=='Faizan' ? I predict true");
console.log(name2 !== 'Faizan');
let name3 = 'faizan';
console.log("Is name3='Faizan' ? I predict true");
console.log(name3 == 'Faizan');
let num = 5;
console.log("Is num==5 ? Predict True");
console.log(num == 5);
let num2 = 5;
console.log("Is num2!==5 ? Predict True");
console.log(num2 !== 4);
let num3 = 5;
console.log("Is num3>5 ? Predict True");
console.log(num3 > 4);
let num5 = 5;
console.log("Is num5=>5 ? Predict True");
console.log(num5 >= 5);
let num4 = 5;
console.log("Is num4<5 ? Predict True");
console.log(num4 < 6);
let num6 = 5;
console.log("Is num6<=5 ? Predict True");
console.log(num6 <= 6);
// and or or operation
console.log(num6 || num5 < 5);
console.log(num6 && num5 < 5);
//Array
let listOfThings = ["K2", "River Indus", "Karachi", "Urdu", "Circket"];
let wantToSearch = ["Karachi"];
for (let i = 0; i < listOfThings.length; i++) {
    if (wantToSearch[0] === listOfThings[i])
        console.log(`Item is in the list and its index is ${[i]}`);
}
let listOfThings1 = ["K2", "River Indus", "Karachi", "Urdu", "Circket"];
let wantToSearch1 = ["Karachi"];
for (let i = 0; i < listOfThings1.length; i++) {
    if (wantToSearch1[0] === listOfThings1[i])
        console.log(`Item is in the list and its index is ${[i]}`);
    else
        (console.log('Item is not present in the array'));
}
export {};
