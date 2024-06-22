//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
//Code Solution
let magicianNames = ["Rafia", "Ai", "Huzaifa", "Imran", "Nadeem"];
let showMagicians = () => {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
};
console.log(showMagicians());
export {};
