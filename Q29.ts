// Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
//independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit 
//is in your array. If the fruit is in your array, the if block should print a statement, 
//such as You really like bananas!

//Code Solution

let favoriteFruits:string[]=["Apple","Bananna","Kiwi","Orange","Pineapple","Grapes"];

let searchFruits:string[]=["AA"];

for (let i=0;i<favoriteFruits.length;i++){

    if (searchFruits[0]===favoriteFruits[i]){
        console.log(`You really like ${favoriteFruits[i]} and its index is ${[i]} in the list`)
    }
}



