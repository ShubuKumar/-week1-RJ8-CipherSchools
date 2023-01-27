//variables
var myName = "John";
console.log(myName);
var myName="Alex"
myName="alex"
console.log(myName);

const myName = "John";
console.log(myName);
myName = "Alex"; //this will give an error

const myName = [];
console.log(myName);
myName.push("John")
console.log(myName);

let myName="john";
console.log(myName);
myName="Alex";
console.log(myName);

//String Interpolation

let firstName="Shantanu";
let lastName="Shubham";
console.log(firstName+ " " +lastName);
let fullName= firstName+ " " + lastName;
console.log(fullName)

// let fullName=`${firstName} ${lastName}`;
// console.log(fullName);

//default Params

function addTwoNumbers(num1, num2){
    return num1+num2;
}
let addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

let addTwoNumbers = (num1, num2) =>num1 + num2;
console.log(addTwoNumbers(1,2));

let addTwoNumbers = (num1, num2=5) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
 }
 console.log(addTwoNumbers(1));

//Rest and Spread operator
let array = [5,10,15,20,25];
let newArray=[100,...array,30,35,40];
console.log(newArray);

let maxOfNumbers = (...numbers)=>{
    let maximum = Number.MIN_VALUE;
    for(let number of numbers){
        maximum = Math.max(maximum, number);
    }
    return maximum;
}
console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));

//  for Object
let object ={
    name: "John",
    age: 24,
    city: "New York"
};
let object2 = { ...object, name:"Shubham", country:"USA"};
console.log(object2);

let object1 ={
    name: "John",
    age: 24,
    address : {
        city: "New York",
        state: "NY",
        country: "USA",
    },
};
// let object2 = { ...object};
// object2.address.city= "Newark";
// console.log(object2);

let object3 = JSON.parse(JSON.stringify(object));
object3.address.city= "Newark";
console.log(object);