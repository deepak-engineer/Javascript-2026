//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol

const str1 = "Deepak" // string
const age = 25 // Number
const isLoggedIn = false // Boolean
const outsideTemp = null
let userEmail

const id = Symbol("123")
const userId = Symbol("123") // if its looks same does'nt mean value is same

const bigNumber = 2111112312323123412n

// Refrence (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // Array

let myObj = {
  name: "Deepak",
  age: 25,
}

const myFunction = function () {
  console.log("Hello World")
}

// +++++++++++++++++++++++++++++

// Memory
// Stack (Primitive) Heap (Non-Primitive)
// Stack => give us a copy of the real value
// Heap => give us  a refrence of the real value

// primitive

let value = "deepak"

let anotherValue = value
anotherValue = "deepakone"
console.log(anotherValue)

let userOne = {
  email: "devwebwithdeepak@gmail.com",
  upi: "deepak@ybl",
}

let userTwo = userOne

userTwo.email = "deepak@gmail.com"

console.log(userOne)
