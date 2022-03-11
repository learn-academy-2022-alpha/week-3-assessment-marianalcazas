// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacciSequence", () => {

    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
  
      expect(fibonacciSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibonacciSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
//pseudocode
//declare a function fibonacciSequence
//parameter --- number
// Create an array fibonacciArray with the first two numbers to add. 
// Use a for loop to iterate. 
// Use n-2 times in the loop, since the first two numbers will be already in the variable.
//use push as a built in method
//return the fibonacciArray

const fibonacciSequence = (num) => {
  var fibonacciArray = [1,1]
  for(let i = 0; i < num-2; i++){
    fibonacciArray.push(fibonacciArray[i]+fibonacciArray[i+1] )
  }
  return fibonacciArray
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("takesInArray", () => {

  it("returns a new array of only odd numbers sorted from least to greatest.", () => {
const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
  
    expect(takesInArray(fullArr1)).toEqual([ -9, 7, 9, 199])
    expect(takesInArray(fullArr2)).toEqual([-823, 7, 23])
  })
})


// b) Create the function that makes the test pass.
//pseudocode
//create a function takesInArray.
//filter only odd numbers sorted from least to greatest.
//returns a new array.
// use .sort to filtered results.


const takesInArray = (array) => {
  var oddNumbers = array.filter(value => typeof value === "number" && value % 2 !== 0)
  return oddNumbers.sort((a,b)=>a-b)
  }

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

describe("accumulatingSum", () => {

 
  it("takes in an array and returns an array of the accumulating sum.", () => {
const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []
    expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accumulatingSum(numbersToAdd3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.
//pseudocode
//Create a function accumulatingSum that takes in an array 
//create a variable sumA starting with 0
// use map to iterate through the arr and bring back the values
//return sumA

const accumulatingSum = (arr ) => {
 var sumA = 0
 return arr.map(value => { 
   return sumA = sumA + value
 })
 return sumA
}