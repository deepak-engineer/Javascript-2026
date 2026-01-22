// singleton
// object.create

// object literals
const mySym = Symbol('key1')
const JsUser = {
  name: "Deepak",
  "full name": "Deepak Chauhan",
  [mySym]: "mykey1",
  age: 25,
  location: "Saharanpur",
  email: "deepak@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday","Saturday"]
}


// how to access object key value pairs two notations

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

// when you want to change the value 

JsUser.email = "deepakchauhan@gmail.com"
// when you want to freeze the value wanted to no one can change the object value

// Object.freeze(JsUser)

// create methods

JsUser.greetings = function(){
  console.log(`Hello js user`);
  
}
JsUser.greetingsTwo = function(){
  console.log(`Hello js user ${this.name}`);
  
}