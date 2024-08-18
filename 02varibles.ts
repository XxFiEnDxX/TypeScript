let greeting: string = "Amit Kumar Singh";

console.log(greeting);


// number consist of both int & float

let num = 345.53  // if u r direct assigning the value so u don't need to write the type of the variable (:number)

// boolean

let flag: boolean = true;

// any

let hero; // available to any type of value. bad pratice to use any. why are we using TS if we dont want to type check.

function superHero() {
    return "Loki"
}

hero = superHero();

export {}