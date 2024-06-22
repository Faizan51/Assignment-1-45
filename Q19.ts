//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.

//Code Solution



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

let c=0;

for (let p=0;p<guestList.length;p++){
    console.log(`Dear ${guestList[p]}! I would like to invite you for Dineer on Sunday !! `)
c++
}

console.log(`There are ${c} no. of Guests will apear in the Dinner`)



