//Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin,
// would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

//Code Solution

let userName:string[]=["Arif","Habib","Abdullah","Yasir","Umer","admin"];

let adminUserName:string[]=["admin"]
for(let i=0;i<userName.length;i++){

    if (adminUserName[0]===userName[i]){
        console.log(`Hello ${userName[i]} , would you like to see report`)
    }else (console.log(`Hello ${userName[i]} thankyou for logging in again`))

}


