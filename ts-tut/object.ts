//Don't repeat same Object Type
type objType={name:string,age:number,email:string}

const person:objType={
    name:'hitesh',
    age:25,
    email:'hitesh@gmail.com'
}

const User:objType={
    name:'ved',
    age:20,
    email:'ved@gmail.com'
}
console.warn(User.name)




// const person:{name:string,age:number,email:string}={
//     name:'hitesh',
//     age:25,
//     email:'hitesh@gmail.com'
// }
// console.warn(person.name)

// const user:{name:string,age:number,email:string}={
//     name:'ved',
//     age:20,
//     email:'ved@gmail.com'
// }
// console.warn(user.name)