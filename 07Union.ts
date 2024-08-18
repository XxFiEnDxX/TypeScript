let score: number | string

score = 12
score = "win"

type User = {
    name:string,
    id:number
}

type Admin = {
    name:string,
    id:number
}

let amit: User | Admin = {name:"amit",id: 163}
amit = {name: "Fiend", id: 777}

function getId(id: number | string){
    if(typeof id === "string"){
        id.toLocaleString()
    }
    else{
        id += 2
    }
    console.log(`id is: ${id}`);
}

getId(23)
getId("23")


// arrays

const arr:number[] = [1,2,3]
const arr2:string[] = ["1","2"]
const arr3: (string | number)[] = [1,2,3,"4",5]

let direction : "North" | "East" | "West" | "South";

direction = "North"
direction = "West"


export {}