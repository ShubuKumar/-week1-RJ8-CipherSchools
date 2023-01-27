// .map()

let array1 =[1,2,3,4,5];
let newArray =[];

for(let i=0; i< array.length; i++) {
    newArray[i]= array[i]*array[i];
}
console.log(newArray);

function functionForMap(element){
    return element*element;
}
let newArray1 = array.map(functionForMap);
console.log(newArray1); 

let newArray2 = array.map((element)=>element*element);
 console.log(newArray2); 

//.forEach()

// let array =[1,2,3,4,5];
// array.map((element,index)=>{
//     element*= element;
//     console.log(element);
// });
// console.log(array);

//.filter()
 let array2=[10,20,30,40,50];
let newArray3= array.filter((ele)=>ele>=30);
console.log(newArray3);
let temp = array.find((value)=>{
    return value>20;
});
console.log(temp);

//.sort()
let array3 = [50,40,30,20,10];
let sortedArray1= array.sort();
console.log(sortedArray1);

let array = [50,40,30,20,10,111,"4"]; //comparator function
let sortedArray = array.sort((ele1, ele2) =>{
    ele1 = Number(ele1);
    ele2 = Number(ele2);
    return ele1 - ele2;
});
console.log(sortedArray);

//Object destructuring
let details = {
     name: "Alex",
     age : 24,
     address: {
        street : "Brooklyn",
        city: "New York",
        state : "USA",
        passportDetails : {
            passportNumber : "ABCD1234",
        },
     },
};
console.log(details.address.passportDetails.passportNumber);

let {name : myName, age} = details;
console.log(myName, age);

//array Matching
//if (array1 ==array2)

//object matching
let obj1 = {name: "Shantanu" };
let obj2 = {name: "Shantanu" };

function areEqual(obj1, obj2) {
    if (obj1 == obj2) {
        return true;
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key of Object.keys(obj1)) {
        if (typeof obj2[key] === "undefiened") {
            return false;
        }
        if (obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1, obj2));

//Map and Set
let map = new Map();
map.set(1, "Shantanu");
map.set(2, "Alex");
console.log(map);

let set = new Set();
set.add(1);
set.add(-1);
console.log(set);

//Class

class Animal {
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs,color,family,sound){
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }

    showAnimal(){
        console.log(`The animal belongs to family ${this.family} `);
    }
}

let animal= new Animal(4, "brown", "rodent", "Phew Phew");
console.log(animal);
animal.showAnimal();