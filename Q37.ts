//Large Shirts: Modify the make_shirt() function so that shirts are large by 
//default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with 
//the default message, and a shirt of any size with a different message.


let makeShirt1=(size:number,label:string="Large")=>{
    return `${size} and ${label}`
}
console.log(makeShirt1(8)+` I love typescipt`)


let makeShirt2=(size:number,label:string="Medium")=>{
    return `${size} and ${label}`
}
console.log(makeShirt2(6)+` I love typescipt`)


let makeShirt3=(size:number,label:string)=>{
    return `${size} and ${label}`
}
console.log(makeShirt3(4,"Small") +` Its for any baby`)