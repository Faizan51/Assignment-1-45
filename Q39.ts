//City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.

//Code Solution

let cityCountry=(city:string,country:string)=>{

    return `"name of city is ${city} and it's country is ${country}`
}


console.log(cityCountry(`"Islamabad"`,`"Pakistan "`))
console.log(cityCountry(`"Karachi"`,`"Pakistan "`))
console.log(cityCountry(`"Lahore"`,`"Pakistan"`))
