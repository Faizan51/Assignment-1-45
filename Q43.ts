//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
//with a copy of the array of magicians’ names. Because the original array will be unchanged,
// return the new array and store it in a separate array. Call show_magicians() with each array 
//to show that you have one array of the original names and one array with 
//the Great added to each magician’s name.


//Code Solution

let magicianNames:string[]=["Rafia","Ai","Huzaifa","Imran","Nadeem"]
let magicianNamesCopy:string[]=[...magicianNames]

let showMagicians=(greet:string)=>{
    let withGreeting=""

    for (let items of magicianNames){
        withGreeting+= `${greet} ${items} \n`
    }return withGreeting
}

let myGreetings=showMagicians("Hello")
let myArray=myGreetings.split("\n")

console.log(myArray)
console.log(magicianNames)
console.log(magicianNamesCopy)


