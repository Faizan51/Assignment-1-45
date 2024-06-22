//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new
// set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of 
//the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
//you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
//Code Solution
let guestList = ["Rahim", "Qadir", "Zahoor", "Wahid", "Farhan"];
console.log(`Due to Some Reason ${guestList[1]} will not come on my Dinner`);
guestList[1] = "Raza";
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}! I would like to invite you for Dineer on Sunday !! `);
}
export {};
