class Person {
    constructor(name,age,gender,interests){
        this.name=name
        this.age=age
        this.gender=gender
        this.interests=interests
    }

    hello(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old. My interests are ${this.interests}`
    }
}

let person = new Person('Thabiso',19,'male',['coding','ping pong','chess'])
let greeting = person.hello()
console.log(greeting)