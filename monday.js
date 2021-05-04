// # Objects: Part 1

// Please print each of your answers to the console.

// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 

// const person ={
// choice1: "tea",
// choice2: "coffee",
// choice3: "milk"
// }
// let entries = Object.entries(person);
// console.log(entries)

// let values = Object.values(person);
// console.log(values)


// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })

const person ={
choice1: "tea",
choice2: "coffee",
choice3: "milk"
}
let entries = Object.entries(person);
console.log(entries)

let values = Object.values(person);
console.log(values)
// ```
// * Expected output: 
// ```javascript
// ["tea", "coffee", "milk"] 
// ```

// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
// * Example
// ```javascript
// let person = {
//   firstName: "Michael",
//   lastName: "Smith", 
//   job: "driver",
//   age: 20, 
//   city: Paris
// }
// ```
// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".


 let persona = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris",


sentence(){
return (`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city} `)
}
}
console.log(persona.sentence());

// ## Bonus Questions

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 

const objectToArray ={
  A: 1,
  B: 2,
  C: 3
}

entries = Object.entries(objectToArray);
console.log(entries)
// ```
// * Expected output: 
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

// ```javascript
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 

const objectToArray2={
  cats: 1,
  dogs: 2, 
  turtles: 4
} 

entries =Object.entries(objectToArray2)
console.log(entries);

// * Expected output: 
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 
// ```

// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 
// * Example
// ```javascript
// let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
// ```
// * Expected output: 
// ```javascript
// ["name", "class", "course"]

let student = {
  name: "Mike", 
  class: "4A" ,
  course: "English"
}

keys = Object.keys(student);
console.log(keys);               //Da' key word KEYS will give me the propperties of  a JS OBJECT.

// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example
// ```javascript
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```

let first = {firstName: "John"}
let last = {lastName: "Doe"}

let fullName ={ ...first, ...last}
console.log(fullName);

// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example: 
// ```javascript
// let person = {
//   name: "John", 
//   job: "teacher"
// }
// ```

let persona2 = {
 name: "John", 
 job: "teacher"
}

function swap(json){
    var ret ={};
    for (var key in json){
        ret[json[key]]=key;
    }
return ret;
}
console.log(swap(persona2))
// * Expected Output: 
// ```javascript
// {"John": name, "teacher": job} 
// ```

// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]
// ```

const objectArr = {
    A:1,
    B:2,
    C:3
};
values = Object.values(objectArr)
console.log(values)
keys= combine = [].concat(values, keys)

console.log(combine);