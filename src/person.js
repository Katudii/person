class Person {
    constructor(name, age, gender, interests) {
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }

    stringInterests() {
        let copy = [...this.interests]
        let last = copy.pop()
        let string = copy.join(", ")

        return string + " and " + last
    }

    hello() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. My interests are ${this.stringInterests()}`
    }
}

module.exports = Person