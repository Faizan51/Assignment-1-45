//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
// two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them know you’re sorry 
//you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.

let guestList:string[]=["Rahim","Qadir","Zahoor","Wahid","Farhan"]

console.log(`Due to Some Reason ${guestList[1]} will not come on my Dinner`);

guestList[1]="Raza";

for (let i=0;i<guestList.length;i++){
    console.log(`Dear ${guestList[i]}! I would like to invite you for Dineer on Sunday !! `)
}

console.log("Hurray! I have found the Bigger Dinner Table !!");

guestList.unshift("Ali") //Begining 

guestList.splice(3,0,"Hamza") //Middle

guestList.push("Aghar") //Last


for (let i=0;i<guestList.length;i++){
    console.log(`Dear ${guestList[i]}! I would like to invite you for Dineer on Sunday !! `)
}

console.log("Unfortunately we can invite only two people")

for (let j=0;j<=guestList.length+2;j++){
    guestList.pop()
}
console.log(guestList)

for (let k=0;k<guestList.length;k++){
    console.log(`Dear ${guestList[k]}! I would like to invite you for Dineer on Sunday i.e Your are still invited!! `)
}

console.log(guestList)

for (let r=0;r<=guestList.length;r++){
    guestList.pop()
}

console.log(guestList)


