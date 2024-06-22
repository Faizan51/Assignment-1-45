// QUESTION 2 : Personal Message: Store a person’s name in a variable,
//  and print a message to that person. Your message 
// should be simple, such as, “Hello Eric, would you like to learn some 
// Python today?”
export {};
//Code Solution
// let name="Alex" //Name variable store value of Alex
// console.log(`The name of Person is ${name}`)// using bad tick to print name
//Question #03 Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
//Code Solution
// let nameCase:string="my name is shahid qureshi"
// console.log(`The name of Person is ${nameCase.toUpperCase()}`)
// console.log(`The name of Person is ${nameCase.toLowerCase()}`)
//for Title case 
// let nameCaseSpillited:string[]=nameCase.split(" ")
// for (let i=0; i<nameCaseSpillited.length; i++)
//     {
//     let character=nameCaseSpillited[i]
//     nameCaseSpillited[i]=character.charAt(0).toUpperCase()+character.slice(1).toLowerCase()
// }
// console.log(nameCaseSpillited.join(" "))
// Question:04 Famous Quote: Find a quote from a famous person you admire. 
// Print the quote and the name of its author. Your output should look something like the following, 
// including the quotation marks
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Code Soution
// let famQuote=`QuaideAzam once said,"Expect the best and prepare for the wrost"`
// console.log(famQuote)
//Question #05:Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called
// famous_person. Then compose your message and store it in a new variable called message. 
//Print your message.
//Code Solution
// let famPerson="Quaide Azam"
// console.log(`${famPerson} once said , "Expect the best and prepare for the wrost" `);
//Question #06 : Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white 
//spaces.
//Code Solution
// let personsName="My name is Muhammad Faizan "
// console.log("\t" + personsName+"\n")
//Question#07: Number Eight: Write addition, subtraction, multiplication, and division operations that each 
//result in the number 8. Be sure to enclose your operations 
//in print statements to see the results.
//Code Solution
// let add=3+5;
// let sub=11-3;
// let div=16/2;
// let mul=4*2;
// console.log("Addition "+add+"\n"+"Subtraction "+sub+"\n"+"Division "+div+"\n"+"Multiplication "+mul+"\n")
//Question #08: You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
//Code Solution
// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)
//Question #09: Favorite Number: Store your favorite number in a variable. Then,
// using that variable, create a message that reveals your favorite number.
// Print that message.
//Code Solution
// let favNumber:number=5;
// console.log(`My favourite Number is ${favNumber} `)
//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, just add your 
//name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.
//Code Solution
//Code Solution
// Question #08
// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)
// console.log(5 + 3)
//Question#07 
// let add=3+5;
// let sub=11-3;
// let div=16/2;
// let mul=4*2;
// console.log("Addition "+add+"\n"+"Subtraction "+sub+"\n"+"Division "+div+"\n"+"Multiplication "+mul+"\n")
// Question 11: Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
// //Code Solution
//  let namesOfFreiedns:string[] =["Fahim","Adeel","Razak","Rehman","Qasim"]
// console.log(namesOfFreiedns[0]);
// console.log(namesOfFreiedns[1]);
// console.log(namesOfFreiedns[2]);
// console.log(namesOfFreiedns[3]);
// console.log(namesOfFreiedns[4]);
//Question 12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. 
//The text of each message should be the same, but each message should be personalized with the person’s name.
//Code Solution
// for (let f=0;f<namesOfFreiedns.length;f++) {
//     console.log(`Greetings: ${namesOfFreiedns[f]}`)
// }
//Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.
// let listofStatements:string[]=["I like Suzuki Gs 150 ","I like to drive Bike ", "This Bike is easy and convinient","Its Reasobale in Price"];
// for (let l=0;l<listofStatements.length;l++) {
//     console.log(listofStatements[l])
// }
