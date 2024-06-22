//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
//people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
//Code Solution
let guestList = ["Rahim", "Qadir", "Zahoor", "Wahid", "Farhan"];
console.log(`Due to Some Reason ${guestList[1]} will not come on my Dinner`);
guestList[1] = "Raza";
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}! I would like to invite you for Dineer on Sunday !! `);
}
console.log("Hurray! I have found the Bigger Dinner Table !!");
guestList.unshift("Ali"); //Begining 
guestList.splice(3, 0, "Hamza"); //Middle
guestList.push("Aghar"); //Last
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}! I would like to invite you for Dineer on Sunday !! `);
}
export {};
