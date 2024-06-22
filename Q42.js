//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians 
//by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
let magicianNames = ["Rafia", "Ai", "Huzaifa", "Imran", "Nadeem"];
let showMagicians = (greet) => {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(greet, magicianNames[i]);
    }
};
//console.log(showMagicians("Hi ,"))
console.log(magicianNames);
export {};
