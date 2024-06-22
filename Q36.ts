//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
//should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and 
//the message printed on it. Call the function.


//Code Solution

let makeShirt=(size:number,label:string)=>{
    return `My Shirt size is ${size} and the my Label is ${label} .`
}

console.log(makeShirt(8,"Nike"))