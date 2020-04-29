var Person = require("../src/person")

describe("Person",()=>{
    let person = new Person("Thabiso",20,"Male",["coding","ping pong","chess"])

    it("checks if object is has name",()=>{
        expect(person.name).toBe("Thabiso")
    })

    it("checks if object is has age",()=>{
        expect(person.age).toBe(20)
    })
})