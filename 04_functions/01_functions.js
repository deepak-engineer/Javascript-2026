
// when i need to print my name several times

// console.log("deepak");
// console.log("deepak");
// console.log("deepak");
// console.log("deepak");
// console.log("deepak");
// console.log("deepak");
// console.log("deepak");
// console.log("deepak");

// this is the very lengthy proccess

// here the introduce functions which makes my task easy

const sayMyName = function(){
  console.log('deepak');
  
}

// when i want to print my name several times i execute this function several times 

sayMyName()
sayMyName()
sayMyName()
sayMyName() // like this 

// after that i need to make some arithmetic operations like add two numbers

// function addTwoNumber(number1, number2){ //this is parameter
//   console.log(number1 + number2);
  
// }
function addTwoNumber(number1, number2){ //this is parameter
  return result = number1 + number2

  console.log('deepak'); // after return this is not working
  
  
}


// this is argument

// const result = addTwoNumber(2,4) // you want to hold this in variable but you got the undefined
const result = addTwoNumber(2,4)// now you got the real value after returning the value in function


// username login message

function loginUserMessage(username){
  // introduce some if condition
  if(!username) return 'please enter username'


  return `${username} just logged in`
}
console.log(loginUserMessage());


// suppose add to cart function to calculate cart price when the user add to cart more or more items introduce ...rest operator its returns a array

function calculateCartPrice(...num1){
 return num1
}


// console.log(calculateCartPrice(200,3000,5000));

const user = {
  username: 'deepak',
  price: 99
} // how to use this object in functions

function handleObject(anyobj){
   console.log(`username is ${anyobj.username} price is ${anyobj.price}`);
   
}

// handleObject(user)

// another way to store obj in function

handleObject({
  username: 'deepak',
  price: 999
})

// in array

const myNewArray = [200,400,500]

function handleArray(anyArr){
  console.log(anyArr[0]);
  
}

// handleArray(myNewArray)
// another way

handleArray([200,400,5000])

