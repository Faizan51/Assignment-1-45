//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.

type mountains={
    name:string
    height: number
    area:number
}

type city ={
    name:string
    population:number
}

type language={
    country:string
}

let mountain:mountains={
    name:'KTWO',
    height:3000,
    area:90000
}


let river:mountains={
    name:'River Indus',
    height:0,
    area:15000
}

let cities:mountains& city={
    name:"Karachi",
    population:21000000,
    height:0,
    area:210000
}

let languages: city& language={
    name:"Urdu",
    population:21000000,
    country:"Pakistan"
}

let sports:city={
    name:"Circket",
    population:21000000
}


console.log(mountain.name);
console.log(cities.name)
console.log(sports.name)
console.log(languages.name)



 
