// let user = {
//     name: "amit kumar singh",
//     isPaid: true,
//     mail: "amit@gmail.com",
//     isActive: true,
// }

import { isAxiosError } from "axios"

// function createUser({name: string , isPaid: boolean}){

// }

// createUser({name:"amit", isPaid:true})
// createUser(user);

// function createCourse():{} { // the return type of the fucntion is an Object;
//     return {}
// }
// function createCourse2():{name:string , price: number} { // the return type of the fucntion is an Object;
//     return {name:"react.js", price: 399}
// }


// typeAlias

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// type str = string

// function createUser(user: User): User{
//     return user;
// }
    
// createUser({name:"amit", email:"amit@.com", isActive:true});
    
    type User = {
        readonly _id: string
        name: string
        email: string
        isActive: boolean
    }

    let myUser: User = {
        _id: "0163",
        name: "amit",
        email: "amit0163@.com",
        isActive: true
    }

    myUser.email = "amit@gmail.com"
    // myUser._id = "0165"   // readonly

    type myType = number & string & {cvv:number} & User


export {}