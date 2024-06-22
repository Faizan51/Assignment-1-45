//Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter 
//for the country a default value. Call your function for three different cities, 
//at least one of which is not in the default country.

//Code Solution

let describeCity1=(name:string,country:string="Pakistan")=>{
    return `${name} is in ${country} `
}

let result1=describeCity1("Karachi")
console.log(result1)


let describeCity2=(name:string,country:string="Pakistan")=>{
    return `${name} is in ${country} `
}

let result2=describeCity1("Islamabad")
console.log(result2)

let describeCity3=(name:string,country:string)=>{
    return `${name} is in ${country} `
}

let result3=describeCity1("Peshawar","Pakistan")
console.log(result3)



