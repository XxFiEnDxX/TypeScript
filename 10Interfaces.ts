interface User {
    readonly dbid : number,
     email : string,
     userId : number,
     googleId?: string,
    //  startTrail: ()=>string,
    startTrail(): string,
    getCoupon(couponName: string, value: number): number
}

const amit:User  = {dbid: 123, email:"amit@gmail.com", userId: 163,
    startTrail: ()=>"trail started",
    getCoupon: (name: string, value: number)=>10
}

export {}