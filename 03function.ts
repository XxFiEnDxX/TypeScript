function square(num: number){
    return num*num;
}

function getUpper(val: string):string{  // specifing the return type of the function
    return val.toUpperCase();
}

function signUp(name:string, email:string, isPaid:boolean){
    
}

let user = (name:string, email:string, isPaid:boolean = false):string =>{  // default value is false for isPaid
    return "random string"
}

square(5);
getUpper("amit");

const hero = ["SpiderMan", "Deadpool", "Wolverine"];

hero.map((hero):string=>{
    return `Hero is ${hero}`;
})

function consoleError(errmsg: string): void{  // void function
    console.log(errmsg);    
}

function handleError(errmsg: string): never{  // to handle error + also not returning anything
    throw new Error(errmsg);
}

export {}