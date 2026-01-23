// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
  // console.log(num );
    
}

// Maps => uses for unique values

const map = new Map()

map.set('IN', 'india')
map.set('USA', 'United states of america')

// when you want to loop it using for of 
// and you want to key value pairs
// for (const [key, value] of object) {
//   console.log(key, ":-", value);
// }

// and you want to loop through any object using for of

// const myObject = {
//   "game1": "PUBG",
//   "game2": "Cod"
// }

// for (const [key,value] of myObject) {
//   console.log(key,value);
  
// } // this is not working


// for in loop for object

 
const coding = ['js', 'ruby', 'php','node']
// forEach loop 

// coding.forEach(value => {
//   console.log(value);
  
// });


// filter take a conditon

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter((num) => (
//   num > 4
// ))

// map loop
 
// const newNum = myNums.map((num) => (
// num + 10
// ))

// chaining
// const newNum = myNums.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 4)


// console.log(newNum);


// reduce loop mostly use for cart items total
// first of all reduce take a initial value

const myArr = [1,2,3]

// i want to add myArr values

// const myTotal = myArr.reduce((acc,curr) => acc + curr,0)

// console.log(myTotal);

// shopping cart using reduce

const shoppingCart = [
  {
   title: 'spot-light',
   price: 299
  },
  {
   title: 'spot-light',
   price: 399
  },
  {
   title: 'spot-light',
   price: 499
  },
]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(priceToPay);




